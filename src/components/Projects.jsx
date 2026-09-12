import { useEffect, useRef, useState } from 'react';

function handleVideoLoopLimit(event, loopUntil) {
  if (!loopUntil || event.currentTarget.currentTime < loopUntil) {
    return;
  }

  event.currentTarget.currentTime = 0;
  void event.currentTarget.play();
}

function enforceMutedPlayback(event) {
  event.currentTarget.muted = true
  event.currentTarget.defaultMuted = true
  event.currentTarget.volume = 0
}

function updateProjectPointer(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}

const techIconMap = {
  'Java': { slug: 'openjdk', color: 'EA2D2E' },
  'Java 21': { slug: 'openjdk', color: 'EA2D2E' },
  'Spring Boot 3': { slug: 'springboot', color: '6DB33F' },
  'Spring Boot 4.1': { slug: 'springboot', color: '6DB33F' },
  'Spring AI': { slug: 'spring', color: '6DB33F' },
  'Spring Data JPA': { slug: 'spring', color: '6DB33F' },
  'Spring WebFlux': { slug: 'spring', color: '6DB33F' },
  'MySQL': { slug: 'mysql', color: '4479A1' },
  'PostgreSQL': { slug: 'postgresql', color: '4169E1' },
  'Swagger / OpenAPI': { slug: 'swagger', color: '85EA2D' },
  'Telegram Bot API': { slug: 'telegram', color: '26A5E4' },
  'Render': { slug: 'render', color: '46E3B7' },
  'JavaScript': { slug: 'javascript', color: 'F7DF1E' },
  'TypeScript': { slug: 'typescript', color: '3178C6' },
  'Angular 20': { slug: 'angular', color: 'DD0031' },
  'React': { slug: 'react', color: '61DAFB' },
  'Vite': { slug: 'vite', color: '646CFF' },
  'MongoDB': { slug: 'mongodb', color: '47A248' },
  'Spring Security': { slug: 'springsecurity', color: '6DB33F' },
  'JWT': { slug: 'jsonwebtokens', color: 'FFFFFF' },
  'CSS': { slug: 'css', color: '1572B6' },
  'CLI': { slug: 'gnubash', color: '4EAA25' },
  'Maven': { slug: 'apachemaven', color: 'C71A36' },
  'Docker': { slug: 'docker', color: '2496ED' },
  'Docker Compose': { slug: 'docker', color: '2496ED' },
  'JUnit 5': { slug: 'junit5', color: '25A162' },
  'Spring Data Reactive MongoDB': { slug: 'mongodb', color: '47A248' },
  'Spring Data R2DBC': { slug: 'spring', color: '6DB33F' },
}

function getTechIcon(tech) {
  const icon = techIconMap[tech]

  if (!icon) {
    return null
  }

  return `https://cdn.simpleicons.org/${icon.slug}/${icon.color}?viewbox=auto`
}

const AUTO_ROTATING_PROJECTS = new Set(['kakebot', 'wolves', 'blackjack'])
const AUTO_ROTATE_DELAY_MS = 3000
const MEDIA_FADE_OUT_MS = 280
const MEDIA_FADE_IN_MS = 380

function getAutoplayMediaIndexes(project) {
  return (project.media ?? [])
    .map((mediaItem, index) => (mediaItem.type === 'image' ? index : null))
    .filter((index) => index !== null)
}

function getInitialSelectedMedia(projects) {
  return Object.fromEntries(projects.map((project) => [project.id, 0]))
}

export default function Projects({ reducedEffects = false, reducedMotion = false, content }) {
  const projects = content.projects
  const allowGalleryMotion = !reducedMotion
  const [selectedMedia, setSelectedMedia] = useState(() => getInitialSelectedMedia(projects))
  const [autoplayStoppedByUser, setAutoplayStoppedByUser] = useState({})
  const [mediaPhase, setMediaPhase] = useState({})
  const [expandedProjects, setExpandedProjects] = useState({})
  const mediaTransitionTimeoutsRef = useRef({})

  const transitionToMedia = (projectId, mediaIndex) => {
    if (selectedMedia[projectId] === mediaIndex) {
      return
    }

    const existingTimeouts = mediaTransitionTimeoutsRef.current[projectId]
    if (existingTimeouts) {
      window.clearTimeout(existingTimeouts.fadeOutTimeoutId)
      window.clearTimeout(existingTimeouts.fadeInTimeoutId)
    }

    if (!allowGalleryMotion) {
      setSelectedMedia((current) => ({
        ...current,
        [projectId]: mediaIndex,
      }))
      setMediaPhase((current) => ({ ...current, [projectId]: 'idle' }))
      return
    }

    setMediaPhase((current) => ({ ...current, [projectId]: 'fading-out' }))

    const fadeOutTimeoutId = window.setTimeout(() => {
      setSelectedMedia((current) => ({
        ...current,
        [projectId]: mediaIndex,
      }))
      setMediaPhase((current) => ({ ...current, [projectId]: 'fading-in' }))

      const fadeInTimeoutId = window.setTimeout(() => {
        setMediaPhase((current) => ({ ...current, [projectId]: 'idle' }))
        delete mediaTransitionTimeoutsRef.current[projectId]
      }, MEDIA_FADE_IN_MS)

      mediaTransitionTimeoutsRef.current[projectId] = {
        fadeOutTimeoutId,
        fadeInTimeoutId,
      }
    }, MEDIA_FADE_OUT_MS)

    mediaTransitionTimeoutsRef.current[projectId] = {
      fadeOutTimeoutId,
      fadeInTimeoutId: null,
    }
  }

  useEffect(() => {
    return () => {
      Object.values(mediaTransitionTimeoutsRef.current).forEach((timeouts) => {
        window.clearTimeout(timeouts.fadeOutTimeoutId)
        window.clearTimeout(timeouts.fadeInTimeoutId)
      })
    }
  }, [])

  useEffect(() => {
    setSelectedMedia((current) => {
      const nextState = getInitialSelectedMedia(projects)

      projects.forEach((project) => {
        if (current[project.id] != null) {
          nextState[project.id] = current[project.id]
        }
      })

      return nextState
    })
  }, [projects])

  useEffect(() => {
    if (!allowGalleryMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return
      }

      projects.forEach((project) => {
        if (!AUTO_ROTATING_PROJECTS.has(project.id) || autoplayStoppedByUser[project.id]) {
          return
        }

        const autoplayIndexes = getAutoplayMediaIndexes(project)
        if (autoplayIndexes.length < 2) {
          return
        }

        const currentIndex = selectedMedia[project.id] ?? autoplayIndexes[0]
        const currentAutoplayIndex = autoplayIndexes.indexOf(currentIndex)
        const nextAutoplayIndex =
          currentAutoplayIndex >= 0
            ? autoplayIndexes[(currentAutoplayIndex + 1) % autoplayIndexes.length]
            : autoplayIndexes[0]

        transitionToMedia(project.id, nextAutoplayIndex)
      })
    }, AUTO_ROTATE_DELAY_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [allowGalleryMotion, autoplayStoppedByUser, projects, selectedMedia])

  function handleMediaSelection(projectId, mediaIndex) {
    setAutoplayStoppedByUser((current) => ({ ...current, [projectId]: true }))
    transitionToMedia(projectId, mediaIndex)
  }

  function stepThroughMedia(project, direction) {
    const currentIndex = selectedMedia[project.id] ?? 0
    const nextIndex = (currentIndex + direction + project.media.length) % project.media.length
    handleMediaSelection(project.id, nextIndex)
  }

  function toggleProjectDetails(projectId) {
    setExpandedProjects((current) => ({
      ...current,
      [projectId]: !current[projectId],
    }))
  }

  return (
    <section id="proyectos" className="projects app-section" data-section="proyectos">
      <div className="container">
        <div className="projects-intro scroll-reveal">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <div className="projects-intro-layout">
            <div className="projects-intro-copy">
              <h2>{content.title}</h2>
              <p className="section-lead">{content.lead}</p>
            </div>
            <aside className="projects-quote-card">
              <span className="quote-mark quote-mark-open" aria-hidden="true">“</span>
              <p className="section-quote">{content.quote}</p>
              <div className="quote-footer">
                <p className="section-quote-author">{content.quoteAuthor}</p>
                <span className="quote-mark quote-mark-close" aria-hidden="true">”</span>
              </div>
            </aside>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const activeMedia = project.media?.[selectedMedia[project.id] ?? 0];
            const isExpanded = Boolean(expandedProjects[project.id])
            const detailsId = `project-details-${project.id}`

            return (
              <article
                key={project.id}
                className={`project-card scroll-reveal ${index % 2 === 0 ? 'project-card-from-left' : 'project-card-from-right'}`}
                style={{
                  '--reveal-order': index + 1,
                  '--project-tone': project.tone,
                  '--project-tone-soft': project.toneSoft,
                  '--project-media-stage': project.mediaBackground ?? 'rgba(8, 9, 12, 0.88)',
                }}
                onPointerMove={reducedEffects ? undefined : updateProjectPointer}
              >
                <div className="project-header project-reveal-layer project-reveal-header">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {activeMedia && (
                  <div className={`project-image project-reveal-layer project-reveal-media${activeMedia.type === 'image' || activeMedia.fit === 'contain' ? ' project-image-contain' : ''}`}>
                    <div className={`project-media-stage project-media-stage-${mediaPhase[project.id] ?? 'idle'}`}>
                      {activeMedia.type === 'video' ? (
                        <video
                          src={activeMedia.src}
                          poster={activeMedia.poster}
                          autoPlay={!reducedEffects}
                          loop={!activeMedia.loopUntil}
                          muted
                          playsInline
                          controls
                          preload={reducedEffects ? 'none' : 'metadata'}
                          onLoadedMetadata={enforceMutedPlayback}
                          onPlay={enforceMutedPlayback}
                          onVolumeChange={enforceMutedPlayback}
                          onTimeUpdate={(event) => handleVideoLoopLimit(event, activeMedia.loopUntil)}
                        />
                      ) : (
                        <img
                          src={activeMedia.src}
                          alt={`${project.name} - ${activeMedia.label}`}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                    {project.media.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="project-gallery-arrow project-gallery-arrow-previous"
                          aria-label={`${content.previousMedia}: ${project.name}`}
                          onClick={() => stepThroughMedia(project, -1)}
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          className="project-gallery-arrow project-gallery-arrow-next"
                          aria-label={`${content.nextMedia}: ${project.name}`}
                          onClick={() => stepThroughMedia(project, 1)}
                        >
                          →
                        </button>
                        <div className={`project-gallery-status project-gallery-status-${activeMedia.type}`} aria-live="polite">
                          <span>{activeMedia.label}</span>
                          <span>{(selectedMedia[project.id] ?? 0) + 1} / {project.media.length}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="project-content project-reveal-layer project-reveal-content">
                  {project.backendHighlights && (
                    <div className="project-backend-highlights" aria-label="Backend highlights">
                      {project.backendHighlights.map((highlight) => (
                        <span key={highlight} className="project-backend-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-actions project-summary-actions">
                    <button
                      type="button"
                      className="project-details-toggle"
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => toggleProjectDetails(project.id)}
                    >
                      {isExpanded ? content.hideDetails : content.showDetails}
                      <span aria-hidden="true">⌄</span>
                    </button>
                    {project.actions &&
                      project.actions.map((action) => (
                        <a
                          key={action.href}
                          className={`project-link${action.emphasis === 'primary' ? ' project-link-primary' : ''}`}
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {action.label}
                        </a>
                      ))}
                  </div>

                  <div
                    id={detailsId}
                    className={`project-details-panel${isExpanded ? ' is-expanded' : ''}`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="project-details-inner">
                      {project.ownership && (
                        <p className="project-ownership">{project.ownership}</p>
                      )}
                      <p className="project-long-description">{project.longDescription}</p>
                      {project.highlights && (
                        <ul className="project-highlights">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                      <div className="project-tech-section">
                        <p className="project-tech-title">{content.stackLabel}</p>
                        <div className="project-tech-list">
                          {project.tech.map((tech) => (
                            <span key={tech} className="project-tech-item">
                              {getTechIcon(tech) ? (
                                <img
                                  className="tech-icon"
                                  src={getTechIcon(tech)}
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  aria-hidden="true"
                                />
                              ) : (
                                <span className="tech-icon tech-icon-fallback" aria-hidden="true">
                                  {tech.slice(0, 2).toUpperCase()}
                                </span>
                              )}
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

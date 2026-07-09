import { useState } from 'react';

function handleVideoLoopLimit(event, loopUntil) {
  if (!loopUntil || event.currentTarget.currentTime < loopUntil) {
    return;
  }

  event.currentTarget.currentTime = 0;
  void event.currentTarget.play();
}

const techIconMap = {
  'Java': { slug: 'openjdk', color: 'EA2D2E' },
  'Java 21': { slug: 'openjdk', color: 'EA2D2E' },
  'Spring Boot 3': { slug: 'springboot', color: '6DB33F' },
  'Spring Data JPA': { slug: 'spring', color: '6DB33F' },
  'Spring WebFlux': { slug: 'spring', color: '6DB33F' },
  'MySQL': { slug: 'mysql', color: '4479A1' },
  'Swagger / OpenAPI': { slug: 'swagger', color: '85EA2D' },
  'Telegram Bot API': { slug: 'telegram', color: '26A5E4' },
  'Render': { slug: 'render', color: '46E3B7' },
  'JavaScript': { slug: 'javascript', color: 'F7DF1E' },
  'React': { slug: 'react', color: '61DAFB' },
  'CLI': { slug: 'gnubash', color: '4EAA25' },
}

function getTechIcon(tech) {
  const icon = techIconMap[tech]

  if (!icon) {
    return null
  }

  return `https://cdn.simpleicons.org/${icon.slug}/${icon.color}?viewbox=auto`
}

export default function Projects({ reducedEffects = false, content }) {
  const projects = content.projects
  const [selectedMedia, setSelectedMedia] = useState(
    Object.fromEntries(projects.map((project) => [project.id, 0])),
  );

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

            return (
              <article
                key={project.id}
                className="project-card scroll-reveal"
                style={{
                  '--reveal-order': index + 1,
                  '--project-tone': project.tone,
                  '--project-tone-soft': project.toneSoft,
                  '--project-media-stage': project.mediaBackground ?? 'rgba(8, 9, 12, 0.88)',
                }}
              >
                <div className="project-header">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {activeMedia && (
                  <div className={`project-image${activeMedia.fit === 'contain' ? ' project-image-contain' : ''}`}>
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
                )}

                {project.media && project.media.length > 1 && (
                  <div className="project-media-tabs" aria-label={`Galeria de ${project.name}`}>
                    {project.media.map((mediaItem, index) => (
                      <button
                        key={`${project.id}-${mediaItem.label}`}
                        type="button"
                        className={`project-media-tab${selectedMedia[project.id] === index ? ' is-active' : ''}`}
                        onClick={() =>
                          setSelectedMedia((current) => ({
                            ...current,
                            [project.id]: index,
                          }))
                        }
                      >
                        {mediaItem.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="project-content">
                  <p className="project-long-description">{project.longDescription}</p>
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {project.actions && (
                    <div className="project-actions">
                      {project.actions.map((action) => (
                        <a
                          key={action.href}
                          className="project-link"
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

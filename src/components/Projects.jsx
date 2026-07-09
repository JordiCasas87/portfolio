import { useState } from 'react';

function handleVideoLoopLimit(event, loopUntil) {
  if (!loopUntil || event.currentTarget.currentTime < loopUntil) {
    return;
  }

  event.currentTarget.currentTime = 0;
  void event.currentTarget.play();
}

const projects = [
  {
    id: 'kakebot',
    name: 'KakeBot',
    category: 'Finanzas personales',
    tone: 'rgba(255, 196, 92, 0.16)',
    toneSoft: 'rgba(255, 116, 88, 0.12)',
    mediaBackground: '#f7f7f4',
    description: 'Tu registro de gastos diarios, fácil, rápido y con un toque kawaii',
    longDescription: 'Una aplicación de gestión de gastos con interfaz amigable integrada con Telegram. Permite registrar gastos rápidamente desde la app o el bot, con categorización automática y resúmenes visuales.',
    media: [
      { type: 'video', src: '/images/kakebot-demo.mov', label: 'Demo', poster: '/images/kakebot-home.png', fit: 'contain' },
      { type: 'image', src: '/images/kakebot-home.png', label: 'Inicio' },
      { type: 'image', src: '/images/kakebot-dashboard.png', label: 'Dashboard' },
      { type: 'image', src: '/images/kakebot-login.png', label: 'Login' },
    ],
    tech: ['Java', 'Spring Boot', 'Telegram Bot API', 'PostgreSQL', 'Frontend'],
  },
  {
    id: 'planner',
    name: 'Planner Boy',
    category: 'CLI + UI experimental',
    tone: 'rgba(117, 255, 159, 0.14)',
    toneSoft: 'rgba(89, 205, 255, 0.12)',
    mediaBackground: '#d8d2b2',
    description: 'Agenda CLI con mini frontend estilo Game Boy',
    longDescription: 'Una agenda de línea de comandos con una interfaz estilo Game Boy vintage. Perfecta para quien quiere gestionar su tiempo de forma nostálgica y funcional.',
    media: [
      { type: 'video', src: '/images/plannerboy-demo.mov', label: 'Demo', poster: '/images/plannerboy-home.png', fit: 'contain', loopUntil: 89 },
      { type: 'image', src: '/images/plannerboy-home.png', label: 'Pantalla', fit: 'contain' },
    ],
    tech: ['JavaScript', 'CLI', 'Game Boy Styling'],
  },
  {
    id: 'wolves',
    name: 'Wolves',
    category: 'Narrativa interactiva',
    tone: 'rgba(92, 209, 255, 0.15)',
    toneSoft: 'rgba(133, 115, 255, 0.12)',
    description: 'A Crazy Interview - Un juego interactivo de reclutamiento',
    longDescription: 'Un juego interactivo donde eres un lobo entrevistador en una dungeon. Combina lógica de reclutamiento con narrativa y mecánicas de juego. Diseño cyberpunk y atmósfera cautivadora.',
    media: [
      { type: 'image', src: '/images/wolves-cover.png', label: 'Cover' },
      { type: 'image', src: '/images/wolves-final.png', label: 'Final' },
      { type: 'image', src: '/images/wolves-poster.png', label: 'Poster' },
    ],
    tech: ['React', 'Game Logic', 'Cyberpunk Design'],
  },
  {
    id: 'blackjack',
    name: 'WebFlux Reactivo',
    category: 'Arquitectura reactiva',
    tone: 'rgba(186, 145, 255, 0.15)',
    toneSoft: 'rgba(92, 177, 255, 0.1)',
    description: 'Blackjack con arquitectura reactiva',
    longDescription: 'Implementación de un juego de Blackjack usando Spring WebFlux. Demuestra patrones reactivos, manejo de eventos en tiempo real y una arquitectura no bloqueante.',
    actions: [
      {
        href: 'https://github.com/JordiCasas87/S5.01-Spring-Framework-WebFlux',
        label: 'Ver en GitHub',
      },
    ],
    tech: ['Java', 'Spring WebFlux', 'Reactive Streams', 'APIs Reactivas'],
  },
];

export default function Projects() {
  const [selectedMedia, setSelectedMedia] = useState(
    Object.fromEntries(projects.map((project) => [project.id, 0])),
  );

  return (
    <section id="proyectos" className="projects app-section" data-section="proyectos">
      <div className="container">
        <div className="projects-intro scroll-reveal">
          <p className="section-eyebrow">Selección de proyectos</p>
          <div className="projects-intro-layout">
            <div className="projects-intro-copy">
              <h2>Proyectos con foco en producto, rendimiento y experiencia.</h2>
              <p className="section-lead">
                Cada proyecto combina arquitectura backend con una capa visual cuidada.
                La idea no es solo que funcione, sino que se sienta sólido desde el primer vistazo.
              </p>
            </div>
            <aside className="projects-quote-card">
              <span className="quote-mark quote-mark-open" aria-hidden="true">“</span>
              <p className="section-quote">
                No es suficiente con que construyamos productos que funcionen, que sean
                comprensibles y utilizables; también deben proporcionar alegría y emoción,
                placer y diversión
              </p>
              <div className="quote-footer">
                <p className="section-quote-author">Donald A. Norman</p>
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
                        autoPlay
                        loop={!activeMedia.loopUntil}
                        muted
                        playsInline
                        controls
                        onTimeUpdate={(event) => handleVideoLoopLimit(event, activeMedia.loopUntil)}
                      />
                    ) : (
                      <img src={activeMedia.src} alt={`${project.name} - ${activeMedia.label}`} />
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

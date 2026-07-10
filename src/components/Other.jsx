export default function Other({ reducedEffects = false, content }) {
  return (
    <section id="otras-cosas" className="other app-section" data-section="otras-cosas">
      {reducedEffects ? (
        <div className="other-static-bg" aria-hidden="true" />
      ) : (
        <video
          className="other-video-bg"
          src="/images/fondo%20hexagonal.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      <div className="other-video-overlay" aria-hidden="true" />
      <div className="container">
        <div className="other-intro scroll-reveal">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        
        <div className="other-grid">
          {content.cards.map((card, index) => (
            <div key={card.id ?? card.title} className="other-card scroll-reveal" style={{ '--reveal-order': index + 1 }}>
              <div className="other-header">
                <h3>{card.title}</h3>
              </div>
              {card.image && (
                <div className="other-media">
                  <img src={card.image.src} alt={card.image.alt} loading="lazy" decoding="async" />
                </div>
              )}
              {card.images && (
                <div className="other-media-grid">
                  {card.images.map((image) => (
                    <div key={image.src} className="other-media other-media-multi">
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              )}
              {card.paragraphs ? (
                <div className="other-copy">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p>{card.body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

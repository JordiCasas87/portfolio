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
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 1 }}>
            <div className="other-header">
              <h3>{content.cards[0].title}</h3>
            </div>
            <p>{content.cards[0].body}</p>
          </div>
          
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 2 }}>
            <div className="other-header">
              <h3>{content.cards[1].title}</h3>
            </div>
            <p>{content.cards[1].body}</p>
          </div>
          
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 3 }}>
            <div className="other-header">
              <h3>{content.cards[2].title}</h3>
            </div>
            <p>{content.cards[2].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

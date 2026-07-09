export default function Other({ reducedEffects = false }) {
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
          <p className="section-eyebrow">Intereses y perspectiva</p>
          <h2>Más allá del código</h2>
        </div>
        
        <div className="other-grid">
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 1 }}>
            <div className="other-header">
              <h3>Juegos de Unix</h3>
            </div>
            <p>
              Explorando clásicos de Unix y aprendiendo cómo se construían sistemas divertidos
              con recursos limitados. Una lección de creatividad y eficiencia.
            </p>
          </div>
          
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 2 }}>
            <div className="other-header">
              <h3>Aprendizaje Continuo</h3>
            </div>
            <p>
              Actualmente explorando nuevas tecnologías y patrones de arquitectura. 
              La evolución del ingeniero nunca termina.
            </p>
          </div>
          
          <div className="other-card scroll-reveal" style={{ '--reveal-order': 3 }}>
            <div className="other-header">
              <h3>Arquitectura y diseño de software</h3>
            </div>
            <p>
              Me interesa cómo se estructuran los sistemas para que sean mantenibles,
              escalables y fáciles de evolucionar. Por eso profundizo en arquitectura
              hexagonal, DDD y buenas prácticas de diseño.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

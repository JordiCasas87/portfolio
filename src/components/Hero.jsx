export default function Hero({ content }) {
  return (
    <section id="hero" className="hero app-section" data-section="hero">
      <div className="container hero-content">
        <div className="hero-copy">
          <h1 className="scroll-reveal">Jordi Casas González</h1>
          <p className="subtitle scroll-reveal" style={{ '--reveal-order': 1 }}>
            {content.subtitle}
          </p>
          <p className="description scroll-reveal" style={{ '--reveal-order': 2 }}>
            {content.description}
          </p>
          <div className="cta-buttons scroll-reveal" style={{ '--reveal-order': 3 }}>
            <a href="#proyectos" className="btn btn-primary">{content.ctaProjects}</a>
            <a href="#contacto" className="btn btn-secondary">{content.ctaContact}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

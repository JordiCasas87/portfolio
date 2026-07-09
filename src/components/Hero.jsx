export default function Hero() {
  return (
    <section id="hero" className="hero app-section" data-section="hero">
      <div className="container hero-content">
        <div className="hero-copy">
          <h1 className="scroll-reveal">Jordi Casas González</h1>
          <p className="subtitle scroll-reveal" style={{ '--reveal-order': 1 }}>
          Software Backend Developer | Java · Spring Boot · REST APIs | SQL · MongoDB
          </p>
          <p className="description scroll-reveal" style={{ '--reveal-order': 2 }}>
          Desarrollo aplicaciones backend robustas y APIs REST mantenibles, con foco en
          calidad de código, buenas prácticas y arquitectura pensada para crecer.
          </p>
          <div className="cta-buttons scroll-reveal" style={{ '--reveal-order': 3 }}>
            <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contacto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const name = 'Jordi Casas González'

export default function Hero({ content }) {
  return (
    <section id="hero" className="hero app-section" data-section="hero">
      <div className="container hero-content">
        <div className="hero-copy">
          <h1 className="hero-name" aria-label={name}>
            {name.split(' ').map((word, wordIndex) => {
              const letterOffset = name.split(' ').slice(0, wordIndex).join('').length + wordIndex

              return (
                <span className="hero-name-word" key={word} aria-hidden="true">
                  {Array.from(word).map((letter, letterIndex) => (
                    <span
                      key={`${letter}-${letterIndex}`}
                      className="hero-name-letter"
                      style={{ '--letter-index': letterOffset + letterIndex }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              )
            })}
          </h1>
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

const primarySkills = [
  { name: 'Java 21', color: 'rgba(255, 196, 92, 0.16)', border: 'rgba(255, 196, 92, 0.32)' },
  { name: 'Spring Boot', color: 'rgba(119, 221, 119, 0.14)', border: 'rgba(119, 221, 119, 0.3)' },
  { name: 'Spring WebFlux', color: 'rgba(97, 218, 251, 0.14)', border: 'rgba(97, 218, 251, 0.3)' },
  { name: 'REST APIs', color: 'rgba(255, 138, 101, 0.14)', border: 'rgba(255, 138, 101, 0.3)' },
  { name: 'SQL', color: 'rgba(138, 180, 255, 0.14)', border: 'rgba(138, 180, 255, 0.3)' },
  { name: 'PostgreSQL', color: 'rgba(116, 158, 255, 0.15)', border: 'rgba(116, 158, 255, 0.3)' },
  { name: 'MongoDB', color: 'rgba(95, 197, 123, 0.14)', border: 'rgba(95, 197, 123, 0.3)' },
  { name: 'JUnit + Mockito', color: 'rgba(255, 214, 102, 0.12)', border: 'rgba(255, 214, 102, 0.28)' },
  { name: 'Swagger/OpenAPI', color: 'rgba(186, 145, 255, 0.15)', border: 'rgba(186, 145, 255, 0.3)' },
  { name: 'Git / GitHub', color: 'rgba(255, 120, 117, 0.14)', border: 'rgba(255, 120, 117, 0.3)' },
  { name: 'Docker', color: 'rgba(82, 196, 255, 0.14)', border: 'rgba(82, 196, 255, 0.3)' },
  { name: 'Hexagonal Architecture', color: 'rgba(255, 255, 255, 0.09)', border: 'rgba(255, 255, 255, 0.18)' },
]

export default function About() {
  return (
    <section id="about" className="about app-section" data-section="about">
      <div className="container">
        <h2 className="scroll-reveal">Sobre mí</h2>
        
        <div className="about-content scroll-reveal" style={{ '--reveal-order': 2 }}>
          <div className="about-text">
            <p>
              Soy desarrollador backend especializado en Java y Spring Boot, orientado a construir
              aplicaciones robustas, mantenibles y bien estructuradas. Me interesa desarrollar software
              que sea claro por dentro, fiable en producción y fácil de evolucionar con el tiempo.
            </p>
            
            <p>
              Trabajo principalmente con Java, Spring Boot, Spring Framework, REST APIs, SQL y MongoDB,
              aplicando programación orientada a objetos, testing unitario y buenas prácticas de desarrollo.
              Ahora mismo también estoy profundizando en arquitectura hexagonal, Clean Architecture,
              principios SOLID y metodologías Agile como Scrum.
            </p>
            
            <p>
              Antes de enfocarme al desarrollo, trabajé en comercio internacional, coordinación de equipos
              y entornos de alta exigencia. Esa experiencia me dio algo que sigo llevando al software:
              responsabilidad, organización, pensamiento analítico, comunicación clara y capacidad para
              trabajar bien bajo presión y en colaboración con otros perfiles.
            </p>

            <div className="skills">
              <h3 className="scroll-reveal" style={{ '--reveal-order': 2 }}>Tecnologías principales</h3>
              <div className="skills-grid">
                {primarySkills.map((skill, index) => (
                  <span
                    key={skill.name}
                    className="skill-tag scroll-reveal"
                    style={{
                      '--reveal-order': index + 3,
                      '--skill-bg': skill.color,
                      '--skill-border': skill.border,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <a
                className="about-cv-link scroll-reveal"
                style={{ '--reveal-order': 15 }}
                href="/cv/JordiCasas_CV20262.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Developer PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

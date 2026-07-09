const skillIconMap = {
  'Java 21': { slug: 'openjdk', color: 'EA2D2E' },
  'Spring Boot': { slug: 'springboot', color: '6DB33F' },
  'Spring Framework': { slug: 'spring', color: '6DB33F' },
  'REST APIs': { slug: 'fastapi', color: '009688' },
  'Swagger/OpenAPI': { slug: 'swagger', color: '85EA2D' },
  'Postman': { slug: 'postman', color: 'FF6C37' },
  'JUnit': { slug: 'junit5', color: '25A162' },
  'Mockito': { slug: 'mockserviceworker', color: 'FF6A33' },
  'SQL': { slug: 'postgresql', color: '4169E1' },
  'MySQL': { slug: 'mysql', color: '4479A1' },
  'PostgreSQL': { slug: 'postgresql', color: '4169E1' },
  'MongoDB': { slug: 'mongodb', color: '47A248' },
  'JPA': { slug: 'hibernate', color: '59666C' },
  'Hibernate': { slug: 'hibernate', color: '59666C' },
  'Git': { slug: 'git', color: 'F05032' },
  'GitHub': { slug: 'github', color: 'FFFFFF' },
  'Maven': { slug: 'apachemaven', color: 'C71A36' },
  'Gradle': { slug: 'gradle', color: '02303A' },
  'Docker': { slug: 'docker', color: '2496ED' },
  'Python': { slug: 'python', color: '3776AB' },
  'C#': { slug: 'csharp', color: '512BD4' },
  'Unity': { slug: 'unity', color: 'FFFFFF' },
  'CI/CD': { slug: 'githubactions', color: '2088FF' },
}

const primarySkills = [
  { name: 'Java 21', color: 'rgba(255, 196, 92, 0.16)', border: 'rgba(255, 196, 92, 0.32)' },
  { name: 'Spring Boot', color: 'rgba(119, 221, 119, 0.14)', border: 'rgba(119, 221, 119, 0.3)' },
  { name: 'Spring Framework', color: 'rgba(119, 221, 119, 0.14)', border: 'rgba(119, 221, 119, 0.3)' },
  { name: 'REST APIs', color: 'rgba(255, 138, 101, 0.14)', border: 'rgba(255, 138, 101, 0.3)' },
  { name: 'Swagger/OpenAPI', color: 'rgba(186, 145, 255, 0.15)', border: 'rgba(186, 145, 255, 0.3)' },
  { name: 'Postman', color: 'rgba(255, 126, 77, 0.14)', border: 'rgba(255, 126, 77, 0.3)' },
  { name: 'JUnit', color: 'rgba(95, 197, 123, 0.14)', border: 'rgba(95, 197, 123, 0.3)' },
  { name: 'Mockito', color: 'rgba(255, 214, 102, 0.12)', border: 'rgba(255, 214, 102, 0.28)' },
  { name: 'SQL', color: 'rgba(138, 180, 255, 0.14)', border: 'rgba(138, 180, 255, 0.3)' },
  { name: 'MySQL', color: 'rgba(116, 158, 255, 0.15)', border: 'rgba(116, 158, 255, 0.3)' },
  { name: 'PostgreSQL', color: 'rgba(116, 158, 255, 0.15)', border: 'rgba(116, 158, 255, 0.3)' },
  { name: 'MongoDB', color: 'rgba(95, 197, 123, 0.14)', border: 'rgba(95, 197, 123, 0.3)' },
  { name: 'JPA', color: 'rgba(255, 255, 255, 0.08)', border: 'rgba(255, 255, 255, 0.18)' },
  { name: 'Hibernate', color: 'rgba(255, 255, 255, 0.08)', border: 'rgba(255, 255, 255, 0.18)' },
  { name: 'Git', color: 'rgba(255, 120, 117, 0.14)', border: 'rgba(255, 120, 117, 0.3)' },
  { name: 'GitHub', color: 'rgba(255, 120, 117, 0.14)', border: 'rgba(255, 120, 117, 0.3)' },
  { name: 'Maven', color: 'rgba(199, 26, 54, 0.14)', border: 'rgba(199, 26, 54, 0.3)' },
  { name: 'Gradle', color: 'rgba(58, 94, 111, 0.16)', border: 'rgba(58, 94, 111, 0.3)' },
  { name: 'Docker', color: 'rgba(82, 196, 255, 0.14)', border: 'rgba(82, 196, 255, 0.3)' },
]

const secondarySkills = [
  { name: 'Hexagonal Architecture', color: 'rgba(255, 255, 255, 0.09)', border: 'rgba(255, 255, 255, 0.18)' },
  { name: 'SOLID', color: 'rgba(255, 255, 255, 0.09)', border: 'rgba(255, 255, 255, 0.18)' },
  { name: 'Clean Code', color: 'rgba(255, 255, 255, 0.09)', border: 'rgba(255, 255, 255, 0.18)' },
  { name: 'TDD', color: 'rgba(255, 214, 102, 0.12)', border: 'rgba(255, 214, 102, 0.28)' },
  { name: 'Scrum', color: 'rgba(255, 161, 94, 0.13)', border: 'rgba(255, 161, 94, 0.3)' },
  { name: 'Agile', color: 'rgba(255, 161, 94, 0.13)', border: 'rgba(255, 161, 94, 0.3)' },
  { name: 'Microservices', color: 'rgba(103, 150, 255, 0.12)', border: 'rgba(103, 150, 255, 0.28)' },
  { name: 'CI/CD', color: 'rgba(103, 150, 255, 0.12)', border: 'rgba(103, 150, 255, 0.28)' },
  { name: 'Backend Architecture', color: 'rgba(103, 150, 255, 0.12)', border: 'rgba(103, 150, 255, 0.28)' },
  { name: 'Distributed Systems', color: 'rgba(103, 150, 255, 0.12)', border: 'rgba(103, 150, 255, 0.28)' },
  { name: 'Python', color: 'rgba(95, 197, 123, 0.14)', border: 'rgba(95, 197, 123, 0.3)' },
  { name: 'C', color: 'rgba(138, 180, 255, 0.14)', border: 'rgba(138, 180, 255, 0.3)' },
  { name: 'C#', color: 'rgba(186, 145, 255, 0.15)', border: 'rgba(186, 145, 255, 0.3)' },
  { name: 'Unity', color: 'rgba(255, 255, 255, 0.09)', border: 'rgba(255, 255, 255, 0.18)' },
]

function getAboutSkillIcon(name) {
  const icon = skillIconMap[name]

  if (!icon) {
    return null
  }

  return `https://cdn.simpleicons.org/${icon.slug}/${icon.color}?viewbox=auto`
}

export default function About({ content }) {
  return (
    <section id="about" className="about app-section" data-section="about">
      <div className="container">
        <h2 className="scroll-reveal">{content.title}</h2>
        
        <div className="about-content scroll-reveal" style={{ '--reveal-order': 2 }}>
          <div className="about-text">
            <div className="about-row">
              <div className="about-copy">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a
                  className="about-cv-link btn btn-secondary scroll-reveal"
                  style={{ '--reveal-order': 4 }}
                  href="/cv/JordiCasas_CV20262.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.cvLabel}
                </a>
              </div>

              <aside className="about-visual about-visual-primary" aria-label={content.portraitAlt}>
                <figure className="about-photo-card scroll-reveal" style={{ '--reveal-order': 1 }}>
                  <img src="/images/yo.png" alt={content.portraitAlt} loading="lazy" decoding="async" />
                </figure>
              </aside>
            </div>

            <div className="skills">
              <div className="about-row">
                <div className="skills-content">
                  <h3 className="scroll-reveal" style={{ '--reveal-order': 2 }}>{content.skillsTitle}</h3>
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
                        {getAboutSkillIcon(skill.name) ? (
                          <img
                            className="about-skill-icon"
                            src={getAboutSkillIcon(skill.name)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="about-skill-icon about-skill-icon-fallback" aria-hidden="true">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="about-visual about-visual-secondary" aria-label={content.presentationAlt}>
                  <figure className="about-photo-card about-photo-card-secondary scroll-reveal" style={{ '--reveal-order': 2 }}>
                    <img
                      src="/images/yopresent.jpeg"
                      alt={content.presentationAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </aside>
              </div>

              <div className="skills-secondary">
                <h3 className="scroll-reveal skills-subtitle" style={{ '--reveal-order': 10 }}>
                  {content.secondarySkillsTitle}
                </h3>
                <div className="skills-grid skills-grid-secondary">
                  {secondarySkills.map((skill, index) => (
                    <span
                      key={skill.name}
                      className="skill-tag scroll-reveal"
                      style={{
                        '--reveal-order': index + 11,
                        '--skill-bg': skill.color,
                        '--skill-border': skill.border,
                      }}
                    >
                      {getAboutSkillIcon(skill.name) ? (
                        <img
                          className="about-skill-icon"
                          src={getAboutSkillIcon(skill.name)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="about-skill-icon about-skill-icon-fallback" aria-hidden="true">
                          {skill.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

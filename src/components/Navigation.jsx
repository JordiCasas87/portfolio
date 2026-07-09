export default function Navigation({ activeSection, language, setLanguage, content }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <a onClick={() => scrollToSection('hero')}>Jordi Casas González</a>
        </div>
        
        <ul className="nav-links">
          <li><a className={activeSection === 'about' ? 'is-active' : ''} onClick={() => scrollToSection('about')}>{content.about}</a></li>
          <li><a className={activeSection === 'proyectos' ? 'is-active' : ''} onClick={() => scrollToSection('proyectos')}>{content.projects}</a></li>
          <li><a className={activeSection === 'otras-cosas' ? 'is-active' : ''} onClick={() => scrollToSection('otras-cosas')}>{content.other}</a></li>
          <li><a className={activeSection === 'contacto' ? 'is-active' : ''} onClick={() => scrollToSection('contacto')}>{content.contact}</a></li>
        </ul>

        <div className="language-switcher" role="group" aria-label={content.languageLabel}>
          <button
            type="button"
            className={`language-button${language === 'en' ? ' is-active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`language-button${language === 'es' ? ' is-active' : ''}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
}

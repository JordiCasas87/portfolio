export default function Navigation({ activeSection }) {
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
          <li><a className={activeSection === 'about' ? 'is-active' : ''} onClick={() => scrollToSection('about')}>Sobre mí</a></li>
          <li><a className={activeSection === 'proyectos' ? 'is-active' : ''} onClick={() => scrollToSection('proyectos')}>Proyectos</a></li>
          <li><a className={activeSection === 'otras-cosas' ? 'is-active' : ''} onClick={() => scrollToSection('otras-cosas')}>Más allá del código</a></li>
          <li><a className={activeSection === 'contacto' ? 'is-active' : ''} onClick={() => scrollToSection('contacto')}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="contact app-section" data-section="contacto">
      <div className="container">
        <h2 className="scroll-reveal">Contacto</h2>
        
        <div className="contact-content scroll-reveal" style={{ '--reveal-order': 1 }}>
          <p>
            Si tienes un proyecto interesante, una pregunta o solo quieres conversar
            sobre backend, sistemas o tecnología, estoy abierto.
          </p>
          
          <div className="contact-links">
            <a href="https://github.com/JordiCasas87" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jordi-casas-g/" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href="mailto:jordicasas87@gmail.com" className="contact-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

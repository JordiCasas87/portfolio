export default function Contact({ content }) {
  const contactItems = [
    {
      href: 'https://github.com/JordiCasas87',
      label: 'GitHub',
      className: 'contact-link-github',
      icon: (
        <svg viewBox="0 0 19 19" aria-hidden="true" className="contact-icon">
          <use href="/icons.svg#github-icon" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/jordi-casas-g/',
      label: 'LinkedIn',
      className: 'contact-link-linkedin',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon contact-icon-linkedin">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.31 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.09 20.45H3.53V9h3.56v11.45Z"
          />
        </svg>
      ),
    },
    {
      href: 'mailto:jordicasas87@gmail.com',
      label: 'Email',
      className: 'contact-link-email',
      icon: (
        <img
          className="contact-icon contact-icon-image"
          src="https://cdn.simpleicons.org/gmail/EA4335?viewbox=auto"
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      ),
    },
  ]

  return (
    <section id="contacto" className="contact app-section" data-section="contacto">
      <div className="container">
        <h2 className="scroll-reveal">{content.title}</h2>
        
        <div className="contact-content scroll-reveal" style={{ '--reveal-order': 1 }}>
          <p>{content.body}</p>
          
          <div className="contact-links">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`contact-link ${item.className}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

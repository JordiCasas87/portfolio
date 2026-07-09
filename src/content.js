export const translations = {
  en: {
    navigation: {
      about: 'About',
      projects: 'Projects',
      other: 'Beyond code',
      contact: 'Contact',
      languageLabel: 'Language selector',
    },
    hero: {
      subtitle: 'Software Backend Developer | Java · Spring Boot · REST APIs | SQL · MongoDB',
      description:
        'I build robust backend applications and maintainable REST APIs with a strong focus on code quality, good practices, and architecture designed to grow.',
      ctaProjects: 'View projects',
      ctaContact: 'Contact',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'I am a backend developer specialized in Java and Spring Boot, focused on building robust, maintainable, and well-structured applications. I care about software that is clear on the inside, reliable in production, and easy to evolve over time.',
        'I mainly work with Java, Spring Boot, Spring Framework, REST APIs, SQL, and MongoDB, applying object-oriented programming, unit testing, and solid development practices. Right now I am also going deeper into hexagonal architecture, Clean Architecture, SOLID principles, and Agile ways of working such as Scrum.',
        'Before moving fully into software development, I worked in international trade, team coordination, and high-demand environments. That experience gave me qualities I still bring into software: responsibility, organization, analytical thinking, clear communication, and the ability to work well under pressure and alongside different profiles.',
      ],
      skillsTitle: 'Core technologies',
      secondarySkillsTitle: 'Architecture, practices, and additional stack',
      cvLabel: 'View Developer CV PDF',
      portraitAlt: 'Portrait of Jordi Casas Gonzalez',
      presentationAlt: 'Jordi Casas Gonzalez giving a presentation',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects with a strong focus on product, performance, and experience.',
      lead:
        'Each project combines backend architecture with a carefully considered visual layer. The goal is not only to make it work, but to make it feel solid from the very first glance.',
      quote:
        'It is not enough that we build products that function, that are understandable and usable; we also need to build products that bring joy and excitement, pleasure and fun',
      quoteAuthor: 'Donald A. Norman',
      projects: [
        {
          id: 'kakebot',
          name: 'KakeBot',
          category: 'Deployed backend + Telegram integration',
          description:
            'A personal finance app where the key feature is securely linking a web user to their real Telegram account.',
          longDescription:
            'KakeBot is inspired by the Japanese kakebo method and aims to make expense tracking simpler, friendlier, and more consistent. The most interesting part of the project is the linking flow between the web app and Telegram: the user signs up, generates a temporary code, sends it to the bot with /link <code>, and the backend connects the internal user account with the real Telegram externalId so the bot can later be used as a fast expense input channel.',
          media: [
            { type: 'image', src: '/images/pantallazo1.png', label: 'Presentation' },
            { type: 'image', src: '/images/kakebot-dashboard.png', label: 'Desktop usage' },
            { type: 'image', src: '/images/pantallazo2.png', label: 'Expense entry' },
            { type: 'image', src: '/images/pantallazo3.png', label: 'Telegram' },
            { type: 'image', src: '/images/kakebot-login.png', label: 'Access' },
            { type: 'video', src: '/images/kakebot-demo.mov', label: 'Bot demo', poster: '/images/kakebot-home.png', fit: 'contain' },
          ],
          highlights: [
            'Validated temporary linking flow between a web user and a Telegram account through a one-time code.',
            'User registration and login, user profile endpoints, expense creation, daily and monthly queries, totals by category, and historical totals by period.',
            'Real bot deployed on Render with /start, /help, and /link <code>, consuming the code and storing Telegram externalId in MySQL.',
            'Backend deployed with Spring Boot 3, Java 21, Spring Data JPA, Swagger/OpenAPI, and global exception handling.',
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Swagger / OpenAPI', 'Telegram Bot API', 'Render'],
        },
        {
          id: 'planner',
          name: 'Planner Boy',
          category: 'CLI + experimental UI',
          description: 'A CLI planner with a tiny Game Boy-inspired frontend.',
          longDescription:
            'A command-line planner with a vintage Game Boy-style interface. It is built for anyone who wants to manage time in a nostalgic but still practical way.',
          media: [
            { type: 'video', src: '/images/plannerboy-demo.mov', label: 'Demo', poster: '/images/plannerboy-home.png', fit: 'contain', loopUntil: 89 },
            { type: 'image', src: '/images/plannerboy-home.png', label: 'Home', fit: 'contain' },
            { type: 'image', src: '/images/game1.png', label: 'Create task', fit: 'contain' },
            { type: 'image', src: '/images/%20game2.png', label: 'Main menu', fit: 'contain' },
          ],
          tech: ['JavaScript', 'CLI', 'Game Boy Styling'],
        },
        {
          id: 'wolves',
          name: 'Wolves',
          category: 'Interactive narrative',
          description: 'A Crazy Interview, an interactive recruitment game.',
          longDescription:
            'An interactive game where you play as a wolf interviewer inside a dungeon. It combines recruitment logic with narrative and game mechanics, wrapped in a cyberpunk atmosphere.',
          media: [
            { type: 'image', src: '/images/wolves-cover.png', label: 'Cover' },
            { type: 'image', src: '/images/wolves-final.png', label: 'Final' },
            { type: 'image', src: '/images/estructura%20wolves.png', label: 'Structure', fit: 'contain' },
            { type: 'image', src: '/images/wolves-poster.png', label: 'Poster' },
          ],
          actions: [
            {
              href: 'https://wolves-game-front.onrender.com',
              label: 'Open project',
            },
          ],
          tech: ['React', 'Game Logic', 'Cyberpunk Design'],
        },
        {
          id: 'blackjack',
          name: 'Reactive WebFlux',
          category: 'Reactive architecture',
          description: 'Blackjack built with reactive architecture.',
          longDescription:
            'A Blackjack implementation built with Spring WebFlux. It showcases reactive patterns, real-time event handling, and a non-blocking architecture.',
          actions: [
            {
              href: 'https://github.com/JordiCasas87/S5.01-Spring-Framework-WebFlux',
              label: 'View on GitHub',
            },
          ],
          tech: ['Java', 'Spring WebFlux', 'Reactive Streams', 'Reactive APIs'],
        },
      ],
    },
    other: {
      eyebrow: 'Interests and perspective',
      title: 'Beyond code',
      cards: [
        {
          title: 'Unix games',
          body: 'Exploring Unix classics and learning how playful systems were built with limited resources. A lesson in creativity and efficiency.',
        },
        {
          title: 'Continuous learning',
          body: 'Currently exploring new technologies and architecture patterns. The evolution of an engineer never really stops.',
        },
        {
          title: 'Software architecture and design',
          body: 'I am interested in how systems are structured so they stay maintainable, scalable, and easy to evolve. That is why I keep going deeper into hexagonal architecture, DDD, and sound design practices.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      body:
        'If you have an interesting project, a question, or simply want to talk about backend, systems, or technology, I am open to it.',
    },
  },
  es: {
    navigation: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      other: 'Más allá del código',
      contact: 'Contacto',
      languageLabel: 'Selector de idioma',
    },
    hero: {
      subtitle: 'Software Backend Developer | Java · Spring Boot · REST APIs | SQL · MongoDB',
      description:
        'Desarrollo aplicaciones backend robustas y APIs REST mantenibles, con foco en calidad de código, buenas prácticas y arquitectura pensada para crecer.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contacto',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy desarrollador backend especializado en Java y Spring Boot, orientado a construir aplicaciones robustas, mantenibles y bien estructuradas. Me interesa desarrollar software que sea claro por dentro, fiable en producción y fácil de evolucionar con el tiempo.',
        'Trabajo principalmente con Java, Spring Boot, Spring Framework, REST APIs, SQL y MongoDB, aplicando programación orientada a objetos, testing unitario y buenas prácticas de desarrollo. Ahora mismo también estoy profundizando en arquitectura hexagonal, Clean Architecture, principios SOLID y metodologías Agile como Scrum.',
        'Antes de enfocarme al desarrollo, trabajé en comercio internacional, coordinación de equipos y entornos de alta exigencia. Esa experiencia me dio algo que sigo llevando al software: responsabilidad, organización, pensamiento analítico, comunicación clara y capacidad para trabajar bien bajo presión y en colaboración con otros perfiles.',
      ],
      skillsTitle: 'Tecnologías principales',
      secondarySkillsTitle: 'Arquitectura, prácticas y stack adicional',
      cvLabel: 'Ver Curriculum Developer PDF',
      portraitAlt: 'Retrato de Jordi Casas Gonzalez',
      presentationAlt: 'Jordi Casas Gonzalez en una presentacion',
    },
    projects: {
      eyebrow: 'Selección de proyectos',
      title: 'Proyectos con foco en producto, rendimiento y experiencia.',
      lead:
        'Cada proyecto combina arquitectura backend con una capa visual cuidada. La idea no es solo que funcione, sino que se sienta sólido desde el primer vistazo.',
      quote:
        'No es suficiente con que construyamos productos que funcionen, que sean comprensibles y utilizables; también deben proporcionar alegría y emoción, placer y diversión',
      quoteAuthor: 'Donald A. Norman',
      projects: [
        {
          id: 'kakebot',
          name: 'KakeBot',
          category: 'Backend desplegado + integracion con Telegram',
          description:
            'App de finanzas personales donde la parte clave es vincular de forma segura un usuario web con su cuenta real de Telegram.',
          longDescription:
            'KakeBot esta inspirado en el metodo japones kakebo y busca hacer el registro de gastos mas simple, constante y amigable. La parte mas interesante del proyecto es el flujo de vinculacion entre la aplicacion web y Telegram: el usuario se registra, genera un codigo temporal, lo envia al bot con /link <code> y el backend relaciona su cuenta interna con el externalId real de Telegram para usar despues el bot como canal rapido de entrada de gastos.',
          media: [
            { type: 'image', src: '/images/pantallazo1.png', label: 'Presentacion' },
            { type: 'image', src: '/images/kakebot-dashboard.png', label: 'Uso en ordenador' },
            { type: 'image', src: '/images/pantallazo2.png', label: 'Registro' },
            { type: 'image', src: '/images/pantallazo3.png', label: 'Telegram' },
            { type: 'image', src: '/images/kakebot-login.png', label: 'Acceso' },
            { type: 'video', src: '/images/kakebot-demo.mov', label: 'Demo Bot', poster: '/images/kakebot-home.png', fit: 'contain' },
          ],
          highlights: [
            'Flujo validado de vinculacion temporal entre usuario web y cuenta de Telegram mediante codigo de un solo uso.',
            'Registro y login de usuarios, perfil de usuario, creacion de gastos, consultas diarias y mensuales, totales por categoria e historico por periodos.',
            'Bot real desplegado en Render con comandos /start, /help y /link <code>, consumiendo el codigo y guardando el externalId de Telegram en MySQL.',
            'Backend desplegado con Spring Boot 3, Java 21, Spring Data JPA, Swagger/OpenAPI y manejo global de excepciones.',
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Swagger / OpenAPI', 'Telegram Bot API', 'Render'],
        },
        {
          id: 'planner',
          name: 'Planner Boy',
          category: 'CLI + UI experimental',
          description: 'Agenda CLI con mini frontend estilo Game Boy',
          longDescription:
            'Una agenda de línea de comandos con una interfaz estilo Game Boy vintage. Perfecta para quien quiere gestionar su tiempo de forma nostálgica y funcional.',
          media: [
            { type: 'video', src: '/images/plannerboy-demo.mov', label: 'Demo', poster: '/images/plannerboy-home.png', fit: 'contain', loopUntil: 89 },
            { type: 'image', src: '/images/plannerboy-home.png', label: 'Inicio', fit: 'contain' },
            { type: 'image', src: '/images/game1.png', label: 'Crear tarea', fit: 'contain' },
            { type: 'image', src: '/images/%20game2.png', label: 'Main menu', fit: 'contain' },
          ],
          tech: ['JavaScript', 'CLI', 'Game Boy Styling'],
        },
        {
          id: 'wolves',
          name: 'Wolves',
          category: 'Narrativa interactiva',
          description: 'A Crazy Interview - Un juego interactivo de reclutamiento',
          longDescription:
            'Un juego interactivo donde eres un lobo entrevistador en una dungeon. Combina lógica de reclutamiento con narrativa y mecánicas de juego. Diseño cyberpunk y atmósfera cautivadora.',
          media: [
            { type: 'image', src: '/images/wolves-cover.png', label: 'Cover' },
            { type: 'image', src: '/images/wolves-final.png', label: 'Final' },
            { type: 'image', src: '/images/estructura%20wolves.png', label: 'Estructura', fit: 'contain' },
            { type: 'image', src: '/images/wolves-poster.png', label: 'Poster' },
          ],
          actions: [
            {
              href: 'https://wolves-game-front.onrender.com',
              label: 'Abrir proyecto',
            },
          ],
          tech: ['React', 'Game Logic', 'Cyberpunk Design'],
        },
        {
          id: 'blackjack',
          name: 'WebFlux Reactivo',
          category: 'Arquitectura reactiva',
          description: 'Blackjack con arquitectura reactiva',
          longDescription:
            'Implementación de un juego de Blackjack usando Spring WebFlux. Demuestra patrones reactivos, manejo de eventos en tiempo real y una arquitectura no bloqueante.',
          actions: [
            {
              href: 'https://github.com/JordiCasas87/S5.01-Spring-Framework-WebFlux',
              label: 'Ver en GitHub',
            },
          ],
          tech: ['Java', 'Spring WebFlux', 'Reactive Streams', 'APIs Reactivas'],
        },
      ],
    },
    other: {
      eyebrow: 'Intereses y perspectiva',
      title: 'Más allá del código',
      cards: [
        {
          title: 'Juegos de Unix',
          body: 'Explorando clásicos de Unix y aprendiendo cómo se construían sistemas divertidos con recursos limitados. Una lección de creatividad y eficiencia.',
        },
        {
          title: 'Aprendizaje continuo',
          body: 'Actualmente explorando nuevas tecnologías y patrones de arquitectura. La evolución del ingeniero nunca termina.',
        },
        {
          title: 'Arquitectura y diseño de software',
          body: 'Me interesa cómo se estructuran los sistemas para que sean mantenibles, escalables y fáciles de evolucionar. Por eso profundizo en arquitectura hexagonal, DDD y buenas prácticas de diseño.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      body:
        'Si tienes un proyecto interesante, una pregunta o solo quieres conversar sobre backend, sistemas o tecnología, estoy abierto.',
    },
  },
}

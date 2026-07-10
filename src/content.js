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
      githubLabel: 'View GitHub',
      portraitAlt: 'Portrait of Jordi Casas González',
      presentationAlt: 'Jordi Casas González giving a presentation',
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
          ownership:
            'Original personal project. Concept, product design, backend architecture, Telegram integration, and deployment developed entirely by me.',
          description:
            'A personal finance app where the key feature is securely linking a web user to their real Telegram account.',
          backendHighlights: ['Telegram linking', 'JPA + MySQL', 'Deployed backend'],
          longDescription:
            'KakeBot is inspired by the Japanese kakebo method and aims to make expense tracking simpler, friendlier, and more consistent. The most interesting part of the project is the linking flow between the web app and Telegram: the user signs up, generates a temporary code, sends it to the bot with /link <code>, and the backend connects the internal user account with the real Telegram externalId so the bot can later be used as a fast expense input channel.',
          media: [
            { type: 'image', src: '/images/pantallazo1.png', label: 'Presentation' },
            { type: 'image', src: '/images/kakebot-dashboard.png', label: 'Desktop usage' },
            { type: 'image', src: '/images/pantallazo2.png', label: 'Expense entry' },
            { type: 'image', src: '/images/pantallazo3.png', label: 'Telegram' },
            { type: 'image', src: '/images/kakebot-login.png', label: 'Access' },
            { type: 'video', src: '/images/kakebot-animacion-sutil.mov', label: 'Subtle animation', poster: '/images/kakebot-home.png', fit: 'contain' },
            { type: 'video', src: '/images/pruebas%20dise%C3%B1o%20bot.mp4', label: 'Bot design tests', poster: '/images/kakebot-home.png', fit: 'contain' },
          ],
          mediaBackground: '#ffffff',
          highlights: [
            'Validated temporary linking flow between a web user and a Telegram account through a one-time code.',
            'User registration and login, user profile endpoints, expense creation, daily and monthly queries, totals by category, and historical totals by period.',
            'Real bot deployed on Render with /start, /help, and /link <code>, consuming the code and storing Telegram externalId in MySQL.',
            'Backend deployed with Spring Boot 3, Java 21, Spring Data JPA, Swagger/OpenAPI, and global exception handling.',
          ],
          actions: [
            {
              href: 'https://kakebot.onrender.com',
              label: 'Open project',
              emphasis: 'primary',
            },
            {
              href: 'https://github.com/JordiCasas87/Kakebot',
              label: 'View on GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Swagger / OpenAPI', 'Telegram Bot API', 'Render'],
        },
        {
          id: 'wolves',
          name: 'Wolves',
          category: 'Full stack game + satirical interview simulator',
          ownership:
            'Original personal project. Narrative concept, game design, backend architecture, frontend implementation, authentication flow, and deployment developed entirely by me.',
          description:
            'A full stack technical interview game that combines Spring Boot, React, authentication, rankings, and game flow inside a satirical narrative.',
          backendHighlights: ['JWT + roles', 'Ranking logic', 'Domain-based architecture'],
          longDescription:
            'Wolves is a quiz-based game where players face absurd technical interviews conducted by recruiter wolves. Behind the visual identity and humor, the project brings together backend and frontend concerns in a more complex system: player registration and login, protected roles, JWT authentication, ranking logic, interview sessions, failed-question review mode, statistics tracking, and a React + Vite frontend that adapts to the authenticated role and drives the full game experience.',
          media: [
            { type: 'image', src: '/images/foto%20wolves/login.png', label: 'Login' },
            { type: 'image', src: '/images/wolves-cover.png', label: 'Cover' },
            { type: 'image', src: '/images/foto%20wolves/portada.png', label: 'Home' },
            { type: 'image', src: '/images/foto%20wolves/personaje.png', label: 'Avatar' },
            { type: 'image', src: '/images/foto%20wolves/partida.png', label: 'Match' },
            { type: 'image', src: '/images/foto%20wolves/admin.png', label: 'Admin' },
            { type: 'image', src: '/images/foto%20wolves/admin1.png', label: 'Admin panel' },
            { type: 'image', src: '/images/wolves-final.png', label: 'Final' },
            { type: 'image', src: '/images/estructura%20wolves.png', label: 'Structure', fit: 'contain' },
            { type: 'image', src: '/images/wolves-poster.png', label: 'Poster' },
          ],
          highlights: [
            'Player and admin roles with Spring Security + JWT, including protected endpoints and frontend behavior that adapts to authentication and role.',
            'Interview sessions with random technical questions, scoring, pass/fail results, fictional salaries, failed-question history, and dedicated review mode.',
            'Global ranking based on accumulated fictional salary, plus player statistics such as games played, games passed, and total earnings.',
            'Domain-based backend architecture inspired by DDD, with controllers, services, repositories, DTOs, mappers, models, and a separate React + Vite frontend for flow, transitions, and API communication.',
          ],
          actions: [
            {
              href: 'https://wolves-game-front.onrender.com',
              label: 'Open project',
              emphasis: 'primary',
            },
            {
              href: 'https://github.com/JordiCasas87/WOLVES-GAME-',
              label: 'View on GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'MongoDB', 'Swagger / OpenAPI', 'React', 'Vite', 'JavaScript', 'CSS'],
        },
        {
          id: 'blackjack',
          name: 'Blackjack API',
          category: 'Reactive API + dual persistence',
          ownership:
            'Original personal project. API design, reactive backend, persistence model, Docker orchestration, and technical documentation developed entirely by me.',
          description:
            'A reactive Blackjack API built with Spring WebFlux, using split persistence to store gameplay in MongoDB and ranking data in MySQL.',
          backendHighlights: ['Reactive flow', 'Dual persistence', 'Docker orchestration'],
          longDescription:
            'This project is more than a simple game API: it was built to explore a reactive backend model with Spring WebFlux and to separate persistence responsibilities by use case. Game sessions and player state live in MongoDB, while ranking data is stored independently in MySQL through R2DBC, making the application a good exercise in choosing the right persistence layer for each domain concern. The full environment is orchestrated with Docker Compose so the API, MongoDB, and MySQL boot together reproducibly without requiring a local Java, Maven, or database setup.',
          media: [
            { type: 'image', src: '/images/swagger%20black.png', label: 'Swagger 1', fit: 'contain' },
            { type: 'image', src: '/images/swagger%20black2.png', label: 'Swagger 2', fit: 'contain' },
          ],
          mediaBackground: '#ffffff',
          highlights: [
            'Reactive backend implemented with Spring WebFlux, Spring Data Reactive MongoDB, and Spring Data R2DBC instead of a classic blocking MVC stack.',
            'Split persistence model designed by responsibility: MongoDB for players and matches, MySQL for ranking and leaderboard-oriented data.',
            'Docker Compose orchestration that boots the API together with both databases, making the whole environment portable and reproducible.',
            'Swagger / OpenAPI included for direct endpoint testing and faster verification of the reactive flows.',
          ],
          actions: [
            {
              href: 'https://github.com/JordiCasas87/S5.01-Spring-Framework-WebFlux',
              label: 'View on GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring WebFlux', 'Spring Data Reactive MongoDB', 'Spring Data R2DBC', 'MongoDB', 'MySQL', 'Docker Compose', 'Swagger / OpenAPI'],
        },
        {
          id: 'planner',
          name: 'Planner Boy',
          category: 'Java CLI + SQL persistence',
          ownership:
            'Game Boy-inspired interface and visual direction developed entirely by me. The backend was built as a team project by three people, and I focused especially on the frontend presentation, product concept, and overall user-facing experience.',
          description:
            'A Java 21 command-line agenda that combines task, event, and note management with SQL persistence, layered architecture, and a Game Boy-inspired interface.',
          backendHighlights: ['Layered architecture', 'SQL persistence', 'Dockerized database'],
          longDescription:
            'Planner Boy started as a final team project and was designed as much around backend structure as around the visual identity. It is a Java 21 CLI agenda for managing tasks, events, and notes, with SQL persistence, feature-based organization, layered architecture, Dockerized database execution, and JUnit 5 testing. The Game Boy-inspired UI gives the project personality, but the real value is in how the application separates responsibilities and supports maintainable growth.',
          media: [
            { type: 'video', src: '/images/plannerboy-demo.mov', label: 'Demo', poster: '/images/plannerboy-home.png', fit: 'contain', loopUntil: 89 },
            { type: 'image', src: '/images/plannerboy-home.png', label: 'Home', fit: 'contain' },
            { type: 'image', src: '/images/game1.png', label: 'Create task', fit: 'contain' },
            { type: 'image', src: '/images/%20game2.png', label: 'Main menu', fit: 'contain' },
          ],
          mediaBackground: '#8fa06b',
          highlights: [
            'CRUD flows for tasks, events, and notes, including completed/pending task views, upcoming events, and persistent data storage in SQL.',
            'Layered architecture plus feature-based organization, with DTOs, mappers, DAO pattern, repository factories, and custom exception handling.',
            'Dockerized PostgreSQL database with automatic initialization scripts for schema creation and sample data loading.',
            'Built with Java 21, Maven, and JUnit 5, keeping the CLI menus separate from business logic and persistence concerns.',
          ],
          actions: [
            {
              href: 'https://github.com/JordiCasas87/DEVELOPERS-TEAM-Cli-agenda-java',
              label: 'View on GitHub',
            },
          ],
          tech: ['Java 21', 'Maven', 'SQL', 'PostgreSQL', 'Docker', 'JUnit 5', 'CLI'],
        },
      ],
    },
    other: {
      eyebrow: 'Interests and perspective',
      title: 'Beyond code',
      cards: [
        {
          id: 'ongoing-training',
          title: 'Ongoing training',
          body: 'I continue building my skills through learning environments such as Campus 42 Barcelona, while also taking courses in video game creation with Unity to keep exploring logic, systems, and interactive design from another angle.',
          image: {
            src: '/images/BARCELONA42.png',
            alt: 'Campus 42 Barcelona',
          },
        },
        {
          id: 'architecture-design',
          title: 'Software architecture and design',
          paragraphs: [
            'I am interested in how systems are structured so they stay maintainable, scalable, and easy to evolve. That is why I keep going deeper into hexagonal architecture, DDD, and sound design practices.',
            'Before focusing fully on software, I studied industrial design and worked in commercial environments, managing teams and traveling to different countries to negotiate sales and business relationships. That background strengthened my communication, responsibility, adaptability, and decision-making under pressure.',
          ],
        },
        {
          id: 'completed-training',
          title: 'Completed training',
          body: 'My learning path also includes completed programs and academic stages that helped shape both my technical foundation and the way I approach problem solving, teamwork, and professional growth.',
          images: [
            {
              src: '/images/BACRELONAACTIVA.png',
              alt: 'Barcelona Activa',
            },
            {
              src: '/images/ITACADEMY.png',
              alt: 'IT Academy',
            },
            {
              src: '/images/upc-barcelonatech.png',
              alt: 'UPC',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      body:
        'Open to Back-End Developer opportunities, especially within Java and Spring ecosystems, as well as conversations around backend, architecture, and technology.',
    },
    footer: {
      text: 'This portfolio was created by Jordi Casas using React and Vite.',
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
      cvLabel: 'Ver currículum developer PDF',
      githubLabel: 'Ver GitHub',
      portraitAlt: 'Retrato de Jordi Casas González',
      presentationAlt: 'Jordi Casas González en una presentación',
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
          category: 'Backend desplegado + integración con Telegram',
          ownership:
            'Proyecto personal de idea original. Concepto, diseño de producto, arquitectura backend, integración con Telegram y despliegue desarrollados íntegramente por mí.',
          description:
            'App de finanzas personales donde la parte clave es vincular de forma segura un usuario web con su cuenta real de Telegram.',
          backendHighlights: ['Vinculación Telegram', 'JPA + MySQL', 'Backend desplegado'],
          longDescription:
            'KakeBot está inspirado en el método japonés kakebo y busca hacer el registro de gastos más simple, constante y amigable. La parte más interesante del proyecto es el flujo de vinculación entre la aplicación web y Telegram: el usuario se registra, genera un código temporal, lo envía al bot con /link <code> y el backend relaciona su cuenta interna con el externalId real de Telegram para usar después el bot como canal rápido de entrada de gastos.',
          media: [
            { type: 'image', src: '/images/pantallazo1.png', label: 'Presentación' },
            { type: 'image', src: '/images/kakebot-dashboard.png', label: 'Uso en ordenador' },
            { type: 'image', src: '/images/pantallazo2.png', label: 'Registro' },
            { type: 'image', src: '/images/pantallazo3.png', label: 'Telegram' },
            { type: 'image', src: '/images/kakebot-login.png', label: 'Acceso' },
            { type: 'video', src: '/images/kakebot-animacion-sutil.mov', label: 'Animación sutil', poster: '/images/kakebot-home.png', fit: 'contain' },
            { type: 'video', src: '/images/pruebas%20dise%C3%B1o%20bot.mp4', label: 'Pruebas diseño bot', poster: '/images/kakebot-home.png', fit: 'contain' },
          ],
          mediaBackground: '#ffffff',
          highlights: [
            'Flujo validado de vinculación temporal entre usuario web y cuenta de Telegram mediante código de un solo uso.',
            'Registro y login de usuarios, perfil de usuario, creación de gastos, consultas diarias y mensuales, totales por categoría e histórico por periodos.',
            'Bot real desplegado en Render con comandos /start, /help y /link <code>, consumiendo el código y guardando el externalId de Telegram en MySQL.',
            'Backend desplegado con Spring Boot 3, Java 21, Spring Data JPA, Swagger/OpenAPI y manejo global de excepciones.',
          ],
          actions: [
            {
              href: 'https://kakebot.onrender.com',
              label: 'Abrir proyecto',
              emphasis: 'primary',
            },
            {
              href: 'https://github.com/JordiCasas87/Kakebot',
              label: 'Ver en GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Swagger / OpenAPI', 'Telegram Bot API', 'Render'],
        },
        {
          id: 'wolves',
          name: 'Wolves',
          category: 'Juego full stack + simulador satírico de entrevistas',
          ownership:
            'Proyecto personal de idea original. Concepto narrativo, diseño del juego, arquitectura backend, implementación frontend, flujo de autenticación y despliegue desarrollados íntegramente por mí.',
          description:
            'Juego técnico full stack que combina Spring Boot, React, autenticación, rankings y flujo de partida dentro de una narrativa satírica.',
          backendHighlights: ['JWT + roles', 'Lógica de ranking', 'Arquitectura por dominio'],
          longDescription:
            'Wolves es un juego de preguntas donde los jugadores se enfrentan a entrevistas técnicas absurdas dirigidas por lobos reclutadores. Detrás de la identidad visual y el tono humorístico, el proyecto reúne backend y frontend dentro de un sistema bastante más complejo: registro y login de jugadores, roles protegidos, autenticación JWT, lógica de ranking, sesiones de entrevista, modo de repaso de preguntas falladas, seguimiento de estadísticas y un frontend en React + Vite que adapta la experiencia según el rol autenticado y conduce todo el flujo del juego.',
          media: [
            { type: 'image', src: '/images/foto%20wolves/login.png', label: 'Acceso' },
            { type: 'image', src: '/images/wolves-cover.png', label: 'Portada' },
            { type: 'image', src: '/images/foto%20wolves/portada.png', label: 'Portada' },
            { type: 'image', src: '/images/foto%20wolves/personaje.png', label: 'Personaje' },
            { type: 'image', src: '/images/foto%20wolves/partida.png', label: 'Partida' },
            { type: 'image', src: '/images/foto%20wolves/admin.png', label: 'Administrador' },
            { type: 'image', src: '/images/foto%20wolves/admin1.png', label: 'Panel de administración' },
            { type: 'image', src: '/images/wolves-final.png', label: 'Final' },
            { type: 'image', src: '/images/estructura%20wolves.png', label: 'Estructura', fit: 'contain' },
            { type: 'image', src: '/images/wolves-poster.png', label: 'Póster' },
          ],
          highlights: [
            'Roles de jugador y admin con Spring Security + JWT, incluyendo endpoints protegidos y un frontend que se adapta a la autenticación y al rol.',
            'Sesiones de entrevista con preguntas técnicas aleatorias, puntuación, resultado final, salarios ficticios, historial de errores y modo de repaso.',
            'Ranking global basado en salario ficticio acumulado, además de estadísticas de jugador como partidas jugadas, entrevistas superadas y ganancias totales.',
            'Arquitectura backend organizada por dominio e inspirada en DDD, con controllers, services, repositories, DTOs, mappers y models, junto a un frontend separado en React + Vite para flujo, transiciones y comunicación con la API.',
          ],
          actions: [
            {
              href: 'https://wolves-game-front.onrender.com',
              label: 'Abrir proyecto',
              emphasis: 'primary',
            },
            {
              href: 'https://github.com/JordiCasas87/WOLVES-GAME-',
              label: 'Ver en GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'MongoDB', 'Swagger / OpenAPI', 'React', 'Vite', 'JavaScript', 'CSS'],
        },
        {
          id: 'blackjack',
          name: 'Blackjack API',
          category: 'API reactiva + persistencia dual',
          ownership:
            'Proyecto personal de idea original. Diseño de la API, backend reactivo, modelo de persistencia, orquestación con Docker y documentación técnica desarrollados íntegramente por mí.',
          description:
            'API reactiva de Blackjack construida con Spring WebFlux, usando persistencia separada para guardar la partida en MongoDB y el ranking en MySQL.',
          backendHighlights: ['Flujo reactivo', 'Persistencia dual', 'Orquestación Docker'],
          longDescription:
            'Este proyecto va más allá de una API sencilla de juego: está planteado para explorar un modelo backend reactivo con Spring WebFlux y para separar las responsabilidades de persistencia según el caso de uso. Las partidas y el estado de jugador viven en MongoDB, mientras que el ranking se guarda de forma independiente en MySQL mediante R2DBC, lo que convierte el proyecto en un buen ejercicio de diseño al elegir la capa de persistencia más adecuada para cada parte del dominio. Todo el entorno se levanta con Docker Compose, haciendo que API, MongoDB y MySQL arranquen juntos de forma reproducible sin necesidad de instalar Java, Maven o bases de datos en local.',
          media: [
            { type: 'image', src: '/images/swagger%20black.png', label: 'Swagger 1', fit: 'contain' },
            { type: 'image', src: '/images/swagger%20black2.png', label: 'Swagger 2', fit: 'contain' },
          ],
          mediaBackground: '#ffffff',
          highlights: [
            'Backend reactivo implementado con Spring WebFlux, Spring Data Reactive MongoDB y Spring Data R2DBC en lugar de un enfoque clásico bloqueante.',
            'Modelo de persistencia dual diseñado por responsabilidad: MongoDB para jugadores y partidas, MySQL para el ranking y la información de leaderboard.',
            'Orquestación con Docker Compose que levanta la API junto a ambas bases de datos, haciendo el entorno portable y reproducible.',
            'Swagger / OpenAPI incluido para probar endpoints directamente y validar más rápido los flujos reactivos.',
          ],
          actions: [
            {
              href: 'https://github.com/JordiCasas87/S5.01-Spring-Framework-WebFlux',
              label: 'Ver en GitHub',
            },
          ],
          tech: ['Java 21', 'Spring Boot 3', 'Spring WebFlux', 'Spring Data Reactive MongoDB', 'Spring Data R2DBC', 'MongoDB', 'MySQL', 'Docker Compose', 'Swagger / OpenAPI'],
        },
        {
          id: 'planner',
          name: 'Planner Boy',
          category: 'CLI en Java + persistencia SQL',
          ownership:
            'La interfaz inspirada en Game Boy y la dirección visual están desarrolladas íntegramente por mí. El backend se realizó como proyecto en equipo entre tres personas, y mi foco estuvo especialmente en la parte frontend, el concepto de producto y la experiencia visual de cara al usuario.',
          description:
            'Agenda por consola en Java 21 que combina gestión de tareas, eventos y notas con persistencia SQL, arquitectura en capas y una interfaz inspirada en Game Boy.',
          backendHighlights: ['Arquitectura en capas', 'Persistencia SQL', 'Base de datos con Docker'],
          longDescription:
            'Planner Boy nació como trabajo final en equipo y se planteó tanto desde la estructura backend como desde la identidad visual. Es una agenda CLI en Java 21 para gestionar tareas, eventos y notas, con persistencia en SQL, organización por features, arquitectura en capas, ejecución de base de datos con Docker y testing con JUnit 5. La interfaz inspirada en Game Boy le da personalidad, pero el valor principal está en cómo se separan responsabilidades y se construye una base mantenible para seguir creciendo.',
          media: [
            { type: 'video', src: '/images/plannerboy-demo.mov', label: 'Demo', poster: '/images/plannerboy-home.png', fit: 'contain', loopUntil: 89 },
            { type: 'image', src: '/images/plannerboy-home.png', label: 'Inicio', fit: 'contain' },
            { type: 'image', src: '/images/game1.png', label: 'Crear tarea', fit: 'contain' },
            { type: 'image', src: '/images/%20game2.png', label: 'Menú principal', fit: 'contain' },
          ],
          mediaBackground: '#8fa06b',
          highlights: [
            'Flujos CRUD para tareas, eventos y notas, incluyendo vistas de tareas pendientes/completadas, próximos eventos y persistencia real en SQL.',
            'Arquitectura en capas y organización por features, con DTOs, mappers, patrón DAO, factorías de repositorios y manejo de excepciones personalizado.',
            'Base de datos PostgreSQL en Docker con scripts automáticos de inicialización para crear esquema y cargar datos de ejemplo.',
            'Desarrollado con Java 21, Maven y JUnit 5, manteniendo los menús CLI separados de la lógica de negocio y de la persistencia.',
          ],
          actions: [
            {
              href: 'https://github.com/JordiCasas87/DEVELOPERS-TEAM-Cli-agenda-java',
              label: 'Ver en GitHub',
            },
          ],
          tech: ['Java 21', 'Maven', 'SQL', 'PostgreSQL', 'Docker', 'JUnit 5', 'CLI'],
        },
      ],
    },
    other: {
      eyebrow: 'Intereses y perspectiva',
      title: 'Más allá del código',
      cards: [
        {
          id: 'ongoing-training',
          title: 'Formación continua',
          body: 'Sigo formándome en entornos como Campus 42 Barcelona y realizando cursos sobre creación de videojuegos con Unity, explorando también la lógica, los sistemas y el diseño interactivo desde otra perspectiva.',
          image: {
            src: '/images/BARCELONA42.png',
            alt: 'Campus 42 Barcelona',
          },
        },
        {
          id: 'architecture-design',
          title: 'Arquitectura y diseño de software',
          paragraphs: [
            'Me interesa cómo se estructuran los sistemas para que sean mantenibles, escalables y fáciles de evolucionar. Por eso profundizo en arquitectura hexagonal, DDD y buenas prácticas de diseño.',
            'Antes de enfocarme por completo al software, estudié diseño industrial y trabajé en entornos comerciales, gestionando equipos y viajando a distintos países para negociar ventas y relaciones de negocio. Esa etapa reforzó mi comunicación, responsabilidad, capacidad de adaptación y toma de decisiones bajo presión.',
          ],
        },
        {
          id: 'completed-training',
          title: 'Formaciones terminadas',
          body: 'Mi recorrido también incluye programas y etapas formativas ya completadas, que han ayudado a construir una base sólida tanto a nivel técnico como en la forma de afrontar problemas, trabajo en equipo y crecimiento profesional.',
          images: [
            {
              src: '/images/BACRELONAACTIVA.png',
              alt: 'Barcelona Activa',
            },
            {
              src: '/images/ITACADEMY.png',
              alt: 'IT Academy',
            },
            {
              src: '/images/upc-barcelonatech.png',
              alt: 'UPC',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contacto',
      body:
        'Abierto a oportunidades como Back-End Developer, especialmente en ecosistemas Java y Spring, así como a conversaciones sobre backend, arquitectura y tecnología.',
    },
    footer: {
      text: 'Este portfolio ha sido creado por Jordi Casas usando React y Vite.',
    },
  },
}

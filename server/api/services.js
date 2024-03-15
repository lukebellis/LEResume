import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'React',
      description: {
        en: 'I build modern and advanced websites and applications with React or Expo by React Native.',
        es: 'Construyo sitios web y aplicaciones modernas y avanzadas con React o Expo mediante React Native.',
        de: 'Ich erstelle moderne und fortschrittliche Websites und Anwendungen mit React oder Expo mit React Native.',
        pt: 'Construo sites e aplicativos modernos e avançados com React ou Expo através do React Native.',
      },
      icon: 'devicon:react',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: 'I use Vue, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
        es: 'Utilizo Vue, un marco de JavaScript y Typescript moderno, al crear sitios web y aplicaciones dinámicas y estáticas.',
        de: 'Ich verwende Vue, ein modernes JavaScript- und TypeScript-Framework, um dynamische und statische Websites und Anwendungen zu erstellen.',
        pt: 'Utilizo Vue, um framework moderno de JavaScript e TypeScript, ao criar sites e aplicativos dinâmicos e estáticos.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'Nuxt',
      description: {
        en: 'For building powerful web applications, I use Nuxt.',
        es: 'Para construir aplicaciones web potentes, utilizo Nuxt.',
        de: 'Für den Aufbau leistungsfähiger Webanwendungen verwende ich Nuxt.',
        pt: 'Para construir aplicativos web poderosos, uso Nuxt.',
      },
      icon: 'devicon-nuxtjs',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'In Cybersecurity, I use Python, SQL, Java/JavaScript, C++, etc. But Python is the language I use more often.',
        es: 'En Ciberseguridad, utilizo Python, SQL, Java/JavaScript, C++, etc. Pero Python es el lenguaje que utilizo con más frecuencia.',
        de: 'In der Cybersicherheit verwende ich Python, SQL, Java/JavaScript, C++, usw. Aber Python ist die Sprache, die ich am häufigsten verwende.',
        pt: 'Em Segurança Cibernética, utilizo Python, SQL, Java/JavaScript, C++, etc. Mas Python é a linguagem que eu uso com mais frequência.',
      },
      icon: 'devicon:python',
      image: null,
    },
    {
      id: 5,
      title: 'Node.js',
      description: {
        en: 'As a skilled Node.js developer, I effectively build and manage server-side applications, enabling smooth interactions and robust back-end support for sophisticated web systems.',
        es: 'Como desarrollador experto en Node.js, construyo y administro eficazmente aplicaciones del lado del servidor, permitiendo interacciones fluidas y soporte robusto en el backend para sistemas web sofisticados.',
        de: 'Als erfahrener Node.js-Entwickler erstelle und verwalte ich effektiv serverseitige Anwendungen, ermögliche reibungslose Interaktionen und robuste Unterstützung im Backend für anspruchsvolle Websysteme.',
        pt: 'Como desenvolvedor experiente em Node.js, construo e gerencio efetivamente aplicativos do lado do servidor, permitindo interações suaves e suporte robusto no back-end para sistemas web sofisticados.',
      },
      icon: 'devicon:nodejs',
      image: null,
    },
    {
      id: 6,
      title: 'PHP',
      description: {
        en: 'In PHP, my skills are modest but growing. I can handle basic scripting tasks and am familiar with its syntax, working steadily to increase proficiency.',
        es: 'En PHP, mis habilidades son modestas pero crecientes. Puedo manejar tareas básicas de script y estoy familiarizado con su sintaxis, trabajando constantemente para aumentar la competencia.',
        de: 'In PHP sind meine Fähigkeiten bescheiden, aber wachsend. Ich kann grundlegende Skriptaufgaben bewältigen und bin mit seiner Syntax vertraut, arbeite stetig daran, die Kompetenz zu steigern.',
        pt: 'Em PHP, minhas habilidades são modestas, mas crescentes. Posso lidar com tarefas básicas de script e estou familiarizado com sua sintaxe, trabalhando constantemente para aumentar a proficiência.',
      },
      icon: 'devicon:php',
      image: null,
    },
    {
      id: 7,
      title: 'Git',
      description: {
        en: 'As an expert in Git, I adeptly manage code versions, efficiently handle merges and conflicts, and navigate branches, contributing to smooth and successful project deployments.',
        es: 'Como experto en Git, gestiono hábilmente versiones de código, manejo eficientemente fusiones y conflictos, y navego por ramas, contribuyendo a despliegues de proyectos exitosos y sin problemas.',
        de: 'Als Experte in Git verwalte ich Codeversionen gekonnt, handle Fusionen und Konflikte effizient und navigiere durch Branches, was zu reibungslosen und erfolgreichen Projektbereitstellungen beiträgt.',
        pt: 'Como especialista em Git, gerencio habilmente versões de código, lido eficientemente com mesclagens e conflitos, e navego em branches, contribuindo para implantações de projetos suaves e bem-sucedidas.',
      },
      icon: 'devicon:git',
      image: null,
    },
    {
      id: 8,
      title: 'Amazon Web Services',
      description: {
        en: 'As a proficient AWS user, I effectively manage cloud resources, architect robust and scalable infrastructures, and ensure secure, cost-effective operations across applications and services.',
        es: 'Como usuario competente de AWS, gestiono eficazmente recursos en la nube, diseño infraestructuras robustas y escalables, y garantizo operaciones seguras y rentables en aplicaciones y servicios.',
        de: 'Als versierter AWS-Benutzer verwalte ich Cloud-Ressourcen effektiv, entwerfe robuste und skalierbare Infrastrukturen und gewährleiste sichere und kostengünstige Betriebsabläufe in Anwendungen und Diensten.',
        pt: 'Como usuário proficientes da AWS, gerencio efetivamente recursos na nuvem, projeto infraestruturas robustas e escaláveis e garanto operações seguras e econômicas em aplicativos e serviços.',
      },
      icon: 'devicon:amazonwebservices',
      image: null,
    },
    {
      id: 9,
      title: 'HTML 5',
      description: {
        en: 'As an accomplished HTML5 developer, I skillfully craft structurally sound and accessible webpages, ensuring seamless user experience and adherence to modern web standards.',
        es: 'Como desarrollador de HTML5 consumado, diseño hábilmente páginas web estructuralmente sólidas y accesibles, garantizando una experiencia de usuario sin problemas y el cumplimiento de los estándares web modernos.',
        de: 'Als erfahrener HTML5-Entwickler gestalte ich geschickt strukturell solide und zugängliche Webseiten, um eine nahtlose Benutzererfahrung und die Einhaltung moderner Webstandards sicherzustellen.',
        pt: 'Como desenvolvedor de HTML5 experiente, elaboro habilmente páginas da web estruturalmente sólidas e acessíveis, garantindo uma experiência de usuário perfeita e aderência aos padrões da web modernos.',
      },
      icon: 'devicon:html5',
      image: null,
    },
    {
      id: 10,
      title: 'CSS',
      description: {
        en: 'An adept CSS3 developer, I effectively design stylish, responsive layouts, and fine-tune user interfaces, delivering seamless and visually appealing web experiences.',
        es: 'Un desarrollador experto en CSS3, diseño eficazmente diseños elegantes y receptivos, y ajusto interfaces de usuario, ofreciendo experiencias web sin problemas y visualmente atractivas.',
        de: 'Als versierter CSS3-Entwickler gestalte ich effektiv stilvolle, reaktionsschnelle Layouts und feine Benutzeroberflächen und liefere nahtlose und visuell ansprechende Web-Erfahrungen.',
        pt: 'Um desenvolvedor habilidoso em CSS3, eu projeto efetivamente layouts elegantes e responsivos e ajusto interfaces de usuário, entregando experiências web sem costura e visualmente atraentes.',
      },
      icon: 'devicon:css3',
      image: null,
    },
    {
      id: 11,
      title: 'Magento 2',
      description: {
        en: 'With expertise in Magento 2, I proficiently build and manage e-commerce platforms, ensuring optimised performance, secure transactions, and a user-friendly shopping experience.',
        es: 'Con experiencia en Magento 2, construyo y administro eficientemente plataformas de comercio electrónico, garantizando un rendimiento optimizado, transacciones seguras y una experiencia de compra amigable para el usuario.',
        de: 'Mit Fachkenntnissen in Magento 2 erstelle und verwalte ich effizient E-Commerce-Plattformen, um optimierte Leistung, sichere Transaktionen und eine benutzerfreundliche Einkaufserfahrung zu gewährleisten.',
        pt: 'Com experiência em Magento 2, construo e gerencio proficientemente plataformas de comércio eletrônico, garantindo desempenho otimizado, transações seguras e uma experiência de compra amigável ao usuário.',
      },
      icon: 'devicon:magento',
      image: null,
    },
    {
      id: 12,
      title: 'Wordpress',
      description: {
        en: 'As an expert in WordPress, I deftly create and manage websites, designing engaging themes, configuring plugins, and ensuring an optimised, user-friendly experience.',
        es: 'Como experto en WordPress, creo y administro hábilmente sitios web, diseño temas atractivos, configuro complementos y garantizo una experiencia optimizada y amigable para el usuario.',
        de: 'Als Experte für WordPress erstelle und verwalte ich geschickt Websites, gestalte ansprechende Themes, konfiguriere Plugins und sorge für eine optimierte, benutzerfreundliche Erfahrung.',
        pt: 'Como especialista em WordPress, crio e gerencio habilmente sites, projetando temas envolventes, configurando plugins e garantindo uma experiência otimizada e amigável ao usuário.',
      },
      icon: 'devicon:wordpress',
      image: null,
    },
    {
      id: 13,
      title: 'Linux',
      description: {
        en: 'Proficient in Linux, I adeptly navigate its various distributions, manage system processes, and ensure optimal server performance, contributing to efficient and secure computing environments.',
        es: 'Proficiente en Linux, navego hábilmente por sus diversas distribuciones, gestiono procesos del sistema y garantizo un rendimiento óptimo del servidor, contribuyendo a entornos informáticos eficientes y seguros.',
        de: 'Versiert in Linux, navigiere ich geschickt durch seine verschiedenen Distributionen, verwalte Systemprozesse und gewährleiste eine optimale Serverleistung, was zu effizienten und sicheren Rechenumgebungen beiträgt.',
        pt: 'Proficiente em Linux, navego habilmente em suas várias distribuições, gerencio processos do sistema e garanto um desempenho ideal do servidor, contribuindo para ambientes de computação eficientes e seguros.',
      },
      icon: 'devicon:linux',
      image: null,
    },
  ]
})

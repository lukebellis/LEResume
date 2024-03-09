import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return {
    title: {
      en: "My Journey as a Developer",
      es: "Mi Viaje como Desarrollador",
      de: "Mein Weg als Entwickler",
      pt: "Minha Jornada como Desenvolvedor"
    },
    sections: [
        {
            id: 1,
            heading: {
              en: "My first Computer",
              es: "Introducción",
              de: "Einleitung",
              pt: "Introdução"
            },
            description: {
              en: [
                "Growing up in the late 90s, my fascination with computers began at the age of 5 when my parents introduced me to my very first computer, the legendary Commodore 64. While most kids my age were playing with action figures or building blocks, I was immersed in a world of 2D graphics and text-based games that sparked a lifelong love affair with computing.",
                "One of my earliest memories is playing classic games like 'A NewZealand Story' and 'Pac-Man,' their simple yet addictive gameplay captivating my young mind for hours on end. I was mesmerised by the vibrant colors and pixelated graphics, completely engrossed in the virtual worlds unfolding before me.",
              ],
              es: [
                "Bienvenido a mi viaje personal a través del fascinante mundo de la química y la ciencia ambiental. Desde los días fundamentales de la rigurosa búsqueda académica en la Universidad de Bradford hasta roles impactantes en la industria y la educación, mi carrera ha sido impulsada por una pasión implacable por la ciencia y una dedicación a marcar una diferencia tangible en el mundo.",
                "Otro párrafo aquí que elabora más sobre tu viaje, logros o experiencias específicas que han dado forma a tu carrera. Esto puede incluir desafíos enfrentados, hitos alcanzados o momentos decisivos que han tenido un impacto significativo en tu camino profesional.",
                "Un tercer párrafo podría centrarse en tu visión para el futuro, cómo planeas continuar contribuyendo a tu campo y los valores o principios que guían tu trabajo. Esta parte puede proporcionar una visión de tus proyectos en curso, intereses de investigación o trabajo de defensa."
              ],
              de: [
                "Willkommen zu meiner persönlichen Reise durch die faszinierende Welt der Chemie und Umweltwissenschaften. Von den grundlegenden Tagen des rigorosen akademischen Strebens an der Universität von Bradford bis zu wirkungsvollen Rollen in Industrie und Bildung wurde meine Karriere von einer unermüdlichen Leidenschaft für die Wissenschaft und der Hingabe, einen greifbaren Unterschied in der Welt zu machen, angetrieben.",
                "Ein weiterer Absatz hier, der weiter auf Ihre Reise, Errungenschaften oder spezifische Erfahrungen eingeht, die Ihre Karriere geprägt haben. Dies kann Herausforderungen umfassen, die Sie gemeistert haben, erreichte Meilensteine oder entscheidende Momente, die einen signifikanten Einfluss auf Ihren beruflichen Weg hatten.",
                "Ein dritter Absatz könnte sich auf Ihre Vision für die Zukunft konzentrieren, wie Sie weiterhin zu Ihrem Fachgebiet beitragen möchten und welche Werte oder Prinzipien Ihre Arbeit leiten. Dieser Teil kann Einblicke in Ihre laufenden Projekte, Forschungsinteressen oder Ihr Engagement geben."
              ],
              pt: [
                "Bem-vindo à minha jornada pessoal pelo fascinante mundo da química e ciência ambiental. Desde os dias fundamentais de rigorosa busca acadêmica na Universidade de Bradford até papéis impactantes na indústria e educação, minha carreira foi impulsionada por uma paixão incansável pela ciência e uma dedicação em fazer uma diferença tangível no mundo.",
                "Outro parágrafo aqui detalhando mais sobre sua jornada, conquistas ou experiências específicas que moldaram sua carreira. Isso pode incluir desafios enfrentados, marcos alcançados ou momentos decisivos que tiveram um impacto significativo em seu caminho profissional.",
                "Um terceiro parágrafo pode focar em sua visão para o futuro, como você planeja continuar contribuindo para sua área e os valores ou princípios que orientam seu trabalho. Esta parte pode oferecer uma visão sobre seus projetos atuais, interesses de pesquisa ou trabalho de advocacia."
              ]
            },
            image: "/images/About/commodore_64.webp",
            align: "left"
          },
      {
        id: 2,
        heading: {
          en: "Windows 98 & 56kpbs",
          es: "Experiencia en Química Analítica",
          de: "Expertise in Analytischer Chemie",
          pt: "Experiência em Química Analítica"
        },
        description: {
            en: [
              "Growing up in the late 90s, my fascination with computers began at the age of 5 when my parents introduced me to my very first computer, the legendary Commodore 64. While most kids my age were playing with action figures or building blocks, I was immersed in a world of 2D graphics and text-based games that sparked a lifelong love affair with computing.",
              "One of my earliest memories is playing classic games like 'A NewZealand Story' and 'Pac-Man,' their simple yet addictive gameplay captivating my young mind for hours on end. I was mesmerised by the vibrant colors and pixelated graphics, completely engrossed in the virtual worlds unfolding before me.",
            ],
            es: [
              "Bienvenido a mi viaje personal a través del fascinante mundo de la química y la ciencia ambiental. Desde los días fundamentales de la rigurosa búsqueda académica en la Universidad de Bradford hasta roles impactantes en la industria y la educación, mi carrera ha sido impulsada por una pasión implacable por la ciencia y una dedicación a marcar una diferencia tangible en el mundo.",
              "Otro párrafo aquí que elabora más sobre tu viaje, logros o experiencias específicas que han dado forma a tu carrera. Esto puede incluir desafíos enfrentados, hitos alcanzados o momentos decisivos que han tenido un impacto significativo en tu camino profesional.",
              "Un tercer párrafo podría centrarse en tu visión para el futuro, cómo planeas continuar contribuyendo a tu campo y los valores o principios que guían tu trabajo. Esta parte puede proporcionar una visión de tus proyectos en curso, intereses de investigación o trabajo de defensa."
            ],
            de: [
              "Willkommen zu meiner persönlichen Reise durch die faszinierende Welt der Chemie und Umweltwissenschaften. Von den grundlegenden Tagen des rigorosen akademischen Strebens an der Universität von Bradford bis zu wirkungsvollen Rollen in Industrie und Bildung wurde meine Karriere von einer unermüdlichen Leidenschaft für die Wissenschaft und der Hingabe, einen greifbaren Unterschied in der Welt zu machen, angetrieben.",
              "Ein weiterer Absatz hier, der weiter auf Ihre Reise, Errungenschaften oder spezifische Erfahrungen eingeht, die Ihre Karriere geprägt haben. Dies kann Herausforderungen umfassen, die Sie gemeistert haben, erreichte Meilensteine oder entscheidende Momente, die einen signifikanten Einfluss auf Ihren beruflichen Weg hatten.",
              "Ein dritter Absatz könnte sich auf Ihre Vision für die Zukunft konzentrieren, wie Sie weiterhin zu Ihrem Fachgebiet beitragen möchten und welche Werte oder Prinzipien Ihre Arbeit leiten. Dieser Teil kann Einblicke in Ihre laufenden Projekte, Forschungsinteressen oder Ihr Engagement geben."
            ],
            pt: [
              "Bem-vindo à minha jornada pessoal pelo fascinante mundo da química e ciência ambiental. Desde os dias fundamentais de rigorosa busca acadêmica na Universidade de Bradford até papéis impactantes na indústria e educação, minha carreira foi impulsionada por uma paixão incansável pela ciência e uma dedicação em fazer uma diferença tangível no mundo.",
              "Outro parágrafo aqui detalhando mais sobre sua jornada, conquistas ou experiências específicas que moldaram sua carreira. Isso pode incluir desafios enfrentados, marcos alcançados ou momentos decisivos que tiveram um impacto significativo em seu caminho profissional.",
              "Um terceiro parágrafo pode focar em sua visão para o futuro, como você planeja continuar contribuindo para sua área e os valores ou princípios que orientam seu trabalho. Esta parte pode oferecer uma visão sobre seus projetos atuais, interesses de pesquisa ou trabalho de advocacia."
            ]
          },
        image: '/images/About/win-98.webp',
        align: 'right'
      },
      {
        id: 3,
        heading: {
          en: "My First Website",
          es: "Transición al Desarrollo Web",
          de: "Übergang zum Webentwicklung",
          pt: "Transição para o Desenvolvimento Web"
        },
        description: {
            en: [
              "Growing up in the late 90s, my fascination with computers began at the age of 5 when my parents introduced me to my very first computer, the legendary Commodore 64. While most kids my age were playing with action figures or building blocks, I was immersed in a world of 2D graphics and text-based games that sparked a lifelong love affair with computing.",
              "One of my earliest memories is playing classic games like 'A NewZealand Story' and 'Pac-Man,' their simple yet addictive gameplay captivating my young mind for hours on end. I was mesmerised by the vibrant colors and pixelated graphics, completely engrossed in the virtual worlds unfolding before me.",
            ],
            es: [
              "Bienvenido a mi viaje personal a través del fascinante mundo de la química y la ciencia ambiental. Desde los días fundamentales de la rigurosa búsqueda académica en la Universidad de Bradford hasta roles impactantes en la industria y la educación, mi carrera ha sido impulsada por una pasión implacable por la ciencia y una dedicación a marcar una diferencia tangible en el mundo.",
              "Otro párrafo aquí que elabora más sobre tu viaje, logros o experiencias específicas que han dado forma a tu carrera. Esto puede incluir desafíos enfrentados, hitos alcanzados o momentos decisivos que han tenido un impacto significativo en tu camino profesional.",
              "Un tercer párrafo podría centrarse en tu visión para el futuro, cómo planeas continuar contribuyendo a tu campo y los valores o principios que guían tu trabajo. Esta parte puede proporcionar una visión de tus proyectos en curso, intereses de investigación o trabajo de defensa."
            ],
            de: [
              "Willkommen zu meiner persönlichen Reise durch die faszinierende Welt der Chemie und Umweltwissenschaften. Von den grundlegenden Tagen des rigorosen akademischen Strebens an der Universität von Bradford bis zu wirkungsvollen Rollen in Industrie und Bildung wurde meine Karriere von einer unermüdlichen Leidenschaft für die Wissenschaft und der Hingabe, einen greifbaren Unterschied in der Welt zu machen, angetrieben.",
              "Ein weiterer Absatz hier, der weiter auf Ihre Reise, Errungenschaften oder spezifische Erfahrungen eingeht, die Ihre Karriere geprägt haben. Dies kann Herausforderungen umfassen, die Sie gemeistert haben, erreichte Meilensteine oder entscheidende Momente, die einen signifikanten Einfluss auf Ihren beruflichen Weg hatten.",
              "Ein dritter Absatz könnte sich auf Ihre Vision für die Zukunft konzentrieren, wie Sie weiterhin zu Ihrem Fachgebiet beitragen möchten und welche Werte oder Prinzipien Ihre Arbeit leiten. Dieser Teil kann Einblicke in Ihre laufenden Projekte, Forschungsinteressen oder Ihr Engagement geben."
            ],
            pt: [
              "Bem-vindo à minha jornada pessoal pelo fascinante mundo da química e ciência ambiental. Desde os dias fundamentais de rigorosa busca acadêmica na Universidade de Bradford até papéis impactantes na indústria e educação, minha carreira foi impulsionada por uma paixão incansável pela ciência e uma dedicação em fazer uma diferença tangível no mundo.",
              "Outro parágrafo aqui detalhando mais sobre sua jornada, conquistas ou experiências específicas que moldaram sua carreira. Isso pode incluir desafios enfrentados, marcos alcançados ou momentos decisivos que tiveram um impacto significativo em seu caminho profissional.",
              "Um terceiro parágrafo pode focar em sua visão para o futuro, como você planeja continuar contribuindo para sua área e os valores ou princípios que orientam seu trabalho. Esta parte pode oferecer uma visão sobre seus projetos atuais, interesses de pesquisa ou trabalho de advocacia."
            ]
          },
        image: '/images/About/Ape-4.webp',
        align: 'left'
      },
      {
        id: 4,
        heading: {
          en: "Computational Chemisrty",
          es: "Transición al Desarrollo Web",
          de: "Übergang zum Webentwicklung",
          pt: "Transição para o Desenvolvimento Web"
        },
        description: {
            en: [
              "Growing up in the late 90s, my fascination with computers began at the age of 5 when my parents introduced me to my very first computer, the legendary Commodore 64. While most kids my age were playing with action figures or building blocks, I was immersed in a world of 2D graphics and text-based games that sparked a lifelong love affair with computing.",
              "One of my earliest memories is playing classic games like 'A NewZealand Story' and 'Pac-Man,' their simple yet addictive gameplay captivating my young mind for hours on end. I was mesmerised by the vibrant colors and pixelated graphics, completely engrossed in the virtual worlds unfolding before me.",
            ],
            es: [
              "Bienvenido a mi viaje personal a través del fascinante mundo de la química y la ciencia ambiental. Desde los días fundamentales de la rigurosa búsqueda académica en la Universidad de Bradford hasta roles impactantes en la industria y la educación, mi carrera ha sido impulsada por una pasión implacable por la ciencia y una dedicación a marcar una diferencia tangible en el mundo.",
              "Otro párrafo aquí que elabora más sobre tu viaje, logros o experiencias específicas que han dado forma a tu carrera. Esto puede incluir desafíos enfrentados, hitos alcanzados o momentos decisivos que han tenido un impacto significativo en tu camino profesional.",
              "Un tercer párrafo podría centrarse en tu visión para el futuro, cómo planeas continuar contribuyendo a tu campo y los valores o principios que guían tu trabajo. Esta parte puede proporcionar una visión de tus proyectos en curso, intereses de investigación o trabajo de defensa."
            ],
            de: [
              "Willkommen zu meiner persönlichen Reise durch die faszinierende Welt der Chemie und Umweltwissenschaften. Von den grundlegenden Tagen des rigorosen akademischen Strebens an der Universität von Bradford bis zu wirkungsvollen Rollen in Industrie und Bildung wurde meine Karriere von einer unermüdlichen Leidenschaft für die Wissenschaft und der Hingabe, einen greifbaren Unterschied in der Welt zu machen, angetrieben.",
              "Ein weiterer Absatz hier, der weiter auf Ihre Reise, Errungenschaften oder spezifische Erfahrungen eingeht, die Ihre Karriere geprägt haben. Dies kann Herausforderungen umfassen, die Sie gemeistert haben, erreichte Meilensteine oder entscheidende Momente, die einen signifikanten Einfluss auf Ihren beruflichen Weg hatten.",
              "Ein dritter Absatz könnte sich auf Ihre Vision für die Zukunft konzentrieren, wie Sie weiterhin zu Ihrem Fachgebiet beitragen möchten und welche Werte oder Prinzipien Ihre Arbeit leiten. Dieser Teil kann Einblicke in Ihre laufenden Projekte, Forschungsinteressen oder Ihr Engagement geben."
            ],
            pt: [
              "Bem-vindo à minha jornada pessoal pelo fascinante mundo da química e ciência ambiental. Desde os dias fundamentais de rigorosa busca acadêmica na Universidade de Bradford até papéis impactantes na indústria e educação, minha carreira foi impulsionada por uma paixão incansável pela ciência e uma dedicação em fazer uma diferença tangível no mundo.",
              "Outro parágrafo aqui detalhando mais sobre sua jornada, conquistas ou experiências específicas que moldaram sua carreira. Isso pode incluir desafios enfrentados, marcos alcançados ou momentos decisivos que tiveram um impacto significativo em seu caminho profissional.",
              "Um terceiro parágrafo pode focar em sua visão para o futuro, como você planeja continuar contribuindo para sua área e os valores ou princípios que orientam seu trabalho. Esta parte pode oferecer uma visão sobre seus projetos atuais, interesses de pesquisa ou trabalho de advocacia."
            ]
          },
        image: '/images/About/Ape-4.webp',
        align: 'left'
      },
      {
        id: 5,
        heading: {
          en: "Advocacy for Environmentalism",
          es: "Defensa del Ambientalismo",
          de: "Einsatz für Umweltschutz",
          pt: "Defesa do Ambientalismo"
        },
        description: {
          en: "At the heart of my professional endeavours is a commitment to environmentalism. I advocate for the integration of science and technology to develop sustainable solutions, a philosophy that extends into my community involvement and educational outreach. Through initiatives like the Royal Society of Chemistry's Spectroscopy in a Suitcase, I've engaged with the next generation, fostering a passion for science and environmental stewardship.",
          es: "En el corazón de mis esfuerzos profesionales se encuentra un compromiso con el ambientalismo. Abogo por la integración de la ciencia y la tecnología para desarrollar soluciones sostenibles, una filosofía que se extiende a mi participación comunitaria y divulgación educativa. A través de iniciativas como la Espectroscopía en una Maleta de la Royal Society of Chemistry, he interactuado con la próxima generación, fomentando una pasión por la ciencia y la custodia ambiental.",
          de: "Im Herzen meiner beruflichen Bemühungen steht das Engagement für den Umweltschutz. Ich setze mich für die Integration von Wissenschaft und Technologie ein, um nachhaltige Lösungen zu entwickeln, eine Philosophie, die sich auf mein Gemeinschaftsengagement und meine Bildungsarbeit erstreckt. Durch Initiativen wie die Spektroskopie im Koffer der Royal Society of Chemistry habe ich mich mit der nächsten Generation beschäftigt und eine Leidenschaft für Wissenschaft und Umweltschutz gefördert.",
          pt: "No coração dos meus empreendimentos profissionais está um compromisso com o ambientalismo. Defendo a integração da ciência e tecnologia para desenvolver soluções sustentáveis, uma filosofia que se estende ao meu envolvimento comunitário e divulgação educacional. Por meio de iniciativas como a Espectroscopia em uma Mala da Royal Society of Chemistry, envolvi-me com a próxima geração, fomentando uma paixão pela ciência e pela gestão ambiental."
        },
        image: '/images/ScientistProjects/VRChem.webp',
        align: 'right'
      },
      {
        id: 6,
        heading: {
          en: "Magento 2",
          es: "Conéctate Conmigo",
          de: "Verbinde dich mit Mir",
          pt: "Conecte-se Comigo"
        },
        description: {
          en: "I invite you to explore my portfolio at www.lukeellis.me to discover the intersection of science, technology, and environmental advocacy in my work. Let's connect and explore how we can collaborate on projects that drive meaningful change.",
          es: "Te invito a explorar mi portafolio en www.lukeellis.me para descubrir la intersección de ciencia, tecnología y defensa del medio ambiente en mi trabajo. Conectémonos y exploremos cómo podemos colaborar en proyectos que impulsen un cambio significativo.",
          de: "Ich lade Sie ein, mein Portfolio unter www.lukeellis.me zu erkunden, um die Schnittstelle von Wissenschaft, Technologie und Umweltengagement in meiner Arbeit zu entdecken. Lassen Sie uns verbinden und erkunden, wie wir bei Projekten zusammenarbeiten können, die einen bedeutungsvollen Wandel vorantreiben.",
          pt: "Convido você a explorar meu portfólio em www.lukeellis.me para descobrir a interseção de ciência, tecnologia e advocacia ambiental no meu trabalho. Vamos nos conectar e explorar como podemos colaborar em projetos que promovam uma mudança significativa."
        },
        image: '/images/About/magento-2.png',
        align: 'left'
      },
      {
        id: 7,
        heading: {
          en: "PixelCodeLab Ltd",
          es: "PixelCodeLab Ltd",
          de: "PixelCodeLab Ltd",
          pt: "PixelCodeLab Ltd"
        },
        description: {
          en: "I invite you to explore my portfolio at www.lukeellis.me to discover the intersection of science, technology, and environmental advocacy in my work. Let's connect and explore how we can collaborate on projects that drive meaningful change.",
          es: "Te invito a explorar mi portafolio en www.lukeellis.me para descubrir la intersección de ciencia, tecnología y defensa del medio ambiente en mi trabajo. Conectémonos y exploremos cómo podemos colaborar en proyectos que impulsen un cambio significativo.",
          de: "Ich lade Sie ein, mein Portfolio unter www.lukeellis.me zu erkunden, um die Schnittstelle von Wissenschaft, Technologie und Umweltengagement in meiner Arbeit zu entdecken. Lassen Sie uns verbinden und erkunden, wie wir bei Projekten zusammenarbeiten können, die einen bedeutungsvollen Wandel vorantreiben.",
          pt: "Convido você a explorar meu portfólio em www.lukeellis.me para descobrir a interseção de ciência, tecnologia e advocacia ambiental no meu trabalho. Vamos nos conectar e explorar como podemos colaborar em projetos que promovam uma mudança significativa."
        },
        image: '/images/About/PCL.webp',
        align: 'right'
      }
    ]
  };
});

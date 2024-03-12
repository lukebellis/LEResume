import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return {
    title: {
        en: "My Journey as a Scientist",
        es: "Mi Viaje como Científico",
        de: "Mein Weg als Wissenschaftler",
        pt: "Minha Jornada como Cientista"
      },      
    sections: [
        {
            id: 1,
            heading: {
              en: "Introduction",
              es: "Introducción",
              de: "Einleitung",
              pt: "Introdução"
            },
            description: {
              en: [
                "Welcome to my personal journey through the fascinating world of chemistry and environmental science. From the foundational days of rigorous academic pursuit at the University of Bradford to impactful roles in industry and education, my career has been driven by a relentless passion for science and a dedication to making a tangible difference in the world.",
                "Another paragraph here elaborating further on your journey, achievements, or specific experiences that have shaped your career. This can include challenges faced, milestones achieved, or pivotal moments that have had a significant impact on your professional path.",
                "A third paragraph could focus on your vision for the future, how you plan to continue contributing to your field, and the values or principles that guide your work. This part can provide insight into your ongoing projects, research interests, or advocacy work."
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
            image: "/images/About/conical.webp",
            align: "left"
          },
          {
            id: 2,
            heading: {
              en: "Teaching",
              es: "Introducción",
              de: "Einleitung",
              pt: "Introdução"
            },
            description: {
              en: [
                "Welcome to my personal journey through the fascinating world of chemistry and environmental science. From the foundational days of rigorous academic pursuit at the University of Bradford to impactful roles in industry and education, my career has been driven by a relentless passion for science and a dedication to making a tangible difference in the world.",
                "Another paragraph here elaborating further on your journey, achievements, or specific experiences that have shaped your career. This can include challenges faced, milestones achieved, or pivotal moments that have had a significant impact on your professional path.",
                "A third paragraph could focus on your vision for the future, how you plan to continue contributing to your field, and the values or principles that guide your work. This part can provide insight into your ongoing projects, research interests, or advocacy work."
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
            image: "/images/About/teaching.webp",
            extraImages: [ 
              "/images/About/SIAS.jpeg",
            ],
            align: "right"
          },
      {
        id: 3,
        heading: {
          en: "Masters in Chemistry",
          es: "Experiencia en Química Analítica",
          de: "Expertise in Analytischer Chemie",
          pt: "Experiência em Química Analítica"
        },
        description: {
          en: "My expertise spans critical roles in analytical chemistry, where I've ensured water quality and public health at South West Water and contributed to environmental protection with the Environment Agency. These roles honed my technical prowess and underscored my dedication to leveraging science for societal good.",
          es: "Mi experiencia abarca roles críticos en química analítica, donde he asegurado la calidad del agua y la salud pública en South West Water y he contribuido a la protección ambiental con la Agencia Ambiental. Estos roles han perfeccionado mi destreza técnica y subrayado mi dedicación a aprovechar la ciencia para el bien social.",
          de: "Meine Expertise umfasst kritische Rollen in der analytischen Chemie, wo ich die Wasserqualität und die öffentliche Gesundheit bei South West Water sichergestellt und zum Umweltschutz bei der Umweltagentur beigetragen habe. Diese Rollen haben meine technische Kompetenz geschärft und meine Hingabe unterstrichen, die Wissenschaft zum Wohle der Gesellschaft zu nutzen.",
          pt: "Minha expertise abrange papéis críticos em química analítica, onde garanti a qualidade da água e a saúde pública na South West Water e contribuí para a proteção ambiental com a Agência Ambiental. Esses papéis aprimoraram minha proeza técnica e sublinharam minha dedicação em utilizar a ciência para o bem da sociedade."
        },
        image: '/images/About/grad.webp',
        extraImages: [ 
          "/images/About/Bradford.webp",
        ],
        align: 'left'
      },
      {
        id: 4,
        heading: {
          en: "Environment Agency: National Laboratory Service",
          es: "Transición al Desarrollo Web",
          de: "Übergang zum Webentwicklung",
          pt: "Transição para o Desenvolvimento Web"
        },
        description: {
          en: "In parallel, my passion for technology led me to establish PixelCodeLab, where I specialise in creating bespoke digital solutions that prioritise user experience and functionality. My work in web development, particularly with Nexus Agencies Ltd, reflects a deep understanding of the digital landscape, where I've effectively combined science and technology to drive progress and innovation.",
          es: "Paralelamente, mi pasión por la tecnología me llevó a establecer PixelCodeLab, donde me especializo en crear soluciones digitales a medida que priorizan la experiencia del usuario y la funcionalidad. Mi trabajo en desarrollo web, especialmente con Nexus Agencies Ltd, refleja un profundo entendimiento del panorama digital, donde he combinado efectivamente ciencia y tecnología para impulsar el progreso y la innovación.",
          de: "Parallel dazu führte mich meine Leidenschaft für Technologie dazu, PixelCodeLab zu gründen, wo ich mich auf die Erstellung maßgeschneiderter digitaler Lösungen spezialisiere, die Benutzererfahrung und Funktionalität priorisieren. Meine Arbeit in der Webentwicklung, insbesondere bei Nexus Agencies Ltd, spiegelt ein tiefes Verständnis der digitalen Landschaft wider, wo ich Wissenschaft und Technologie effektiv kombiniert habe, um Fortschritt und Innovation voranzutreiben.",
          pt: "Paralelamente, minha paixão por tecnologia me levou a estabelecer a PixelCodeLab, onde me especializo em criar soluções digitais sob medida que priorizam a experiência do usuário e a funcionalidade. Meu trabalho em desenvolvimento web, especialmente com a Nexus Agencies Ltd, reflete um profundo entendimento da paisagem digital, onde combinei efetivamente ciência e tecnologia para impulsionar o progresso e a inovação."
        },
        image: '/images/About/Olympia-House.webp',
        extraImages: [ 
          "/images/About/EA-Team.jpeg",
        ],
        align: 'right'
      },
      {
        id: 5,
        heading: {
          en: "South West Water",
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
        image: '/images/About/countess-wear.webp',
        extraImages: [ 
          "/images/About/ICP-MS.png",
          "/images/About/SWW.webp'"
        ],
        align: 'left'
      },
      {
        id: 6,
        heading: {
          en: "Connect with Me",
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
        image: '/images/About/SWW.webp',
        align: 'right'
      },
      {
        id: 7,
        heading: {
          en: "South West Water",
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
        image: '/images/About/countess-wear.webp',
        align: 'left'
      },
    ]
  };
});

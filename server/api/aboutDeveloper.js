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
        "id": 5,
        "heading": {
          "en": "Programming with LEGO Mindstorms",
          "es": "Química Computacional",
          "de": "Computational Chemie",
          "pt": "Química Computacional"
        },
        "description": {
          "en": [
            "During my placement year at university, I actively participated in STEM outreach at local colleges and secondary schools, marking a significant stage in my developmental journey. My involvement centred around delivering a variety of science-based activities designed to ignite students' interest in technology. Leading Lego Mindstorms workshops was a highlight, introducing programming to students in an engaging and hands-on manner.",
            "Utilising Lego Mindstorms as an educational instrument effectively bridged theoretical concepts with practical application, demystifying programming for students through interactive learning. This initiative extended beyond conventional education; it aimed to spark a passion for technology and innovation in young learners. A focal point was encouraging students to take part in a global competition, challenging them to apply their newfound skills in a competitive yet supportive international arena. This endeavour not only encouraged teamwork but also provided them with practical problem-solving experience and the thrill of international competition.",
            "This project underscored the value of early STEM engagement and the transformative impact of experiential learning in moulding future innovators. It demonstrated that education has its greatest impact when it moves beyond the traditional classroom, blending enjoyment with vital technical skills. Through this STEM outreach, I contributed to linking academic theories to their practical implementation, whilst also fostering the next generation's curiosity and enthusiasm for technology."
          ],
          "es": [
            "Durante mi año de colocación en la universidad, participé activamente en la divulgación de STEM en colegios locales y escuelas secundarias, marcando una etapa significativa en mi viaje de desarrollo. Mi participación se centró en la entrega de una variedad de actividades basadas en la ciencia diseñadas para despertar el interés de los estudiantes en la tecnología. Dirigir talleres de Lego Mindstorms fue un punto destacado, introduciendo la programación a los estudiantes de manera atractiva y práctica.",
            "Utilizar Lego Mindstorms como un instrumento educativo cerró efectivamente la brecha entre conceptos teóricos y aplicación práctica, desmitificando la programación para los estudiantes a través del aprendizaje interactivo. Esta iniciativa se extendió más allá de la educación convencional; su objetivo era despertar una pasión por la tecnología y la innovación en los jóvenes aprendices. Un punto focal fue alentar a los estudiantes a participar en una competencia global, desafiándolos a aplicar sus habilidades recién adquiridas en un entorno internacional competitivo pero de apoyo. Este esfuerzo no solo fomentó el trabajo en equipo, sino que también les proporcionó experiencia práctica en la resolución de problemas y la emoción de la competencia internacional.",
            "Este proyecto subrayó el valor del compromiso temprano con STEM y el impacto transformador del aprendizaje experiencial en la formación de futuros innovadores. Demostró que la educación tiene su mayor impacto cuando trasciende el aula tradicional, combinando el disfrute con habilidades técnicas esenciales. A través de esta divulgación STEM, contribuí a vincular teorías académicas con su implementación práctica, fomentando al mismo tiempo la curiosidad y el entusiasmo de la próxima generación por la tecnología."
          ],
          "de": [
            "Während meines Praxisjahres an der Universität nahm ich aktiv an der STEM-Outreach-Initiative bei lokalen Colleges und weiterführenden Schulen teil, was einen signifikanten Abschnitt meiner Entwicklungsreise markierte. Meine Beteiligung konzentrierte sich auf die Durchführung verschiedener wissenschaftsbasierter Aktivitäten, die darauf abzielten, das Interesse der Schüler an Technologie zu wecken. Die Leitung von Lego Mindstorms-Workshops war ein Highlight und führte die Schüler auf eine ansprechende und praktische Weise in die Programmierung ein.",
            "Der Einsatz von Lego Mindstorms als Bildungsinstrument überbrückte effektiv die Kluft zwischen theoretischen Konzepten und praktischer Anwendung und entmystifizierte die Programmierung für die Schüler durch interaktives Lernen. Diese Initiative ging über die konventionelle Bildung hinaus; sie zielte darauf ab, eine Leidenschaft für Technologie und Innovation bei jungen Lernenden zu entfachen. Ein Schwerpunkt war die Ermutigung der Schüler, an einem globalen Wettbewerb teilzunehmen, bei dem sie ihre neu erworbenen Fähigkeiten in einem wettbewerbsorientierten, aber unterstützenden internationalen Umfeld anwenden sollten. Dieses Unterfangen förderte nicht nur Teamarbeit, sondern bot den Schülern auch praktische Problemlösungserfahrungen und den Nervenkitzel des internationalen Wettbewerbs.",
            "Dieses Projekt unterstrich den Wert des frühen STEM-Engagements und die transformative Wirkung des erfahrungsbasierten Lernens bei der Formung zukünftiger Innovatoren. Es zeigte, dass Bildung den größten Einfluss hat, wenn sie über das traditionelle Klassenzimmer hinausgeht und Spaß mit wichtigen technischen Fähigkeiten verbindet. Durch diese STEM-Outreach-Aktivität trug ich dazu bei, akademische Theorien mit ihrer praktischen Umsetzung zu verknüpfen und gleichzeitig die Neugier und Begeisterung der nächsten Generation für Technologie zu fördern."
          ],
          "pt": [
            "Durante meu ano de colocação na universidade, participei ativamente da divulgação de STEM em faculdades locais e escolas secundárias, marcando um estágio significativo na minha jornada de desenvolvimento. Meu envolvimento foi centrado na entrega de uma variedade de atividades baseadas em ciência projetadas para despertar o interesse dos alunos em tecnologia. Liderar oficinas de Lego Mindstorms foi um destaque, introduzindo programação aos alunos de uma maneira envolvente e prática.",
            "Utilizar o Lego Mindstorms como uma ferramenta educacional efetivamente preencheu a lacuna entre conceitos teóricos e aplicação prática, desmistificando a programação para os alunos através da aprendizagem interativa. Esta iniciativa estendeu-se além da educação convencional; visava despertar uma paixão por tecnologia e inovação em jovens aprendizes. Um ponto focal foi encorajar os alunos a participar de uma competição global, desafiando-os a aplicar suas habilidades recém-adquiridas em uma arena internacional competitiva, mas de apoio. Este empreendimento não apenas incentivou o trabalho em equipe, mas também proporcionou a eles experiência prática em resolução de problemas e o entusiasmo da competição internacional.",
            "Este projeto destacou o valor do envolvimento precoce com STEM e o impacto transformador do aprendizado experiencial na formação de futuros inovadores. Demonstrou que a educação tem seu maior impacto quando vai além da sala de aula tradicional, mesclando diversão com habilidades técnicas vitais. Por meio dessa divulgação em STEM, contribuí para conectar teorias acadêmicas com sua implementação prática, ao mesmo tempo em que fomentava a curiosidade e o entusiasmo da próxima geração pela tecnologia."
          ]
        },
        "image": "/images/About/lego.webp",
        extraImages: [ // Add this new array
         "/images/About/lego-2.png",
         "/images/About/STEM-Learning.webp",
       ],
        "align": "right"
        
      },
      {
        id: 5,
        heading: {
          en: "Computational Chemisrty",
          es: "Transición al Desarrollo Web",
          de: "Übergang zum Webentwicklung",
          pt: "Transição para o Desenvolvimento Web"
        },
        description: {
            en: [
              "During my placement year at university, I actively participated in STEM outreach at local colleges and secondary schools, marking a significant stage in my developmental journey. My involvement centred around delivering a variety of science-based activities designed to ignite students' interest in technology. Leading Lego Mindstorms workshops was a highlight, introducing programming to students in an engaging and hands-on manner.",
              "Utilising Lego Mindstorms as an educational instrument effectively bridged theoretical concepts with practical application, demystifying programming for students through interactive learning. This initiative extended beyond conventional education; it aimed to spark a passion for technology and innovation in young learners. A focal point was encouraging students to take part in a global competition, challenging them to apply their newfound skills in a competitive yet supportive international arena. This endeavour not only encouraged teamwork but also provided them with practical problem-solving experience and the thrill of international competition.",
              "This project underscored the value of early STEM engagement and the transformative impact of experiential learning in moulding future innovators. It demonstrated that education has its greatest impact when it moves beyond the traditional classroom, blending enjoyment with vital technical skills. Through this STEM outreach, I contributed to linking academic theories to their practical implementation, whilst also fostering the next generation's curiosity and enthusiasm for technology."
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
        image: '/images/About/molecule.gif',
        extraImages: [ // Add this new array
         "/images/About/Avogadro.webp",
         "/images/About/molecule-2.webp",
       ],
        align: 'left'
      },
      {
        id: 6,
        heading: {
          en: "MolVR",
          es: "Defensa del Ambientalismo",
          de: "Einsatz für Umweltschutz",
          pt: "Defesa do Ambientalismo"
        },
        description: {
          en: [
            "The MolVR project, which I initiated during my placement year and was generously supported by the Royal Society of Chemistry following my successful grant application, stands as a pivotal chapter in my development career. Embarking on this solo project significantly expanded my proficiency in Python programming, plunging me into the depths of complex libraries such as PyOpenGL and RDKit. This journey extended well beyond basic Python scripting, venturing into the sophisticated domains of graphical rendering and cheminformatics.",
            "It not only broadened my technical skillset but also underscored the value of self-driven, interdisciplinary work. The development of MolVR, a tool that transforms molecular visualisation through virtual reality, honed my problem-solving skills and deepened my appreciation for the essential role of software in demystifying complex scientific concepts, making them engaging and interactive.",
            "Undertaking this project independently highlighted my capability to navigate the grant application process successfully and manage a comprehensive development project from conception to realisation, reinforcing the importance of autonomy and initiative in my professional growth."
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
        image: '/images/About/MolVR.webp',
        extraImages: [ 
         "/images/About/RSC.webp",
         "/images/ScientistProjects/VRChem.webp"
       ],
        align: 'right'
      },
        {
          "id": 7,
          "heading": {
            "en": "Magento 2 Development",
            "es": "Desarrollo en Magento 2",
            "de": "Magento 2 Entwicklung",
            "pt": "Desenvolvimento Magento 2"
          },
          "description": {
            "en": [
              "Transitioning into the world of Magento 2 development marked a significant pivot in my professional journey as a developer. The complex ecosystem of Magento 2 offered a challenging yet rewarding opportunity to deepen my expertise in e-commerce solutions. My role involved tailoring Magento 2 to meet the unique requirements of our retail and wholesale jewellery business, enhancing user experience, and ensuring the security and performance of our online platform.",
              "This experience not only expanded my technical skillset in PHP and Magento 2 but also underscored the importance of adaptability and continuous learning in the tech industry. Leading the development and customisation of our e-commerce platform allowed me to gain invaluable insights into the nuances of digital commerce, from inventory management to customer engagement strategies.",
              "Embracing the challenges and opportunities presented by Magento 2 development, I was able to drive innovation within our business, contributing to a seamless online shopping experience that meets the evolving needs of our customers. This chapter of my journey illustrated the critical role of technology in transforming business operations and enhancing customer satisfaction in the digital age."
            ],
            "es": [
              "La transición al mundo del desarrollo de Magento 2 marcó un giro significativo en mi trayectoria profesional como desarrollador. El complejo ecosistema de Magento 2 ofreció una oportunidad desafiante pero gratificante para profundizar mi experiencia en soluciones de comercio electrónico. Mi rol implicaba adaptar Magento 2 para satisfacer los requisitos únicos de nuestro negocio de joyería al por menor y mayorista, mejorando la experiencia del usuario y asegurando la seguridad y el rendimiento de nuestra plataforma en línea.",
              "Esta experiencia no solo expandió mi conjunto de habilidades técnicas en PHP y Magento 2, sino que también subrayó la importancia de la adaptabilidad y el aprendizaje continuo en la industria tecnológica. Liderar el desarrollo y personalización de nuestra plataforma de comercio electrónico me permitió obtener conocimientos invaluables sobre los matices del comercio digital, desde la gestión de inventario hasta las estrategias de compromiso con el cliente.",
              "Al abrazar los desafíos y oportunidades presentados por el desarrollo de Magento 2, pude impulsar la innovación dentro de nuestro negocio, contribuyendo a una experiencia de compra en línea sin fisuras que satisface las necesidades en evolución de nuestros clientes. Este capítulo de mi viaje ilustró el papel crítico de la tecnología en la transformación de las operaciones comerciales y el aumento de la satisfacción del cliente en la era digital."
            ],
            "de": [
              "Der Übergang in die Welt der Magento 2-Entwicklung markierte einen signifikanten Wendepunkt in meiner beruflichen Laufbahn als Entwickler. Das komplexe Ökosystem von Magento 2 bot eine herausfordernde, aber lohnende Gelegenheit, meine Expertise in E-Commerce-Lösungen zu vertiefen. Meine Aufgabe war es, Magento 2 an die einzigartigen Anforderungen unseres Einzel- und Großhandelsjuweliergeschäfts anzupassen, die Benutzererfahrung zu verbessern und die Sicherheit und Leistung unserer Online-Plattform zu gewährleisten.",
              "Diese Erfahrung erweiterte nicht nur mein technisches Können in PHP und Magento 2, sondern unterstrich auch die Bedeutung von Anpassungsfähigkeit und kontinuierlichem Lernen in der Technologiebranche. Die Leitung der Entwicklung und Anpassung unserer E-Commerce-Plattform ermöglichte es mir, unschätzbare Einblicke in die Feinheiten des digitalen Handels zu gewinnen, von der Bestandsverwaltung bis zu Strategien zur Kundenbindung.",
              "Durch die Annahme der Herausforderungen und Möglichkeiten, die die Magento 2-Entwicklung bot, konnte ich Innovationen in unserem Geschäft vorantreiben und zu einem nahtlosen Online-Einkaufserlebnis beitragen, das den sich entwickelnden Bedürfnissen unserer Kunden gerecht wird. Dieses Kapitel meiner Reise veranschaulichte die entscheidende Rolle der Technologie bei der Umgestaltung von Geschäftsabläufen und der Steigerung der Kundenzufriedenheit im digitalen Zeitalter."
            ],
            "pt": [
              "A transição para o mundo do desenvolvimento Magento 2 marcou um ponto de virada significativo na minha jornada profissional como desenvolvedor. O ecossistema complexo do Magento 2 ofereceu uma oportunidade desafiadora, mas recompensadora, para aprofundar minha expertise em soluções de comércio eletrônico. Meu papel envolveu adaptar o Magento 2 para atender aos requisitos únicos do nosso negócio de joias de varejo e atacado, aprimorando a experiência do usuário e garantindo a segurança e o desempenho da nossa plataforma online.",
              "Essa experiência não apenas expandiu meu conjunto de habilidades técnicas em PHP e Magento 2, mas também destacou a importância da adaptabilidade e do aprendizado contínuo na indústria de tecnologia. Liderar o desenvolvimento e a customização da nossa plataforma de e-commerce me permitiu ganhar insights valiosos sobre os nuances do comércio digital, desde a gestão de inventário até estratégias de engajamento do cliente.",
              "Ao abraçar os desafios e oportunidades apresentados pelo desenvolvimento Magento 2, consegui impulsionar a inovação dentro do nosso negócio, contribuindo para uma experiência de compra online sem emendas que atende às necessidades em evolução dos nossos clientes. Este capítulo da minha jornada ilustrou o papel crítico da tecnologia na transformação das operações comerciais e no aumento da satisfação do cliente na era digital."
            ]
          },
          "image": "/images/About/magento-2.png",
          extraImages: [ 
            "/images/About/php-8.webp",
          ],
          "align": "left"
        },
        {
          "id": 7,
          "heading": {
            "en": "Wordpress, Roots Sage, Bedrock & DDEV",
            "es": "Wordpress, Roots Sage, Bedrock & DDEV",
            "de": "Wordpress, Roots Sage, Bedrock & DDEV",
            "pt": "Wordpress, Roots Sage, Bedrock & DDEV"
          },
          "description": {
            "en": [
              "Transitioning into the world of Magento 2 development marked a significant pivot in my professional journey as a developer. The complex ecosystem of Magento 2 offered a challenging yet rewarding opportunity to deepen my expertise in e-commerce solutions. My role involved tailoring Magento 2 to meet the unique requirements of our retail and wholesale jewellery business, enhancing user experience, and ensuring the security and performance of our online platform.",
              "This experience not only expanded my technical skillset in PHP and Magento 2 but also underscored the importance of adaptability and continuous learning in the tech industry. Leading the development and customisation of our e-commerce platform allowed me to gain invaluable insights into the nuances of digital commerce, from inventory management to customer engagement strategies.",
              "Embracing the challenges and opportunities presented by Magento 2 development, I was able to drive innovation within our business, contributing to a seamless online shopping experience that meets the evolving needs of our customers. This chapter of my journey illustrated the critical role of technology in transforming business operations and enhancing customer satisfaction in the digital age."
            ],
            "es": [
              "La transición al mundo del desarrollo de Magento 2 marcó un giro significativo en mi trayectoria profesional como desarrollador. El complejo ecosistema de Magento 2 ofreció una oportunidad desafiante pero gratificante para profundizar mi experiencia en soluciones de comercio electrónico. Mi rol implicaba adaptar Magento 2 para satisfacer los requisitos únicos de nuestro negocio de joyería al por menor y mayorista, mejorando la experiencia del usuario y asegurando la seguridad y el rendimiento de nuestra plataforma en línea.",
              "Esta experiencia no solo expandió mi conjunto de habilidades técnicas en PHP y Magento 2, sino que también subrayó la importancia de la adaptabilidad y el aprendizaje continuo en la industria tecnológica. Liderar el desarrollo y personalización de nuestra plataforma de comercio electrónico me permitió obtener conocimientos invaluables sobre los matices del comercio digital, desde la gestión de inventario hasta las estrategias de compromiso con el cliente.",
              "Al abrazar los desafíos y oportunidades presentados por el desarrollo de Magento 2, pude impulsar la innovación dentro de nuestro negocio, contribuyendo a una experiencia de compra en línea sin fisuras que satisface las necesidades en evolución de nuestros clientes. Este capítulo de mi viaje ilustró el papel crítico de la tecnología en la transformación de las operaciones comerciales y el aumento de la satisfacción del cliente en la era digital."
            ],
            "de": [
              "Der Übergang in die Welt der Magento 2-Entwicklung markierte einen signifikanten Wendepunkt in meiner beruflichen Laufbahn als Entwickler. Das komplexe Ökosystem von Magento 2 bot eine herausfordernde, aber lohnende Gelegenheit, meine Expertise in E-Commerce-Lösungen zu vertiefen. Meine Aufgabe war es, Magento 2 an die einzigartigen Anforderungen unseres Einzel- und Großhandelsjuweliergeschäfts anzupassen, die Benutzererfahrung zu verbessern und die Sicherheit und Leistung unserer Online-Plattform zu gewährleisten.",
              "Diese Erfahrung erweiterte nicht nur mein technisches Können in PHP und Magento 2, sondern unterstrich auch die Bedeutung von Anpassungsfähigkeit und kontinuierlichem Lernen in der Technologiebranche. Die Leitung der Entwicklung und Anpassung unserer E-Commerce-Plattform ermöglichte es mir, unschätzbare Einblicke in die Feinheiten des digitalen Handels zu gewinnen, von der Bestandsverwaltung bis zu Strategien zur Kundenbindung.",
              "Durch die Annahme der Herausforderungen und Möglichkeiten, die die Magento 2-Entwicklung bot, konnte ich Innovationen in unserem Geschäft vorantreiben und zu einem nahtlosen Online-Einkaufserlebnis beitragen, das den sich entwickelnden Bedürfnissen unserer Kunden gerecht wird. Dieses Kapitel meiner Reise veranschaulichte die entscheidende Rolle der Technologie bei der Umgestaltung von Geschäftsabläufen und der Steigerung der Kundenzufriedenheit im digitalen Zeitalter."
            ],
            "pt": [
              "A transição para o mundo do desenvolvimento Magento 2 marcou um ponto de virada significativo na minha jornada profissional como desenvolvedor. O ecossistema complexo do Magento 2 ofereceu uma oportunidade desafiadora, mas recompensadora, para aprofundar minha expertise em soluções de comércio eletrônico. Meu papel envolveu adaptar o Magento 2 para atender aos requisitos únicos do nosso negócio de joias de varejo e atacado, aprimorando a experiência do usuário e garantindo a segurança e o desempenho da nossa plataforma online.",
              "Essa experiência não apenas expandiu meu conjunto de habilidades técnicas em PHP e Magento 2, mas também destacou a importância da adaptabilidade e do aprendizado contínuo na indústria de tecnologia. Liderar o desenvolvimento e a customização da nossa plataforma de e-commerce me permitiu ganhar insights valiosos sobre os nuances do comércio digital, desde a gestão de inventário até estratégias de engajamento do cliente.",
              "Ao abraçar os desafios e oportunidades apresentados pelo desenvolvimento Magento 2, consegui impulsionar a inovação dentro do nosso negócio, contribuindo para uma experiência de compra online sem emendas que atende às necessidades em evolução dos nossos clientes. Este capítulo da minha jornada ilustrou o papel crítico da tecnologia na transformação das operações comerciais e no aumento da satisfação do cliente na era digital."
            ]
          },
          "image": "/images/About/bedrock.webp",
          extraImages: [ // Add this new array
         "/images/About/Sage.webp",
         "/images/About/ddev-seo.gif",
       ],
          "align": "right"
        },
      {
        id: 8,
        heading: {
          en: "React & Vue.js",
          es: "React & Vue.js",
          de: "React & Vue.js",
          pt: "React & Vue.js"
        },
        "description": {
          "en": [
            "As a developer, my focus shifted towards the dynamic and component-driven architectures offered by React and Vue.js. Fascinated by the speed and efficiency these frameworks bring to building headless websites and single-page applications, I delved into mastering these technologies. The modular approach of React and Vue.js, emphasizing reusable components, significantly resonated with my aspirations to create more interactive and responsive web experiences.",
            "This transition was driven by a desire to harness the full potential of modern web development practices, particularly in creating headless content management systems (CMS) and single-page applications (SPA) that offer seamless user experiences. My journey into React and Vue.js opened up new avenues for innovation, allowing me to build web applications with unparalleled speed and flexibility.",
            "Embracing React and Vue.js, I appreciated their component-driven development model, which aligns perfectly with the evolving demands of the digital landscape. This shift not only enhanced my technical skillset but also my perspective on building efficient, scalable, and user-centric web solutions."
          ],
          "es": [
            "Como desarrollador, mi enfoque se desplazó hacia las arquitecturas dinámicas e impulsadas por componentes que ofrecen React y Vue.js. Fascinado por la velocidad y eficiencia que estos frameworks aportan a la construcción de sitios web sin cabeza y aplicaciones de una sola página, me sumergí en dominar estas tecnologías. El enfoque modular de React y Vue.js, que enfatiza los componentes reutilizables, resonó significativamente con mis aspiraciones de crear experiencias web más interactivas y responsivas.",
            "Esta transición fue impulsada por el deseo de aprovechar al máximo las prácticas modernas de desarrollo web, especialmente en la creación de sistemas de gestión de contenidos (CMS) sin cabeza y aplicaciones de una sola página (SPA) que ofrecen experiencias de usuario fluidas. Mi viaje hacia React y Vue.js abrió nuevas vías para la innovación, permitiéndome construir aplicaciones web con una velocidad y flexibilidad sin precedentes.",
            "Al adoptar React y Vue.js, aprecié su modelo de desarrollo impulsado por componentes, que se alinea perfectamente con las demandas en evolución del panorama digital. Este cambio no solo mejoró mi conjunto de habilidades técnicas, sino también mi perspectiva sobre la construcción de soluciones web eficientes, escalables y centradas en el usuario."
          ],
          "de": [
            "Als Entwickler verlagerte sich mein Fokus auf die dynamischen und komponentengetriebenen Architekturen, die React und Vue.js bieten. Fasziniert von der Geschwindigkeit und Effizienz, die diese Frameworks für den Bau von kopflosen Websites und Single-Page-Anwendungen bringen, vertiefte ich mich in das Erlernen dieser Technologien. Der modulare Ansatz von React und Vue.js, der wiederverwendbare Komponenten betont, resoniert stark mit meinen Bestrebungen, interaktivere und reaktionsfähigere Web-Erlebnisse zu schaffen.",
            "Diese Übergang wurde durch den Wunsch angetrieben, das volle Potenzial moderner Webentwicklungspraktiken zu nutzen, insbesondere beim Erstellen von kopflosen Content-Management-Systemen (CMS) und Single-Page-Anwendungen (SPA), die nahtlose Benutzererlebnisse bieten. Meine Reise in React und Vue.js eröffnete neue Wege für Innovationen und ermöglichte es mir, Webanwendungen mit unvergleichlicher Geschwindigkeit und Flexibilität zu bauen.",
            "Mit der Annahme von React und Vue.js schätzte ich ihr komponentengetriebenes Entwicklungsmodell, das perfekt mit den sich entwickelnden Anforderungen der digitalen Landschaft übereinstimmt. Diese Verschiebung verbesserte nicht nur mein technisches Fähigkeiten-Set, sondern auch meine Perspektive auf den Bau effizienter, skalierbarer und benutzerzentrierter Web-Lösungen."
          ],
          "pt": [
            "Como desenvolvedor, meu foco mudou para as arquiteturas dinâmicas e orientadas a componentes oferecidas pelo React e Vue.js. Fascinado pela velocidade e eficiência que esses frameworks trazem para a construção de sites headless e aplicações de página única, mergulhei no domínio dessas tecnologias. A abordagem modular do React e Vue.js, enfatizando componentes reutilizáveis, ressoou significativamente com minhas aspirações de criar experiências web mais interativas e responsivas.",
            "Essa transição foi impulsionada pelo desejo de explorar todo o potencial das práticas modernas de desenvolvimento web, particularmente na criação de sistemas de gerenciamento de conteúdo (CMS) headless e aplicações de página única (SPA) que oferecem experiências de usuário contínuas. Minha jornada em React e Vue.js abriu novos caminhos para a inovação, permitindo-me construir aplicações web com uma velocidade e flexibilidade sem precedentes.",
            "Adotando React e Vue.js, apreciei seu modelo de desenvolvimento orientado a componentes, que se alinha perfeitamente com as demandas em evolução da paisagem digital. Esta mudança não apenas aprimorou meu conjunto de habilidades técnicas, mas também minha perspectiva sobre a construção de soluções web eficientes, escaláveis e centradas no usuário."
          ]
        },
        image: '/images/About/react-vue.webp',
         extraImages: [ 
         "/images/About/Tailwind.webp",
         "/images/About/ddev-seo.gif",
      ],
        align: 'left'
      },
      {
        id: 9,
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

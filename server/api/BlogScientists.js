// server/api/aboutDeveloper.js
export default defineEventHandler(() => {
    return {
      projects: [
        {
          id: 1,
          url: "https://pixelcodelab.co.uk",
          imageSrc: "/images/DeveloperProjects/PixelCodeLab.webp",
          altText: {
            en: "PixelCodeLab Ltd",
            es: "PixelCodeLab Ltd",
            de: "PixelCodeLab Ltd",
            pt: "PixelCodeLab Ltd"
          },
          category: {
            en: "Vue.js 3 app",
            es: "Aplicación Vue.js 3",
            de: "Vue.js 3 App",
            pt: "Aplicativo Vue.js 3"
          },
          date: "2023-06-02",
          title: {
            en: "PixelCodeLab Ltd",
            es: "PixelCodeLab Ltd",
            de: "PixelCodeLab Ltd",
            pt: "PixelCodeLab Ltd"
          },
          description: {
            en: "In the dynamic world of technology, I found a space where I could integrate...",
            es: "En el mundo dinámico de la tecnología, encontré un espacio donde podría integrar...",
            de: "In der dynamischen Welt der Technologie habe ich einen Raum gefunden, in dem ich...",
            pt: "No mundo dinâmico da tecnologia, encontrei um espaço onde eu poderia integrar..."
          }
        },
        // Additional projects...
      ]
    };
  });
  
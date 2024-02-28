// server/api/developerProjects.js
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'PixelCodeLab Ltd',
      category: {
        id: 3, // Assuming this is the ID for 'Full Stack Development'
        date: {
          en: 'Launch Date or Year',
          id_ID: 'Tanggal Peluncuran atau Tahun',
        },
        title: {
          en: 'Full Stack Development',
          id_ID: 'Pengembangan Full Stack',
        },
      },
      content: {
        en: "In the dynamic world of technology, I found a space where I could integrate my problem-solving skills, love for creativity, and passion for driving tangible change. It was this exciting confluence that sparked the idea of establishing PixelCodeLab. With PixelCodeLab, my vision was to create a platform that could help bridge this digital gap. I wanted to offer personalised web development services that didn't merely focus on creating aesthetically appealing websites, but also prioritised user experience, functionality, and alignment with business goals.",
        id_ID: "Di dunia teknologi yang dinamis, saya menemukan ruang di mana saya bisa mengintegrasikan keterampilan pemecahan masalah, cinta akan kreativitas, dan hasrat untuk mendorong perubahan nyata. Itulah konfluensi menarik yang memicu ide mendirikan PixelCodeLab. Dengan PixelCodeLab, visi saya adalah untuk menciptakan platform yang dapat membantu menjembatani kesenjangan digital ini. Saya ingin menawarkan layanan pengembangan web yang personalisasi yang tidak hanya berfokus pada pembuatan situs web yang estetis menarik, tetapi juga mengutamakan pengalaman pengguna, fungsionalitas, dan keselarasan dengan tujuan bisnis.",
      },
      desc: {
        en: 'Visit Site',
        id_ID: 'Kunjungi Situs',
      },
      image: '/images/DeveloperProjects/pixelcodelab.webp', // Ensure this path is correct
      url: 'https://www.pixelcodelab.com', // Ensure this URL is correct
    },
    // Add additional developer projects as needed...
  ];
});

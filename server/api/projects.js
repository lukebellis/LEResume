// server/api/projects.js
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return [
    {
      id: 9, // Assuming IDs 1-8 are already used in your previous data
      title: 'Asbestos Identification by Polarised Light Microscopy',
      category: {
        id: 5, // Assuming this ID corresponds to a relevant category, like 'Environmental Chemistry'
        date: {
          en: 'Date of your project',
          id_ID: 'Tanggal proyek Anda',
        },
        title: {
          en: 'Environmental Chemistry',
          id_ID: 'Kimia Lingkungan',
        },
      },
      content: {
        en: `I undertook a unique volunteer opportunity to create an instructional video on asbestos identification via Polarised Light Microscopy. Realising the importance of accessible educational resources, I combined my scientific knowledge and technical skills to produce a comprehensive video guide. The video demystifies the intricate process of asbestos identification, focusing on the utility of Polarised Light Microscopy. I designed the content to be understandable to a broad audience, from science enthusiasts to professionals, making use of clear visuals and straightforward explanations.`,
        id_ID: `Saya mengambil kesempatan sukarelawan yang unik untuk membuat video instruksional tentang identifikasi asbes melalui Mikroskopi Cahaya Terpolarisasi. Menyadari pentingnya sumber daya pendidikan yang dapat diakses, saya menggabungkan pengetahuan ilmiah dan keterampilan teknis saya untuk menghasilkan panduan video yang komprehensif. Video ini menjelaskan proses identifikasi asbes yang rumit, dengan fokus pada utilitas Mikroskopi Cahaya Terpolarisasi. Saya merancang konten agar dapat dimengerti oleh berbagai audiens, dari penggemar sains hingga profesional, dengan menggunakan visual yang jelas dan penjelasan yang mudah dipahami.`,
      },
      desc: {
        en: 'View Project',
        id_ID: 'Lihat Proyek',
      },
      image: '/images/asbestos.webp',
      url: 'Your video URL or any related link',
    },
    {
      id: 10, // Next sequential ID
      title: 'Neonicotinoids & Bees',
      category: {
        id: 8, // Assuming this ID corresponds to 'Environmental Chemistry' or similar
        date: {
          en: 'Date of your article',
          id_ID: 'Tanggal artikel Anda',
        },
        title: {
          en: 'Environmental Chemistry',
          id_ID: 'Kimia Lingkungan',
        },
      },
      content: {
        en: `Recognising the crucial role that bees play in pollinating three-quarters of the world's crops, I used my position at the Environment Agency to raise awareness about the severe effects of neonicotinoids - a class of pesticides harmful to these vital insects. In 2018, I penned an article shedding light on the use of Imidacloprid, a widely-used insecticide known to act as a neurotoxin on insects, paralysing and eventually leading to their death. The piece aimed to educate the public about this issue and call for the permanent ban of such pesticides, contributing to the current Europe-wide temporary ban. The article was well-received, eliciting positive feedback from influential figures including my local MP, Rachel Reeves, who expressed her support for a science-led approach to pesticide use. She also backed the further research into identifying suitable substitutes to neonicotinoids and the integration of pest management measures that would benefit farming communities without posing risks to the environment.`,
        id_ID: `Mengakui peran penting yang dimainkan oleh lebah dalam penyerbukan tiga perempat tanaman dunia, saya menggunakan posisi saya di Badan Lingkungan untuk meningkatkan kesadaran tentang efek buruk neonicotinoid - kelas pestisida yang berbahaya bagi serangga vital ini. Pada tahun 2018, saya menulis artikel yang mengungkapkan penggunaan Imidacloprid, insektisida yang banyak digunakan yang dikenal sebagai neurotoksin pada serangga, yang menyebabkan paralisis dan akhirnya kematian. Artikel ini bertujuan untuk mendidik publik tentang masalah ini dan meminta larangan permanen pestisida tersebut, berkontribusi pada larangan sementara di seluruh Eropa saat ini. Artikel tersebut diterima dengan baik, mendapat umpan balik positif dari tokoh-tokoh berpengaruh termasuk MP lokal saya, Rachel Reeves, yang menyatakan dukungannya untuk pendekatan berbasis ilmu pengetahuan dalam penggunaan pestisida. Dia juga mendukung penelitian lebih lanjut untuk mengidentifikasi pengganti neonicotinoid dan integrasi langkah-langkah manajemen hama yang akan memberi manfaat bagi komunitas pertanian tanpa menimbulkan risiko bagi lingkungan.`,
      },
      desc: {
        en: 'View Project',
        id_ID: 'Lihat Proyek',
      },
      image: '/images/bees.webp',
      url: 'Your article link or any related link',
    },
    {
      id: 11, // Assign a new unique ID
      title: 'PixelCodeLab Ltd',
      category: {
        id: 3, // Full Stack Development category ID
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
        en: `In the dynamic world of technology, I found a space where I could integrate my problem-solving skills, love for creativity, and passion for driving tangible change. It was this exciting confluence that sparked the idea of establishing PixelCodeLab. With PixelCodeLab, my vision was to create a platform that could help bridge this digital gap. I wanted to offer personalised web development services that didn't merely focus on creating aesthetically appealing websites, but also prioritised user experience, functionality, and alignment with business goals.`,
        id_ID: `Di dunia teknologi yang dinamis, saya menemukan ruang di mana saya bisa mengintegrasikan keterampilan pemecahan masalah, cinta akan kreativitas, dan hasrat untuk mendorong perubahan nyata. Itulah konfluensi menarik yang memicu ide mendirikan PixelCodeLab. Dengan PixelCodeLab, visi saya adalah untuk menciptakan platform yang dapat membantu menjembatani kesenjangan digital ini. Saya ingin menawarkan layanan pengembangan web yang personalisasi yang tidak hanya berfokus pada pembuatan situs web yang estetis menarik, tetapi juga mengutamakan pengalaman pengguna, fungsionalitas, dan keselarasan dengan tujuan bisnis.`,
      },
      desc: {
        en: 'Visit Site',
        id_ID: 'Kunjungi Situs',
      },
      image: '/images/DeveloperProjects/pixelcodelab.webp', // Update this path with your actual image path
      url: 'https://www.pixelcodelab.com', // Update with the actual URL to PixelCodeLab
    },
  ];
});

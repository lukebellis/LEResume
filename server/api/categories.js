import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    // Web Development Categories
    {
      id: 1,
      title: {
        en: 'Frontend Development',
        id_ID: 'Pengembangan Frontend',
      },
    },
    {
      id: 2,
      title: {
        en: 'Backend Development',
        id_ID: 'Pengembangan Backend',
      },
    },
    {
      id: 3,
      title: {
        en: 'Full Stack Development',
        id_ID: 'Pengembangan Full Stack',
      },
    },
    {
      id: 4,
      title: {
        en: 'Web Design',
        id_ID: 'Desain Web',
      },
    },
    // Chemistry Categories
    {
      id: 5,
      title: {
        en: 'Organic Chemistry',
        id_ID: 'Kimia Organik',
      },
    },
    {
      id: 6,
      title: {
        en: 'Analytical Chemistry',
        id_ID: 'Kimia Analitik',
      },
    },
    {
      id: 7,
      title: {
        en: 'Physical Chemistry',
        id_ID: 'Kimia Fisik',
      },
    },
    {
      id: 8,
      title: {
        en: 'Environmental Chemistry',
        id_ID: 'Kimia Lingkungan',
      },
    }
  ]
})

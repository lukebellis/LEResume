import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
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
    }
  ]
})

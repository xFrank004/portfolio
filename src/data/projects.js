export const projects = [
  {
    id: 'tamgo',
    name: 'Tamgo Truck',
    kind: 'Plataforma B2B · Full stack',
    summary:
      'Plataforma de logística que conecta dadores de carga con transportistas en Argentina. Las empresas publican cargas, reciben ofertas y siguen cada viaje, con liquidaciones y pagos con ECHEQ.',
    highlights: [
      'SPA en React + Vite + Tailwind conectada a una API real',
      'Backend en FastAPI con autenticación JWT por tipo de empresa',
      'Base PostgreSQL de 14 tablas desplegada en la nube',
    ],
    tags: ['React', 'Tailwind', 'FastAPI', 'PostgreSQL'],
    links: [
      { label: 'Frontend', href: 'https://github.com/xFrank004/tamgo-frontend' },
      { label: 'Backend', href: 'https://github.com/xFrank004/tamgo-backend' },
    ],
  },
  {
    id: 'prompter',
    name: 'Prompter',
    kind: 'Herramienta web · IA',
    summary:
      'Web minimalista para armar prompts profesionales en segundos. Elegís tono, contexto y formato, generás el resultado con IA y lo copiás con un clic.',
    highlights: [
      'Interfaz enfocada en una sola tarea, sin distracciones',
      'Personalización de tono, contexto y formato',
      'Copiado rápido del resultado',
    ],
    tags: ['JavaScript', 'IA', 'UI'],
    links: [{ label: 'Código', href: 'https://github.com/xFrank004/Prompter' }],
  },
  {
    id: 'appgym',
    name: 'AppGym',
    kind: 'App web · Seguimiento',
    summary:
      'App para seguir rutinas de gimnasio divididas en semanas y días, con registro de peso, temporizador y frases motivacionales.',
    highlights: [
      'Rutinas organizadas por semana y día',
      'Registro de peso y temporizador integrado',
      'Hecha en JavaScript, HTML y CSS sin frameworks',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    links: [{ label: 'Código', href: 'https://github.com/xFrank004/AppGym' }],
  },
]

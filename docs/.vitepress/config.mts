import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frontend conventions',
  description: 'Coding conventions for the frontend team.',
  lang: 'en-US',
  // Project pages are served at /<repo>/. Local dev stays at /.
  base: process.env.GITHUB_ACTIONS ? '/Frontend-Best-Practices/' : '/',
  cleanUrls: true,
  themeConfig: {
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    sidebar: [
      {
        text: 'Conventions',
        items: [
          { text: 'Principles', link: '/' },
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css' },
          { text: 'Sass', link: '/sass' },
          { text: 'Tailwind', link: '/tailwind' },
          { text: 'JavaScript and TypeScript', link: '/javascript' },
          { text: 'Testing', link: '/testing' },
          { text: 'Git', link: '/git' },
          { text: 'Tooling', link: '/tooling' }
        ]
      }
    ]
  }
})

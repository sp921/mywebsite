import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Documentation",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
        ]
      }
    ]
  }
}) 
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Documentation",
  description: "A VitePress Site",
  base: '/mywebsite/',
  lang: 'zh-CN',
  appearance: true,
  lastUpdated: true,
  
  themeConfig: {
    siteTitle: 'My Website',
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sp921/mywebsite' }
    ],

    footer: {
      message: '使用 VitePress 构建',
      copyright: 'Copyright © 2024'
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: '/mywebsite/custom.css' }]
  ]
}) 
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Documentation",
  description: "A VitePress Site with audio player and modern design",
  lang: 'zh-CN',
  appearance: true,
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'vitepress, documentation, audio player' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  cleanUrls: true,
  ignoreDeadLinks: true,
  
  themeConfig: {
    siteTitle: 'My Website',
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/markdown-examples' },
            { text: 'API 示例', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sp921/mywebsite' }
    ],

    footer: {
      message: '使用 VitePress 构建',
      copyright: 'Copyright © ' + new Date().getFullYear()
    },

    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  },

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
}) 
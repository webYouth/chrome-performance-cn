import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
	base: '/webYouth/',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'webYouth的文档',
			description: '这是我的私人文档，包括学习文件和一些个人生活笔记',
		},
		'/en/': {
			lang: 'zh-CN',
			title: 'webYouth`s docs',
			description: 'This is my personal docs, including study files and some personal life notes',
		}
	},
	theme: defaultTheme({
		logo: '/images/lovely.jpeg',
		sidebar: [
			{
				text: '我的笔记',
				link: '/note/',
				collapsible: true,
				children: [
					{
						text: '事件循环深度理解',
						link: '/note/navigation.md'
					}
				]
			},
			{
				text: '我的翻译',
				link: '/translation/',
				collapsible: true,
				children: [
					{
						text: '性能优化',
						link: '/translation/performance.md'
					}
				]
			}
		],
		repo: 'https://github.com/webYouth/chrome-performance-cn',
		navbar: [
			{
				text: '我的笔记',
				link: '/note/README.md',
				activeMatch: '^/note/'
			},
			{
				text: '我的翻译',
				link: '/translation/README.md',
				activeMatch: '^/translation/',
			}
		],
		locales: {
			'/': {
				selectLanguageName: '简体中文',
			},
			'/en/': {
				selectLanguageName: 'English',
			},
		},
	}),
})
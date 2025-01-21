import { locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  const sitemapEntries = []

  // 为每个语言版本添加基础页面
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    const posts = dict.blog.posts

    // 添加主页
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })


    dict.nav.menu.forEach((item) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${item.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    });
    

    // 添加固定页面
    /*const staticPages = ['blog']
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }*/

    // 添加博客文章页面
    /*for (const post of posts) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }*/
  }

  return sitemapEntries
}

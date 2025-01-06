import type { Locale } from "@/i18n/config"

export function getBreadcrumbItems(pathname: string, dict: any) {
  const paths = pathname.split('/').filter(Boolean)
  const items = []
  
  // 移除语言部分
  const lang = paths.shift() as Locale
  
  for (const path of paths) {
    switch(path) {
      case 'blog':
        // 只有当不是最后一个路径时才添加链接
        if (paths.length > 1) {
          items.push({
            label: dict.nav.blog,
            href: `/${lang}/blog`
          })
        } else {
          items.push({
            label: dict.nav.blog
          })
        }
        break
      case 'pricing':
        items.push({
          label: dict.nav.pricing,
          href: `/${lang}/pricing`
        })
        break
      case 'profile':
        items.push({
          label: dict.nav.profile,
          href: `/${lang}/profile`
        })
        break
      case 'signin':
        items.push({
          label: dict.nav.signin,
          href: `/${lang}/signin`
        })
        break
      case 'signup':
        items.push({
          label: dict.auth.signup.title,
          href: `/${lang}/signup`
        })
        break
      default:
        // 处理博客文章等动态路由
        if (paths[paths.length - 2] === 'blog') {
          const post = dict.blog.posts.find((p: any) => p.slug === path)
          items.push({
            label: post ? post.title : path
          })
        }
    }
  }
  
  return items
}

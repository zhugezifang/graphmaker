import Link from "next/link"
import { ThumbsUp } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import { locales, localeNames, type Locale } from '@/i18n/config'


export default async function Footer({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const footerLinks = {
    [dict.footer.product]: [
      
    ],
    [dict.footer.social]: [
      { name: dict.footer.links.twitter, href: `` },
      { name: dict.footer.links.github, href: `` },
      { name: dict.footer.links.jike, href: `` },
      { name: dict.footer.links.xhs, href: `` },
    ],
    [dict.footer.support]: [
    ],
    [dict.footer.company]: [
      { name: dict.footer.links.terms, href: `/en/terms` },
      { name: dict.footer.links.privacy, href: `/en/privacy` },
    ],
  }

  return (
    <footer className="relative w-full bg-white backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <span className="text-base font-semibold">{category}</span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(category === dict.footer.product || category === dict.footer.social
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        
        <div className="flex space-x-4 flex-wrap justify-center items-center t-12 mt-8 pt-6 border-t">
          {locales.map((locale) => (
            <span>
            <a href={`/${locale}`}>{localeNames[locale]}</a>
            </span>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{dict.common.brand}</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-center md:text-left text-sm text-muted-foreground">
            <p>{dict.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
//import { Chrome } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { NavbarActions } from "./navbar-actions"
import { MobileNav } from "./mobile-nav"

export default async function Navbar({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <header className="sticky bg-white top-0 z-50 w-full glass">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold">{dict.common.brand}</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <div className="hidden items-center space-x-4 md:flex">
            {dict.nav.menu.map((menu) => (
              <Link href={`/${lang}/${menu.href}`} className="text-base font-medium transition-colors hover:text-primary">
              {menu.name}
              </Link>
            ))}
              
              {/*
              <Link href={`/${lang}/blog`} className="text-base font-medium transition-colors hover:text-primary">
                {dict.nav.blog}
              </Link>
              
              <Link href={`/${lang}/pricing`} className="text-sm font-medium transition-colors hover:text-primary">
                {dict.nav.pricing}
              </Link>
              */}
            </div>
          </div>
          {/*<NavbarActions lang={lang} dict={dict} />*/}
          <NavbarActions />
          <MobileNav lang={lang} dict={dict} />
        </nav>
      </div>
    </header>
  )
}

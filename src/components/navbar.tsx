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

            <div className="relative group">
              <button className="flex items-center text-base font-medium transition-colors hover:text-primary">
                {dict.nav.title0}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                <ul className="py-2 text-sm text-gray-700">
                  {dict.nav.menu.map((menu) => (
                    <li>
                    <Link href={`/${lang}/${menu.href}`} className="block px-4 py-2 hover:bg-gray-100">{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              
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

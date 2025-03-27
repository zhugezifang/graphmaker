import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

interface MobileNavProps {
  lang: Locale
  dict: any
}

export function MobileNav({ lang, dict }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">切换菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[240px] sm:w-[300px] glass border-0 bg-background/40 backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/5 to-transparent pointer-events-none" />
        <nav className="relative flex flex-col space-y-4 mt-8">

            <div className="relative group">
              <button className="flex items-center text-base font-medium transition-colors hover:text-primary">
                {dict.nav.title0}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                <ul className="py-2 text-sm text-gray-700">
                  {dict.nav.menu.map((menu: { href: string; name: string }) => (
                    <li>
                    <Link href={`/${lang}/${menu.href}`} className="text-base font-medium transition-colors hover:text-primary">{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-base font-medium transition-colors hover:text-primary">
                {dict.nav.title1}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                <ul className="py-2 text-sm text-gray-700">
                  {dict.nav.menu1.map((menu: { href: string; name: string }) => (
                    <li>
                    <Link href={`/${lang}/${menu.href}`} className="text-base font-medium transition-colors hover:text-primary">{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          
            
          {/*
          <Link 
              href={`/en/multiple-line-graph-maker`} 
              className="text-base font-medium transition-colors hover:text-primary"
            >
            {dict.nav.menu1}
          </Link>
          
          <Link 
            href={`/${lang}/blog`} 
            className="text-base font-medium transition-colors hover:text-primary"
          >
            {dict.nav.blog}
          </Link>
          
          <Link 
            href={`/${lang}/pricing`} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {dict.nav.pricing}
          </Link>
          */}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

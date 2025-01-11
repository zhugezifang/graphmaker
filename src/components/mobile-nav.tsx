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
            {dict.nav.menu.map((menu: { href: string; name: string }) => (
              <Link href={`/${lang}/${menu.href}`}  className="text-base font-medium transition-colors hover:text-primary"
              >
              {menu.name}
              </Link>
            ))}
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

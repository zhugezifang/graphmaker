"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (locale: Locale) => {
    //const newPathname = pathname.replace(/^\/[^\/]+/, `/${locale}`)
    const newPathname =  `/${locale}`;
    const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
    router.push(url+newPathname);
  }

  const currentLocale = pathname.split('/')[1] as Locale

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-transparent"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">切换语言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`
              flex items-center justify-center cursor-pointer
              transition-colors duration-200
              ${currentLocale === locale ? 'bg-muted' : 'hover:bg-muted/50'}
              ${currentLocale === locale ? 'text-primary font-medium' : ''}
            `}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

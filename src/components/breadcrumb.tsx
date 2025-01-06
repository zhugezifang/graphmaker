import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { Locale } from "@/i18n/config"

interface BreadcrumbProps {
  lang: Locale
  items: {
    label: string
    href?: string
  }[]
}

export function Breadcrumb({ lang, items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link 
        href={`/${lang}`}
        className="flex items-center hover:text-foreground"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link 
              href={item.href}
              className="ml-1 hover:text-foreground"
            >
              {item.label}
            </Link>
          ) : (
            <span className="ml-1">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
} 
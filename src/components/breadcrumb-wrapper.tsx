"use client"

import { usePathname } from 'next/navigation'
import { Breadcrumb } from "./breadcrumb"
import { getBreadcrumbItems } from "@/lib/get-breadcrumb-items"
import type { Locale } from "@/i18n/config"

interface BreadcrumbWrapperProps {
  lang: Locale
  dict: any
}

export function BreadcrumbWrapper({ lang, dict }: BreadcrumbWrapperProps) {
  const pathname = usePathname()
  
  if (pathname === `/${lang}`) {
    return null
  }

  if (pathname === `/${lang}/multiple-line-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/smooth-line-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/double-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/multi-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/triple-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/quadruple-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/stacked-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/segmented-bar-graph-maker`) {
    return null
  }

  if (pathname === `/${lang}/histogram-maker`) {
    return null
  }

  if (pathname === `/en/terms`) {
    return null
  }

  if (pathname === `/en/privacy`) {
    return null
  }

  const items = getBreadcrumbItems(pathname, dict)

  return (
    <div className="container py-4 md:py-6">
      <Breadcrumb 
        lang={lang}
        items={items}
      />
    </div>
  )
}

"use client"

//import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

export function NavbarActions() {

  return (
    <div className="flex items-center space-x-2">
      <LanguageSwitcher />
    </div>
  )
}

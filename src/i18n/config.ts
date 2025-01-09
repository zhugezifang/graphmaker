export const defaultLocale = 'en'
export const locales = ['zh', 'en'] as const
export type Locale = typeof locales[number]

export const localeNames: Record<Locale, string> = {
  'zh': '简体中文',
  'en': 'English'
} 
import type { Locale } from './config'

const dictionaries = {
  'en': () => import('./dictionaries/en.json').then(module => module.default),
  'zh': () => import('./dictionaries/zh.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

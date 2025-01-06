import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function Hero({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.home.hero.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.home.hero.description}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">{dict.home.hero.learnMore}</Button>
            <Button size="lg" variant="outline">{dict.home.hero.watchDemo}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { 
  BookOpen, 
  Bookmark, 
  Share2, 
  Shield 
} from "lucide-react"

export default async function Features({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: dict.features.tabs.title,
      description: dict.features.tabs.description
    },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: dict.features.bookmarks.title,
      description: dict.features.bookmarks.description
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: dict.features.share.title,
      description: dict.features.share.description
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: dict.features.security.title,
      description: dict.features.security.description
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.features.title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.features.description}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

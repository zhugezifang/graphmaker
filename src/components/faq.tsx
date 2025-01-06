import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function FAQ({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.faq.title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.faq.description}
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 gap-2">
              <TabsTrigger 
                value="general" 
                className="tab-highlight tab-active-glow flex items-center gap-2"
              >
                {dict.faq.tabs.general}
              </TabsTrigger>
              <TabsTrigger 
                value="features" 
                className="tab-highlight tab-active-glow flex items-center gap-2"
              >
                {dict.faq.tabs.features}
              </TabsTrigger>
              <TabsTrigger 
                value="technical" 
                className="tab-highlight tab-active-glow flex items-center gap-2"
              >
                {dict.faq.tabs.technical}
              </TabsTrigger>
            </TabsList>
            {Object.entries(dict.faq.questions).map(([category, questions]) => (
              <TabsContent key={category} value={category}>
                <Accordion type="single" collapsible className="w-full">
                  {questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-500">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

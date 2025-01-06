//import { Button } from "@/components/ui/button"
//import { Chrome } from "lucide-react"
//import Features from "@/components/features"
//import Hero from "@/components/hero"
//import FAQ from "@/components/faq"

import {ImageSplitter} from "@/components/imageSplitter"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import { getPost } from "@/lib/getPost";

export const runtime = 'edge'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const indexLanguageText = dict.indexLanguageText;
  const questionText =dict.indexQuestion;
  const indexFeatureText = dict.featureInfos;
  const indexTestimonialText=dict.testimonialInfos;
  const playInfo = dict.playInfos;
  const post = await getPost('signature-generator-home', lang) as unknown as { 
    title: string; 
    date: string; 
    author: string; 
    readTime: string; 
    contentHtml: string; 
    url: string;
  }

  return (
    <main className="bg-gray-100 flex flex-col items-center w-full">

      <div className="container mx-auto px-6 md:px-12 my-12 text-center">
          <span className="text-4xl font-bold text-gray-800 mb-4">{indexLanguageText.h1Text}</span>
      </div>

      <ImageSplitter rowText={indexLanguageText.RowText} colText={indexLanguageText.ColText} imgBtn={indexLanguageText.btn1} downBtn={indexLanguageText.btn2}/>

      <section className="bg-white my-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <article className="prose prose-gray dark:prose-invert mx-auto">
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </section>

      <section className="py-8 md:py-8 lg:py-8">
        <div className="bg-white py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="container mx-auto px-6 md:px-12 my-12 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{playInfo.h2_0}</h2>
              <p className="text-gray-600 mb-18">{playInfo.h2_desc}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-8 md:space-y-0">
            <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-2">{playInfo.h2_1}</p>
                <p className="text-gray-500">{playInfo.h2_1_p1}</p></div>
            </div>
            <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-2">{playInfo.h2_2}</p>
                <p className="text-gray-500">{playInfo.h2_2_p1}</p></div>
            </div>
            <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-2">{playInfo.h2_3}</p>
                <p className="text-gray-500">{playInfo.h2_3_p1}</p></div>
            </div>
          </div>
        </div>  
      </section>          

      <section className="py-8 md:py-8 lg:py-8">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">{indexFeatureText.h2_0}</h2>
                </div>

                <div className="px-5 py-6 mt-8 bg-white lg:mt-12 lg:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_1}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_1_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_2}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_2_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_3}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_3_p1}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
      </section>

      <section id="testimonials" className="py-8 bg-indigo-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{indexTestimonialText.h2_0}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_1_p1}                      
                    </p>
                    <p className="text-gray-800 font-semibold">John Miller, Business Executive</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-gray-300">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_2_p1}                              </p>
                    <p className="text-gray-800 font-semibold">Emily Carter, Freelance Writer</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_3_p1}                            </p>
                    <p className="text-gray-800 font-semibold">David Thompson, College Student</p></div>
                </div>
              </div>
      </section>


      <div id="faq">
              <section>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
                  <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
                    <h2 className="text-4xl lg:text-4xl font-bold text-black">{questionText.h2_0}</h2>
                  </div>
                  <div className="mt-10 flex w-full flex-col">
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_1}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_1_p1}</p>
                        <p className="font-inter text-base font-light mt-4 text-gray-500 text-justify">{questionText.h2_1_p2}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_2}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_2_p1}</p>
                        <p className="font-inter text-base font-light mt-4 text-gray-500 text-justify">{questionText.h2_2_p2}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_3}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_3_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_4}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_4_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_5}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_5_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_6}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_6_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                  </div>
                </div>
              </section>
      </div>

      
    </main>
  )
}

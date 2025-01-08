import {LineGraph} from "@/components/LineGraph"
import type { Locale } from '@/i18n/config'
import { getPost } from "@/lib/getPost";

export const runtime = 'edge'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  /*const post = await getPost('line-graph-maker', lang) as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }*/

  return (
    <>
    <main className="bg-gray-100 flex flex-col items-center w-full">

      {/*
      <div className="container mx-auto px-6 md:px-12 my-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      </div>
      */}

      
    </main>

    <LineGraph />
    {/*
    <section className="bg-white py-2 my-10 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
      <article className="prose prose-gray dark:prose-invert mx-auto">
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </section>
    */}
    </>
  )
}

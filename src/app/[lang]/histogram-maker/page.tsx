import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { getPost } from "@/lib/getPost";

export const runtime = 'edge'

export default async function HandPage({ params: { lang } }: { params: { lang: Locale } }) {
  //const dict = await getDictionary(lang)
  const post = await getPost('histogram-maker', lang) as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }

  return (
    <>
    <main className="bg-gray-100 flex flex-col items-center w-full">
      
      <div className="container mx-auto px-6 md:px-12 my-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      </div>
      {/**/}
      
    </main>

    <iframe src="/html/Histogram-Maker.html" allow="autoplay"  style={{ top: '0px', left: '0px',width: '100%', height: '1250px'}}></iframe>
    
    <section className="bg-white py-2 my-10 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
      <article className="prose prose-gray dark:prose-invert mx-auto">
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </section>
    {/**/}
    </>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const post = await getPost('histogram-maker', lang) as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `${url}/${lang}/histogram-maker`,
      languages: {
        'en': `${url}/en/histogram-maker`,
        'zh': `${url}/zh/histogram-maker`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      url: `${url}/${lang}/histogram-maker`,
    }
  }
}

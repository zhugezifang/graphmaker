import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { getPost } from "@/lib/getPost";
import { ScrollToTop } from "@/components/scroll-to-top";

export const runtime = 'edge'

export default async function HandPage({ params: { lang } }: { params: { lang: Locale } }) {
  //const dict = await getDictionary(lang)
  const post = await getPost('privacy', 'en') as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }

  return (
    <>
    <main className="container">

      <article className="prose prose-gray dark:prose-invert mx-auto">
        <h1 className="mb-4 text-center text-3xl font-bold">{post.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <ScrollToTop />
    </main>
    {/**/}
    </>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const post = await getPost('privacy', 'en') as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `${url}/${lang}/privacy`,
      languages: {
        'en': `${url}/en/privacy`,
        'zh': `${url}/zh/privacy`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      url: `${url}/${lang}/privacy`,
    }
  }
}

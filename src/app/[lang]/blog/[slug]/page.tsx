import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPost } from "@/lib/getPost"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { ScrollToTop } from "@/components/scroll-to-top"
//import {Game} from  "@/components/game"

export const runtime = 'edge'

export default async function BlogPost({ params }: { params: { slug: string, lang: Locale } }) {
  const dict = await getDictionary(params.lang)
  const post = await getPost(params.slug, params.lang) as unknown as { 
    title: string; 
    date: string; 
    author: string; 
    readTime: string; 
    contentHtml: string; 
    url: string;
  }

  return (
    <main className="container">

      <article className="prose prose-gray dark:prose-invert mx-auto">
        <h1 className="mb-4 text-center text-3xl font-bold">{post.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      
      <Link href={`/${params.lang}/blog`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {dict.blog.backToList}
        </Button>
      </Link>
      <ScrollToTop />
    </main>
  )
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string, lang: Locale } 
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const post = await getPost(params.slug, params.lang) as unknown as { 
    title: string
    description?: string
    author: string
    date: string
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: post.title,
    description: post.description || dict.blog.description,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: params.lang,
      url: `${url}/${params.lang}/blog/${params.slug}`,
      title: post.title,
      description: post.description || dict.blog.description,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || dict.blog.description,
    },
    alternates: {
      canonical: `${url}/${params.lang}/game/${params.slug}`,
      languages: {
        'en': `${url}/en/game/${params.slug}`,
        'zh': `${url}/zh/game/${params.slug}`,
      },
    },
  }
}

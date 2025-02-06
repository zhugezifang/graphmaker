import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { getPost } from "@/lib/getPost";
import {BarGraph} from "@/components/BarGraph"

import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";


export const runtime = 'edge'

export default async function HandPage({ params: { lang } }: { params: { lang: Locale } }) {
  //const dict = await getDictionary(lang)

  const dict = await getDictionary(lang);
  // Bug 修复：显式声明 result 数组的类型
  const result: { name:string, href: string }[] = [];
  dict.nav.menu.forEach((menu) => {
    if (menu.href === 'bar-graph-maker') {
      return;
    } else {
      result.push(menu);
    }
  });

  // 从result里面随机取三个
  const randomThree = new Set();
  while (randomThree.size < 3) {
    const randomIndex = Math.floor(Math.random() * result.length);
    randomThree.add(result[randomIndex]);
  }

  // 将 Set 转换为数组
  const randomThreeArray:any = Array.from(randomThree);

  const post = await getPost('bar-graph-maker', lang) as unknown as { 
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

    <BarGraph />
    
    <section className="bg-white py-2 my-10 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
      <article className="prose prose-gray dark:prose-invert mx-auto">
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </section>

    <div className="bg-white py-2 my-6 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">

        <div className="container mx-auto px-6 md:px-12 my-6 text-center">
              <span className="text-4xl font-bold text-gray-800 mb-4">{dict.nav.more}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 overflow-x-auto">

            {randomThreeArray.map((menu: { name: string, href: string }) => (
              <Link href={`/${lang}/${menu.href}`} className="text-base font-medium transition-colors hover:text-primary">
                <div className="p-2 text-center">
                  <p className="text-gray-600">{menu.name}</p>
                </div>
              </Link>
            ))} 

        </div>

    </div>

    {/**/}
    </>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const post = await getPost('bar-graph-maker', lang) as unknown as { 
    title: string; 
    desc: string;
    contentHtml: string; 
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `${url}/${lang}/bar-graph-maker`,
      languages: {
        'en': `${url}/en/bar-graph-maker`,
        'zh': `${url}/zh/bar-graph-maker`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      url: `${url}/${lang}/bar-graph-maker`,
    }
  }
}

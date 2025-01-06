// src/lib/getPost.ts
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPost(slug: string, lang: string) {
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
  const response = await fetch(`${url}/posts/${slug}.${lang}.md`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post from /posts/${slug}.${lang}.md`);
  }

  const fileContents = await response.text();
  //console.log(fileContents)
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

/*
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export async function getPost(slug: string, lang: string) {
  const fullPath = path.join(postsDirectory, `${slug}.${lang}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}
*/
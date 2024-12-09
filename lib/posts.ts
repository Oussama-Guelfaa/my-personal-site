import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { slug, data, content }
  }).sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)
  return {
    frontMatter: data,
    mdxSource
  }
}

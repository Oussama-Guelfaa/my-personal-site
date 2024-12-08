import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

interface PostProps {
  frontMatter: {
    title: string;
    date: string;
  }
  mdxSource: MDXRemoteSerializeResult
}

export default function Post({ frontMatter, mdxSource }: PostProps) {
  return (
    <Layout>
      <SEO title={`${frontMatter.title} - My Personal Website`} description={frontMatter.title} />
      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <div className="text-textColor-secondary mb-6">{frontMatter.date}</div>
      <article className="prose max-w-none">
        <MDXRemote {...mdxSource} components={{ Image }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { frontMatter, mdxSource } = await getPostBySlug(params.slug)
  return {
    props: {
      frontMatter,
      mdxSource
    }
  }
}

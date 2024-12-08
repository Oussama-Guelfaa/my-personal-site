import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import BlogCard from '../../components/BlogCard'
import { getAllPosts } from '../../lib/posts'

interface BlogIndexProps {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
  }[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout>
      <SEO title="Blog - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} date={post.date} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts().map(post => ({
    slug: post.slug,
    title: post.data.title,
    excerpt: post.data.excerpt,
    date: post.data.date
  }))
  return {
    props: {
      posts
    }
  }
}

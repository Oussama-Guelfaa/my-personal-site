import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import { getAllPosts } from '../lib/posts'

interface HomeProps {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
  }[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <SEO title="Home - My Personal Website" />
      <Hero />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard 
            title="Project One" 
            description="A project about something amazing" 
            image="/images/project1.jpg"
            link="https://example.com"
          />
          <ProjectCard 
            title="Project Two"
            description="Another incredible endeavor"
            image="/images/project1.jpg"
            link="https://example.com"
          />
          <ProjectCard 
            title="Project Three"
            description="A creative project that I loved working on"
            image="/images/project1.jpg"
            link="https://example.com"
          />
        </div>
        <div className="mt-4">
          <Link href="/projects" className="text-brand hover:underline">See all projects →</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map(post => (
            <BlogCard key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} date={post.date} />
          ))}
        </div>
        <div className="mt-4">
          <Link href="/blog" className="text-brand hover:underline">Read all posts →</Link>
        </div>
      </section>
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

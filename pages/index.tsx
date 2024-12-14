import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import { motion } from 'framer-motion'
import { getAllPosts } from '../lib/posts'
import { formatDate } from '../lib/utils'

interface HomeProps {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
  }[]
}

const projects = [
  {
    title: "Project One",
    description: "A project about something amazing",
    image: "/images/project1.jpg",
    link: "https://example.com"
  },
  {
    title: "Project Two",
    description: "Another incredible endeavor",
    image: "/images/project2.jpg",
    link: "https://example.com"
  },
  {
    title: "Project Three",
    description: "A creative project that I loved working on",
    image: "/images/project3.jpg",
    link: "https://example.com"
  }
];

// Duration of one cycle of the animation and distance to move
const SCROLL_SPEED = 20; // adjust for taste (seconds)
const CARD_WIDTH = 300; // approx width of one card including margins, adjust as needed
// If we have 3 projects, total width ~ 3 * CARD_WIDTH = 900 (approx)
// We double them (6 total) ~ 1800. We'll animate x from 0 to -900 so that when first half goes off screen, second half is visible.

export default function Home({ posts }: HomeProps) {

  const totalWidth = projects.length * CARD_WIDTH; // approximate total width of one set
  // We'll animate from 0 to -totalWidth so the first half goes off screen and the second half (duplicated projects) appears.
  
  return (
    <Layout>
      <SEO title="Home - My Personal Website" />
      <div>
        <Hero />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-text.primary">Featured Projects</h2>
          <div className="overflow-hidden relative w-full">
            {/* This outer div hides overflow. Inside we have a motion track. */}
            <motion.div
              className="flex gap-6"
              style={{ width: totalWidth * 2 }} // twice as wide to allow seamless loop
              animate={{
                x: [0, -totalWidth] // animate from 0 to -totalWidth
              }}
              transition={{
                duration: SCROLL_SPEED,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {/* Render projects twice for seamless loop */}
              {projects.map((proj, i) => (
                <div key={i} style={{ width: CARD_WIDTH }}>
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    link={proj.link}
                  />
                </div>
              ))}
              {projects.map((proj, i) => (
                <div key={i + projects.length} style={{ width: CARD_WIDTH }}>
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    link={proj.link}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="mt-4">
            <Link href="/projects" className="text-brand transition-colors hover:text-brand-light">
              See all projects →
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-text.primary">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={formatDate(post.date)}
              />
            ))}
          </div>
          <div className="mt-4">
            <Link href="/blog" className="text-brand transition-colors hover:text-brand-light">
              Read all posts →
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts().map(post => ({
    slug: post.slug,
    title: post.data.title,
    excerpt: post.data.excerpt,
    date: formatDate(post.data.date)
  }))
  return {
    props: {
      posts
    }
  }
}

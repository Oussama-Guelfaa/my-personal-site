import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Add your actual projects here */}
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
    </Layout>
  )
}

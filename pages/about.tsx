import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <SEO title="About - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image src="/images/profile.jpg" alt="Profile" width={300} height={300} className="rounded-full" />
        <div>
          <p className="text-lg text-textColor-secondary mb-4">
            Hello! I’m [Your Name], a [Your Profession] based in [Location]. I’m passionate about [skills/interests], and my work focuses on [core value proposition].
          </p>
          <p className="text-lg text-textColor-secondary">
            With experience in [technologies/fields], I create solutions that [unique selling point or professional goal].
          </p>
        </div>
      </div>
    </Layout>
  )
}

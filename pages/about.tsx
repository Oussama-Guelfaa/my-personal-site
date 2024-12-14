import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <SEO title="About - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div>
          <p className="text-2xl text-textColor-secondary mb-6">
            👋 Hi there, <br />
            🎓 I am Oussama Guelfaa, a Master’s student in Computer Science at École Nationale Supérieure des Mines de Saint-Étienne.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            I am passionate about technology and eager to contribute to innovative solutions. My background includes expertise in Software Engineering, Cybersecurity, and Operational Research.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            👨‍💻 My technical journey includes diverse projects such as developing an automated Forex trading algorithm and optimizing software systems. I enjoy working with Python, Java, and C++, tackling challenges in database management and system design.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            🌟 Beyond academics, I thrive in leadership roles. As an Event Manager for the International Students Association, I’ve facilitated events for over 100 students, emphasizing inclusivity and cultural diversity.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            🏆 I am multilingual, fluent in Arabic, French, and English, with beginner proficiency in Spanish. I also bring skills in Python, SQL, Linux, and VBA, always ready to expand my expertise.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            🎾 Outside tech, I enjoy tennis, football, and exploring Moroccan cuisine. I find commerce and politics equally fascinating and love to engage in meaningful discussions.
          </p>
          <p className="text-2xl text-textColor-secondary mb-6">
            ✈️ As someone who values cultural exchange, I’m always eager to connect and collaborate. Check out my LinkedIn profile to know more!
          </p>
          <p className="text-2xl text-textColor-secondary">
            With experience in [technologies/fields], I create solutions that [unique selling point or professional goal].
          </p>
        </div>
      </div>
    </Layout>
  )
}

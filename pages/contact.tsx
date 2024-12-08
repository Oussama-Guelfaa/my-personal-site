import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
      <p className="text-lg text-textColor-secondary mb-4">
        I’d love to hear from you! Feel free to reach out via the form below or connect with me on social media.
      </p>
      <form className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:border-brand focus:ring-brand focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:border-brand focus:ring-brand focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:border-brand focus:ring-brand focus:outline-none" rows={5} />
        </div>
        <button type="submit" className="bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark transition">Send Message</button>
      </form>
    </Layout>
  )
}

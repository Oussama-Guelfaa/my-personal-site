// components/Footer.tsx

export default function Footer() {
    return (
      <footer
      className="bg-black text-gray-300 py-10 px-6"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Optional subtle border at the top
        padding: '5rem 2rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Thank You Message */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium flex items-center justify-center space-x-2">
          <span>👋</span>
          <span>Thanks for stopping by! Here is more of me if you are interested :)</span>
        </h2>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Pages */}
        <div>
          <h3 className="text-gray-500 font-bold uppercase mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Me</a></li>
            <li><a href="/resume" className="hover:text-white">Resume</a></li>
          </ul>
        </div>

        {/* Selected Work */}
        <div>
          <h3 className="text-gray-500 font-bold uppercase mb-4">Selected Work</h3>
          <ul className="space-y-2">
            <li><a href="/apple" className="hover:text-white">Apple</a></li>
            <li><a href="/visavis" className="hover:text-white">Visavis</a></li>
            <li><a href="/soundcloud" className="hover:text-white">SoundCloud</a></li>
            <li><a href="/forbes" className="hover:text-white">Forbes</a></li>
          </ul>
        </div>

        {/* Augmented Reality */}
        <div>
          <h3 className="text-gray-500 font-bold uppercase mb-4">Augmented Reality</h3>
          <ul className="space-y-2">
            <li><a href="/covision" className="hover:text-white">CoVision</a></li>
            <li><a href="/snap" className="hover:text-white">Snap Inc.</a></li>
            <li><a href="/spatialsense" className="hover:text-white">SpatialSense</a></li>
            <li><a href="/inst639p" className="hover:text-white">INST639P</a></li>
          </ul>
        </div>

        {/* Let’s Connect */}
        <div>
          <h3 className="text-gray-500 font-bold uppercase mb-4">Let’s Connect</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></li>
            <li><a href="mailto:youremail@example.com" className="hover:text-white">Email</a></li>
          </ul>
        </div>
        <div
          className="text-center text-gray-500 text-sm py-4"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Optional subtle border at the top
            paddingTop: '2rem'
          }}
        >
          © 2024 Oussama Guelfaa. All rights reserved.
        </div>
      </div>
    </footer>
    );
  }
  
  
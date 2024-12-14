import Image from 'next/image';
import Button from './Button';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Hero() {
  // Animation controls for "LATEST WORK"
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animate every time you scroll
    threshold: 0.1, // Start animation when 10% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { scale: 1, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1.5], // Steps of growing
      opacity: [0.5, 0.8, 1],
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="flex flex-col md:flex-row items-center gap-9 bg-black"
        style={{
          paddingTop: '2rem', // Reduce the top padding
          minHeight: '100vh',  // Reduce section height
        }}
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          style={{
            marginTop: '-6rem', // Move text higher by reducing margin (negative value)
          }}
        >
          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ marginBottom: '9rem' }} // Reduce spacing below the title
          >
            Welcome to My Personal Space
          </h1>

          {/* Subtitle */}
          <p className="text-xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-50 mb-6 max-w-md mx-auto md:mx-2">
            I’m a Master’s student in Computer Science at École Nationale
            Supérieure des Mines de Saint-Étienne, passionate about technology and
            eager to contribute to innovative solutions. Explore my projects, read
            my thoughts, and connect with me.
          </p>

          {/* Call-to-Action Button */}
          <Button href="/projects">View My Work</Button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{
            scale: 1.1, // Slight zoom-in effect on hover
            rotate: 6, // Small rotation on hover
            height: '80vh',
          }}
        >
          {/* Profile Picture */}
          <motion.div
            style={{
              width: '390px', // Make the profile picture smaller
              height: '490px', // Adjust the height accordingly
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(to bottom, #4b4b4b, #a6a6a6)', // Gray gradient
              borderRadius: '15px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
            }}
            initial={{
              opacity: 0, // Start hidden
              scale: 0.8, // Start slightly smaller
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05, // Zoom-in on hover
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                background: `
                  radial-gradient(circle at top left, rgba(0, 0, 0, 1), transparent), /* Top-left */
                  radial-gradient(circle at top right, rgba(0, 0, 0, 1), transparent), /* Top-right */
                  radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.859), transparent), /* Bottom-left */
                  radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.859), transparent) /* Bottom-right */
                `,
              }}
            >
              <motion.img
                src="/images/profile.jpg"
                alt="Profile Picture"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* LATEST WORK Section */}
      <section
      ref={ref}
      className="relative flex flex-col items-center justify-center bg-black"
      style={{
        height: '80vh', // Maintain the current height of the section
        padding: '1rem',
      }}
    >
      {/* Background Image with Motion */}
      <motion.div
        style={{
          width: '85%',
          maxWidth: '1000px',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: '15px', // Keep the rounded corners
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Add shadow for visual depth
        }}
        className="relative"
        initial={{
          opacity: 0,
          y: 20, // Start slightly below
          scale: 0.95, // Slightly smaller initially
        }}
        animate={{
          opacity: 1,
          y: 0, // Move to its final position
          scale: 1, // Full size
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05, // Slight zoom effect on hover
        }}
      >
        {/* Background Image */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url('/images/ram.jpg')`, // Use your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text Overlay */}
          <div
            className="absolute top-4 left-4 text-white text-lg md:text-xl font-light z-10"
            style={{
              textAlign: 'left',
            }}
          >
            <span>01 | AR PRODUCT DESIGNER & DEVELOPER</span>
          </div>
        
          {/* Text Overlay */}
          <div
            className="absolute text-white"
            style={{
              top: '50%', // Center vertically
              right: '5%', // Position towards the right
              transform: 'translateY(-50%)', // Adjust vertical alignment
              textAlign: 'left',
              maxWidth: '300px', // Adjust width for responsiveness
            }}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold">CoVision</h2>
            {/* Subtitle */}
            <p className="text-lg font-light mt-2">
              An Apple Vision Pro concept for the future of design brainstorming.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section Content Below the Image */}
      <motion.div
        className="z-10 flex flex-col items-center mt-4"
        style={{
          position: "relative",
        }}
        initial={{
          opacity: 0,
          y: 30, // Start slightly below
        }}
        animate={{
          opacity: 1,
          y: 0, // Move to its final position
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{
            scale: 0.9, // Start slightly smaller
            opacity: 0, // Initially hidden
          }}
          animate={{
            scale: 1, // Full size
            opacity: 1, // Fully visible
            transition: { duration: 1, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.2, // Slight hover effect
          }}
        >
          Project 1
        </motion.h1>
      </motion.div>
    </section>

      {/* LATEST WORK 2 Section */}
      <section
        ref={ref}
        className="relative flex flex-col items-center justify-center bg-black"
        style={{
          height: '100vh', // Remove full-height, make it dynamic
          padding: '1rem ',
          marginTop: '-3rem' // Add some padding
        }}
      >
        {/* Background Image Container with Border */}
        <motion.div
          style={{
            width: '90%', // Control the width of the image container
            maxWidth: '1000px', // Set a maximum width
            aspectRatio: '16 / 9', // Maintain aspect ratio
            borderRadius: '15px', // Add rounded corners
            overflow: 'hidden', // Ensure the image stays inside the border
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Add a shadow for visual appeal
          }}
          className="relative"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.05, // Slight zoom on hover
          }}
        >
          {/* Background Image */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url('/images/ram2.jpg')`, // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.6,
            }}
            >
            {/* Text Overlay */}
          <div
          className="absolute top-4 left-4 text-white text-lg md:text-xl font-light z-10"
          style={{
            textAlign: 'left',
          }}
        >
          <span>01 | AR PRODUCT DESIGNER & DEVELOPER</span>
        </div>
      
        {/* Text Overlay */}
        <div
          className="absolute text-white"
          style={{
            top: '50%', // Center vertically
            right: '5%', // Position towards the right
            transform: 'translateY(-50%)', // Adjust vertical alignment
            textAlign: 'left',
            maxWidth: '300px', // Adjust width for responsiveness
          }}
        >
          {/* Title */}
          <h2 className="text-2xl font-bold">CoVision</h2>
          {/* Subtitle */}
          <p className="text-lg font-light mt-2">
            An Apple Vision Pro concept for the future of design brainstorming.
          </p>
        </div>
          </div>
        </motion.div>

        {/* Section Content */}
        <motion.div
          className="z-10 flex flex-col items-center mt-4" // Add spacing below the image
          style={{
            position: "relative",
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          {/* Growing Text */}
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            Project 2
          </motion.h1>
        </motion.div>
      </section>

      {/* LATEST WORK 3 Section */}
      <section
        ref={ref}
        className="relative flex flex-col items-center justify-center bg-black"
        style={{
          height: '100vh', // Remove full-height, make it dynamic
          padding: '1rem',
          marginTop: '-2rem' // Add some padding
        }}
      >
        {/* Background Image Container with Border */}
        <motion.div
          style={{
            width: '90%', // Control the width of the image container
            maxWidth: '1000px', // Set a maximum width
            aspectRatio: '16 / 9', // Maintain aspect ratio
            borderRadius: '15px', // Add rounded corners
            overflow: 'hidden', // Ensure the image stays inside the border
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.9)', // Add a shadow for visual appeal
          }}
          className="relative"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.05, // Slight zoom on hover
          }}
        >
          {/* Background Image */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url('/images/ram3.jpg')`, // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.6,
            }}
            >
            {/* Text Overlay */}
          <div
          className="absolute top-4 left-4 text-white text-lg md:text-xl font-light z-10"
          style={{
            textAlign: 'left',
          }}
        >
          <span>01 | AR PRODUCT DESIGNER & DEVELOPER</span>
        </div>
      
        {/* Text Overlay */}
        <div
          className="absolute text-white"
          style={{
            top: '50%', // Center vertically
            right: '5%', // Position towards the right
            transform: 'translateY(-50%)', // Adjust vertical alignment
            textAlign: 'left',
            maxWidth: '300px', // Adjust width for responsiveness
          }}
        >
          {/* Title */}
          <h2 className="text-2xl font-bold">CoVision</h2>
          {/* Subtitle */}
          <p className="text-lg font-light mt-2">
            An Apple Vision Pro concept for the future of design brainstorming.
          </p>
        </div>
          </div>
        </motion.div>

        {/* Section Content */}
        <motion.div
          className="z-10 flex flex-col items-center mt-4" // Add spacing below the image
          style={{
            position: "relative",
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          {/* Growing Text */}
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            Project 3
          </motion.h1>
        </motion.div>
      </section>
    </>
  );
}

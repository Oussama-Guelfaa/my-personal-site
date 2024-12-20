import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block border border-gray-200 rounded-md overflow-hidden bg-background.dark"
      style={{width:'100%', height:'100%'}}
    >
      <motion.div 
        className="w-full h-auto overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image src={image} alt={title} width={600} height={400} className="w-full h-auto" />
      </motion.div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-text.primary">{title}</h3>
        <p className="text-sm text-text.primary mb-2">{description}</p>
        <span className="text-brand font-medium">Learn More →</span>
      </div>
    </a>
  )
}


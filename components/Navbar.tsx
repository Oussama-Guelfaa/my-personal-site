// components/Navbar.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  // Define hover animation variants for scaling only
  const linkVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <nav>
      <ul className="flex gap-6 font-medium">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
          <motion.li
            key={item}
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="cursor-pointer transition-transform duration-200"
          >
            <Link
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100 hover:from-gray-300 hover:to-white transition-colors duration-200"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}


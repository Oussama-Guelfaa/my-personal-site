// components/Header.tsx

import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="py-4 bg-brand shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Name with gradient text */}
        <div className="text-2xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">
          Oussama Guelfaa
        </div>
        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}


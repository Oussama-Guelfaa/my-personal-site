// components/Header.tsx

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="py-4 bg-brand text-text.secondary shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyPersonalBrand</div>
        <Navbar />
      </div>
    </header>
  );
}


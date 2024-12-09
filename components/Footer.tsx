// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-secondary.DEFAULT py-4">
        <div className="container mx-auto px-4 text-center text-sm text-text.secondary">
          © {new Date().getFullYear()} MyPersonalBrand. All rights reserved.
        </div>
      </footer>
    );
  }
  
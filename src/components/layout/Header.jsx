import React, { useState, useEffect } from "react";

const Navigation = () => {
  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Play", href: "#play" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="font-meta-sans text-base text-primary-black hover:text-primary-red transition-colors duration-300"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-primary-yellow z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-8">
        <button
          onClick={onClose}
          className="self-end text-3xl text-primary-black mb-8"
        >
          ×
        </button>
        <nav className="flex flex-col space-y-6">
          <a
            href="#work"
            className="font-meta-sans text-2xl text-primary-black hover:text-primary-red"
          >
            Work
          </a>
          <a
            href="#play"
            className="font-meta-sans text-2xl text-primary-black hover:text-primary-red"
          >
            Play
          </a>
          <a
            href="#about"
            className="font-meta-sans text-2xl text-primary-black hover:text-primary-red"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-meta-sans text-2xl text-primary-black hover:text-primary-red"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (assuming hero is 100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-primary-yellow shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`font-meta-serif text-xl text-primary-black hover:text-primary-red transition-all duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          Wesley Grubbs
        </a>

        <Navigation />

        <button
          className="md:hidden text-primary-black"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;

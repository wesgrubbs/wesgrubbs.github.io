import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useScrollSection from "../../hooks/useScrollSection";
import { scrollToSection } from "../../utils/animations";

const Navigation = ({ activeSection }) => {
  const navItems = [
    { label: "Work", href: "#work", section: "work" },
    { label: "Play", href: "#play", section: "play" },
    //{ label: "Services", href: "#services", section: "services" },
    { label: "Info", href: "#info", section: "info" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`font-meta-serif text-base text-primary-black dark:text-primary-yellow 
            hover:text-primary-red dark:hover:text-primary-red transition-colors duration-300 
            ${
              activeSection === item.section
                ? "border-b-2 border-primary-black dark:border-primary-yellow"
                : ""
            }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  activeSection: PropTypes.string,
};

const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      scrollToSection(href);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-primary-yellow dark:bg-primary-black z-50 transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-8">
        <button
          onClick={onClose}
          className="self-end text-3xl text-primary-black dark:text-primary-yellow"
        >
          ×
        </button>
        <nav className="flex flex-col space-y-6">
          {["work", "play", "services", "info"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleClick(e, `#${section}`)}
              className={`font-meta-serif text-2xl text-primary-black dark:text-primary-yellow 
                hover:text-primary-red dark:hover:text-primary-red capitalize
                ${
                  activeSection === section
                    ? "border-b-2 border-primary-black dark:border-primary-yellow"
                    : ""
                }`}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    scrollToSection("#hero");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-yellow dark:bg-primary-black shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={handleHomeClick}
          className={`font-meta-serif text-xl text-primary-black dark:text-primary-yellow 
            hover:text-primary-red dark:hover:text-primary-red transition-all duration-300 
            ${isScrolled ? "opacity-100" : "opacity-0"}`}
        >
          Wesley Grubbs
        </a>

        <Navigation activeSection={activeSection} />

        <button
          className="md:hidden text-primary-black dark:text-primary-yellow"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
};

export default Header;

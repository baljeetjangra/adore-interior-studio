"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Removed placeholder box */}
        <div className="flex items-center">
          {/* Empty space for logo if needed later */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-addore-accent transition-colors duration-300 ${
              isScrolled ? "text-addore-secondary" : "text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-addore-accent transition-colors duration-300 ${
              isScrolled ? "text-addore-secondary" : "text-white"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`hover:text-addore-accent transition-colors duration-300 ${
              isScrolled ? "text-addore-secondary" : "text-white"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`hover:text-addore-accent transition-colors duration-300 ${
              isScrolled ? "text-addore-secondary" : "text-white"
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`hover:text-addore-accent transition-colors duration-300 ${
              isScrolled ? "text-addore-secondary" : "text-white"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Phone CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:9999067234"
            className="flex items-center space-x-2 bg-addore-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
          >
            <Phone size={18} />
            <span>Call Now: 9999067234</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? "text-addore-secondary" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-addore-secondary" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-addore-secondary hover:text-addore-accent transition-colors duration-300 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-addore-secondary hover:text-addore-accent transition-colors duration-300 text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-addore-secondary hover:text-addore-accent transition-colors duration-300 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-addore-secondary hover:text-addore-accent transition-colors duration-300 text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-addore-secondary hover:text-addore-accent transition-colors duration-300 text-left"
            >
              Contact
            </button>
            <a
              href="tel:9999067234"
              className="flex items-center space-x-2 bg-addore-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300 w-fit"
            >
              <Phone size={18} />
              <span>Call Now: 9999067234</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

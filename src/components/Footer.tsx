const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-addore-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-addore-accent mb-2">
              Addore Interior Studio
            </h3>
            <p className="text-addore-warm-gray italic">
              Elegance. Functionality. Perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-addore-secondary mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-addore-warm-gray hover:text-addore-accent transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-addore-warm-gray hover:text-addore-accent transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-addore-warm-gray hover:text-addore-accent transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-addore-warm-gray hover:text-addore-accent transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-addore-warm-gray hover:text-addore-accent transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-addore-accent border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-addore-warm-gray text-sm">
            © 2025 Addore Interior Studio. All rights reserved. Designed with ❤️
            for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

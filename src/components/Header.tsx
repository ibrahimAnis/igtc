import { useState, useEffect } from "react";
import logo from "@/assets/igtc-logo.svg";
import { Menu, X } from "lucide-react";

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

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Showcase", href: "#showcase" },
    { label: "Service Area", href: "#service-area" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center flex-shrink-0 pl-2 md:pl-4"
          >
            <img
              src={logo}
              alt="IGTC Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled
                  ? "h-12 sm:h-14 md:h-16 lg:h-20"
                  : "h-14 sm:h-16 md:h-20 lg:h-24"
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 pr-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-inter font-semibold text-base xl:text-lg transition-colors duration-200 ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors mr-2 ${
              isScrolled
                ? "text-foreground hover:bg-accent/10"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-inter font-semibold text-lg text-left px-4 py-3 rounded-lg transition-colors ${
                    isScrolled
                      ? "text-foreground hover:bg-accent/10"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


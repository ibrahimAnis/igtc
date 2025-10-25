import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/igtc-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#hero" },
      { name: "Products", href: "#products" },
      { name: "About Us", href: "#about" },
      { name: "Facilities", href: "#facilities" },
    ],
    "Our Services": [
      { name: "Export Services", href: "#products" },
      { name: "Quality Control", href: "#facilities" },
      { name: "Global Shipping", href: "#products" },
      { name: "Documentation", href: "#contact" },
    ],
    "Export Markets": [
      { name: "Singapore & Malaysia", href: "#products" },
      { name: "UAE & Middle East", href: "#products" },
      { name: "Europe & UK", href: "#products" },
      { name: "USA & Americas", href: "#products" },
    ],
  };

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/17XkBh36Ys/", 
      label: "Facebook",
      color: "hover:bg-[#1877F2]"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/interglobetc?igsh=MTFlbDZqZ29ydmhlMA==", 
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]"
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="IGTC Logo" className="h-16 w-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Interglobe Trading Company
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Premium agricultural product exporter from India to global markets. FSSAI certified with international quality standards.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a href="tel:+919561357752" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 95613 57752</span>
              </a>
              <a href="mailto:info@igtc.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@igtc.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Khargone, Madhya Pradesh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`bg-primary-foreground/10 p-3 rounded-lg hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 font-playfair">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
            <p>&copy; {currentYear} Interglobe Trading Company. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-accent transition-colors">Privacy Policy</button>
              <button className="hover:text-accent transition-colors">Terms of Service</button>
              <button className="hover:text-accent transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    about: [
      { name: "Our Mission", href: "/our-mission" },
      { name: "How to Report", href: "/how-to-report" }
    ],
    resources: [
      { name: "FAQ", href: "/faq" },
      { name: "Safety Guidelines", href: "/safety-guidelines" },
      { name: "Resources", href: "/resources" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };

  return (
    <footer id="contact" className="gradient-deep text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-4">
              About
            </h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-base text-blue-100 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-base text-blue-100 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-base text-blue-100 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-4">
              Connect with INCOIS
            </h3>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-smooth">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-smooth">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-smooth">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-base text-blue-200">
          <p>&copy; 2025 Indian National Centre for Ocean Information Services (INCOIS). All Rights Reserved.</p>
          <p className="mt-2">
            Address: "Ocean Valley", Pragathi Nagar (BO), Nizampet (SO), Hyderabad, Telangana, India - 500090.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
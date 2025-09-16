import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/80 backdrop-blur-lg border-b border-border fixed top-0 left-0 right-0 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Platform Name */}
          <Link to="/" className="flex items-center space-x-4">
            <img 
              className="h-12 w-auto" 
              src="https://www.incois.gov.in/images/incois_logo.png" 
              alt="INCOIS Logo"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x50/0066cc/ffffff?text=INCOIS';
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl text-primary">Samudra Sachet</span>
              <span className="text-xs text-muted-foreground hidden sm:block">An INCOIS Initiative</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-smooth ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-smooth ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/dashboard" 
              className={`font-medium transition-smooth ${isActive('/dashboard') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Live Dashboard
            </Link>
            <Link 
              to="/report" 
              className={`font-medium transition-smooth ${isActive('/report') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Report
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-smooth ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Login/Register & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default" 
              className="hidden md:inline-flex shadow-ocean hover:shadow-glow transition-wave"
            >
              Login / Register
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                isActive('/') ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                isActive('/about') ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/dashboard" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                isActive('/dashboard') ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Live Dashboard
            </Link>
            <Link 
              to="/report" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                isActive('/report') ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Report an Incident
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                isActive('/contact') ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button className="w-full mt-2 shadow-ocean">
              Login / Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
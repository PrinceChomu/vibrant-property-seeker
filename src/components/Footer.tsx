
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-teal mb-4">StayScape</h3>
            <p className="text-white/80 mb-6">
              Find your perfect home away from home with our curated selection of properties around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white/80 hover:text-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/80 hover:text-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/80 hover:text-teal transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/80 hover:text-teal transition-colors">
                Home
              </Link>
              <Link to="/listings" className="text-white/80 hover:text-teal transition-colors">
                Properties
              </Link>
              <Link to="/about" className="text-white/80 hover:text-teal transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-teal transition-colors">
                Contact
              </Link>
              <Link to="/blog" className="text-white/80 hover:text-teal transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/faq" className="text-white/80 hover:text-teal transition-colors">
                FAQ
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-teal transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-white/80 hover:text-teal transition-colors">
                Privacy Policy
              </Link>
              <Link to="/help" className="text-white/80 hover:text-teal transition-colors">
                Help Center
              </Link>
              <Link to="/become-host" className="text-white/80 hover:text-teal transition-colors">
                Become a Host
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@stayscape.com" className="flex items-center text-white/80 hover:text-teal transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                info@stayscape.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-white/80 hover:text-teal transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start text-white/80">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Property St.<br />San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} StayScape. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-white/60 text-sm hover:text-teal transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-white/60 text-sm hover:text-teal transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-white/60 text-sm hover:text-teal transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

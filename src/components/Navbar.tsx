
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <header className={`w-full z-30 ${transparent ? 'absolute' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-teal">StayScape</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-teal transition-colors font-medium">
                Home
              </Link>
              <Link to="/listings" className="text-foreground hover:text-teal transition-colors font-medium">
                Properties
              </Link>
              <Link to="/about" className="text-foreground hover:text-teal transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-teal transition-colors font-medium">
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button className="bg-teal hover:bg-teal/90 text-navy">
                <User className="h-5 w-5 mr-2" /> Sign In
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 p-8">
            <Link 
              to="/" 
              className="text-lg font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="text-lg font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium" 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-teal hover:bg-teal/90 text-navy w-full">
              <User className="h-5 w-5 mr-2" /> Sign In
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
              <Search className="h-5 w-5 mr-2" /> Search
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;

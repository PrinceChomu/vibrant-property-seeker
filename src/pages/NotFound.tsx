
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-lightgray">
        <div className="text-center px-4 py-16">
          <h1 className="text-7xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-teal hover:bg-teal/90 text-navy">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default NotFound;

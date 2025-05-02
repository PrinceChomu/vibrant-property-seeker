
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProperties from '@/components/FeaturedProperties';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Building, Award, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar transparent />
      <Hero />
      <Categories />
      <FeaturedProperties />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Finding and booking your perfect property has never been easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the Perfect Property</h3>
              <p className="text-muted-foreground">
                Browse our curated selection of properties and use filters to find exactly what you're looking for.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Securely</h3>
              <p className="text-muted-foreground">
                Make your reservation with our secure booking system and receive instant confirmation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Stay</h3>
              <p className="text-muted-foreground">
                Relax and enjoy your stay knowing that our customer support team is available 24/7.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-navy hover:bg-navy/90 text-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore our most booked locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "New York", image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 183 },
              { name: "Los Angeles", image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 145 },
              { name: "Miami", image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 102 },
              { name: "Chicago", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 94 },
              { name: "San Francisco", image: "https://images.unsplash.com/photo-1534050359320-02900022671e?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 89 },
              { name: "Austin", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3", properties: 76 },
            ].map((city) => (
              <div 
                key={city.name} 
                className="relative overflow-hidden rounded-xl h-64 group shadow-md card-hover"
              >
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                  <p className="text-white/80">{city.properties} properties</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-teal text-navy hover:bg-teal hover:text-navy">
              View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Host CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-3">Become a Host</h2>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Share your space, earn extra income, and open your world to a community of travelers excited to stay with hosts like you.
              </p>
              <Button className="bg-teal hover:bg-teal/90 text-navy text-lg px-8 py-6">
                Start Hosting Today
              </Button>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-teal mr-3" />
                  <h4 className="text-xl font-semibold">Quick Setup</h4>
                </div>
                <p className="text-white/80 mb-6">
                  Create your listing in under 10 minutes and start earning immediately.
                </p>
                
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal mr-3" />
                  <h4 className="text-xl font-semibold">24/7 Support</h4>
                </div>
                <p className="text-white/80">
                  Our dedicated support team is always ready to help you and your guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Index;

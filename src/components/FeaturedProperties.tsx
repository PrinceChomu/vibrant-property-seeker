
import React from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';

const PROPERTIES: PropertyProps[] = [
  {
    id: 1,
    title: "Beachfront Villa with Pool",
    location: "Miami, FL",
    price: 349,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    featured: true
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: 220,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, CO",
    price: 275,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2
  },
  {
    id: 4,
    title: "Luxury Penthouse Suite",
    location: "Las Vegas, NV",
    price: 499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Penthouse",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3
  },
  {
    id: 5,
    title: "Charming Countryside Cottage",
    location: "Cotswolds, UK",
    price: 185,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Cottage",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 6,
    title: "Oceanview Resort Suite",
    location: "Maui, HI",
    price: 325,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Resort",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <p className="text-muted-foreground mt-2">Explore our handpicked collection of exceptional stays</p>
          </div>
          <a href="/listings" className="text-teal hover:text-teal/80 font-medium flex items-center">
            View all properties
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;

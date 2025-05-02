
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface PropertyProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  featured?: boolean;
}

const PropertyCard = ({ id, title, location, price, rating, image, type, guests, bedrooms, bathrooms, featured }: PropertyProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover group animate-fade-in">
      <div className="relative">
        {featured && (
          <Badge className="absolute top-3 left-3 z-10 bg-teal text-navy font-medium">
            Featured
          </Badge>
        )}
        <Link to={`/property/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
        
        <Badge className="absolute bottom-3 right-3 z-10">
          {type}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        
        <Link to={`/property/${id}`}>
          <h3 className="font-semibold text-lg mb-2 text-navy hover:text-teal transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{guests} guests</span>
          </div>
          <div>
            {bedrooms} bed{bedrooms !== 1 ? 's' : ''} • {bathrooms} bath{bathrooms !== 1 ? 's' : ''}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t">
          <div>
            <span className="text-xl font-semibold text-navy">${price}</span>
            <span className="text-muted-foreground"> / night</span>
          </div>
          <Button className="bg-navy hover:bg-navy/90 text-white">
            <Calendar className="h-4 w-4 mr-2" /> Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

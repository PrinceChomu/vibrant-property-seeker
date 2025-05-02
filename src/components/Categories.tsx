
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Mountain, Building, Palmtree, Tent, CoffeeIcon, Heart, Anchor } from 'lucide-react';

const categories = [
  { name: "Houses", icon: Home },
  { name: "Apartments", icon: Building },
  { name: "Beach", icon: Palmtree },
  { name: "Cabins", icon: Mountain },
  { name: "Camping", icon: Tent },
  { name: "Breakfast", icon: CoffeeIcon },
  { name: "Luxury", icon: Heart },
  { name: "Lake", icon: Anchor },
];

const Categories = () => {
  return (
    <section className="py-8 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Button 
                key={category.name}
                variant="outline"
                className="flex-shrink-0 border-2 px-6 py-2 hover:bg-teal hover:text-navy hover:border-teal"
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;

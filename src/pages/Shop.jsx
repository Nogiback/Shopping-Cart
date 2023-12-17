import React from 'react';
import ProductCard from '../components/ProductCard';
import plants from '../data/plantData';

export default function Shop() {
  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex w-full justify-center'>
      <div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {plants.map((plant) => {
            return <ProductCard key={plant.id} plant={plant} />;
          })}
        </div>
      </div>
    </section>
  );
}

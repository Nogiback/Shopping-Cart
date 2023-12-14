import React from 'react';
import ProductCard from '../components/ProductCard';
import plants from '../data/plantData';

export default function Store() {
  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex h-[calc(100%-80px)] w-full justify-center'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {plants.map((plant) => (
            <a key={plant.id} href='/' className='group'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                  src={plant.img1}
                  alt={plant.name}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{plant.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                ${plant.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

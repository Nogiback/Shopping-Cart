import React from 'react';
import ProductCard from '../components/ProductCard';
import plants from '../data/plantData';

export default function Store() {
  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex w-full justify-center'>
      <div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
        {/* <h2 className='text-forest-900 dark:text-white-100 mb-6 text-4xl'>
          Products
        </h2> */}
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {plants.map((plant) => (
            <a
              key={plant.id}
              href='/'
              className='bg-white-100 group w-[250px] rounded-lg p-4'
            >
              <div className='bg-white-100 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7'>
                <img
                  src={plant.img1}
                  alt={plant.name}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
              </div>
              <h3 className='text-forest-900 mt-4 text-sm'>{plant.name}</h3>
              <p className='text-forest-900 mt-1 text-lg font-medium'>
                ${plant.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

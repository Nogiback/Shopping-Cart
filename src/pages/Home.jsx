import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex h-[calc(100%-80px)] w-full justify-center'>
        <div className='container px-4 py-40'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                Welcome to the Nogi Shop
              </h1>
              <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                tempora expedita consectetur tenetur veritatis eligendi.
                Veritatis laboriosam quos cum optio?
              </p>
            </div>
            <Link
              className='text-md bg-forest-900 text-grey-100 hover:bg-sage-600 border-forest-900 inline-flex h-9 items-center justify-center rounded-md border-2 border-solid px-4 py-2 font-medium shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
              to='/store'
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

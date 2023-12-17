import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex h-[calc(100%-80px)] w-full justify-center'>
      <div className='flex flex-col pt-36 text-center'>
        <p className='text-forest-900 text-base font-semibold'>404</p>
        <h1 className='text-forest-900 mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
          Page not found
        </h1>
        <p className='text-forest-900 mt-6 text-base leading-7'>
          Sorry, we could not find the page you are looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='bg-forest-900 text-white-100 hover:bg-sage-500 focus-visible:outline-sage-500 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
          >
            Go back home
          </Link>
          <Link to='/' className='text-forest-900 text-sm font-semibold'>
            Contact support <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

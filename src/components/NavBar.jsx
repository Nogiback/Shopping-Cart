import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='bg-white-100 text-forest-900 dark:bg-forest-900 dark:text-white-200 sticky left-0 right-0 top-0 z-10 flex items-center justify-between px-8 py-5'>
      <Link className='text-4xl font-bold' to='/'>
        <i className='fa-solid fa-shop'></i> Nogi Shop
      </Link>
      <div className='flex gap-4'>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/'>
          Home
        </Link>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/store'>
          Shop
        </Link>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/cart'>
          Cart
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, CircleUserRound } from 'lucide-react';

export default function NavBar({ toggleCart, cart }) {
  return (
    <div className='bg-white-100 text-forest-900 dark:bg-forest-900 dark:text-white-200 sticky left-0 right-0 top-0 z-10 flex items-center justify-between px-8 py-5'>
      <Link className='text-4xl font-bold' to='/'>
        <i className='fa-solid fa-shop'></i> The Nogi Shop
      </Link>
      <div className='flex gap-4'>
        <button>
          <Search className='hover:text-sage-600' />
        </button>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/'>
          Home
        </Link>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/store'>
          Shop
        </Link>
        <button>
          <CircleUserRound className='hover:text-sage-600' />
        </button>
        <button type='button' className='relative mr-5 flex bg-transparent'>
          <ShoppingCart size={26} className='hover:text-sage-600' />
          <div className='bg-sage-600 text-white-100 absolute -top-3 left-6 rounded-full px-2 py-0.5 text-sm'>
            0
          </div>
        </button>
      </div>
    </div>
  );
}

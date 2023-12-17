import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Search, CircleUserRound, Store } from 'lucide-react';

export default function NavBar({ toggleCart, cart }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-white-100 text-forest-900 dark:bg-forest-900 dark:text-white-200 sticky left-0 right-0 top-0 z-10 flex items-center justify-between px-8 py-5'>
      <Link className='flex text-2xl font-bold sm:text-4xl' to='/'>
        <Store className='mr-2 h-8 w-8 sm:h-11 sm:w-11' /> The Nogi Shop
      </Link>
      <div className='hidden items-center justify-center gap-4 md:flex'>
        <button>
          <Search className='hover:text-sage-600' />
        </button>
        <Link className='hover:text-sage-600 text-lg font-bold' to='/'>
          Home
        </Link>
        <NavLink className='hover:text-sage-600 text-lg font-bold' to='/shop'>
          Shop
        </NavLink>
        <button>
          <CircleUserRound className='hover:text-sage-600' />
        </button>
        <button
          onClick={toggleCart}
          type='button'
          className='relative mr-5 flex bg-transparent'
        >
          <ShoppingCart size={26} className='hover:text-sage-600' />
          <div className='bg-sage-600 text-white-100 absolute -top-3 left-6 rounded-full px-2 py-0.5 text-sm'>
            0
          </div>
        </button>
      </div>

      {/* Hamburger */}
      <div className='flex gap-4 md:hidden'>
        <button
          onClick={handleClick}
          className='flex flex-col items-center justify-center'
        >
          <span
            className={`bg-forest-900 block h-0.5 w-6 rounded-sm 
                    transition-all duration-300 ease-out ${
                      isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`bg-forest-900 my-0.5 block h-0.5 w-6 
                    rounded-sm transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`bg-forest-900 block h-0.5 w-6 rounded-sm 
                    transition-all duration-300 ease-out ${
                      isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
        <button type='button' className='relative mr-5 flex bg-transparent'>
          <ShoppingCart size={26} className='hover:text-sage-600' />
          <div className='bg-sage-600 text-white-100 absolute -top-3 left-6 rounded-full px-2 py-0.5 text-sm'>
            0
          </div>
        </button>
      </div>

      {/* Hamburger Menu */}
      <ul
        className={`bg-forest-900 text-white-100 absolute right-0 top-[100%] w-screen justify-end space-y-3 border-2 duration-150 md:hidden ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        <Link
          onClick={handleClick}
          className='hover:bg-forest-600 flex w-full justify-center py-4'
          to='/'
        >
          Home
        </Link>
        <Link
          onClick={handleClick}
          className='hover:bg-forest-600 flex w-full justify-center py-4'
          to='/shop'
        >
          Shop
        </Link>
        <li className='hover:bg-forest-600 flex w-full justify-center py-4'>
          Search
        </li>
        <li className='hover:bg-forest-600 flex w-full justify-center py-4'>
          Account
        </li>
      </ul>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex justify-between items-center p-4 bg-sky-700'>
      <h1 className= 'text-orange-500 text-3xl font-bold'>Nogi Shop</h1>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/store'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

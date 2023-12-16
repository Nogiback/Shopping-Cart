import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ name, price, img }) {
  return (
    <Link
      to={`/store/${name}`}
      className='bg-white-100 group w-[250px] rounded-lg p-4'
    >
      <div className='bg-white-100 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7'>
        <img
          src={img}
          alt={`${name} plant`}
          className='h-full w-full object-cover object-center group-hover:opacity-75'
        />
      </div>
      <h3 className='text-forest-900 mt-4 text-sm'>{name}</h3>
      <p className='text-forest-900 mt-1 text-lg font-medium'>${price}</p>
    </Link>
  );
}

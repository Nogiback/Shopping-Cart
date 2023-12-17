import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ plant }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      to={`/shop/${plant.name}`}
      className='bg-white-100 group w-[250px] rounded-lg p-4'
    >
      <div
        className='bg-white-100 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <img
            src={plant.img2}
            alt={`${plant.name} plant zoomed in`}
            className='h-full w-full object-cover object-center group-hover:opacity-75'
          />
        ) : (
          <img
            src={plant.img1}
            alt={`${plant.name} plant`}
            className='h-full w-full object-cover object-center group-hover:opacity-75'
          />
        )}
      </div>
      <h3 className='text-forest-900 mt-4 text-sm'>{plant.name}</h3>
      <p className='text-forest-900 mt-1 text-lg font-medium'>${plant.price}</p>
    </Link>
  );
}

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import plants from '../data/plantData';
import Quantity from '../components/Quantity';

export default function ProductPage({ addToCart }) {
  const { productName } = useParams();
  const nav = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const { price, img1, img2, info } = plants.find(
    (plant) => plant.name === productName,
  );

  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex h-[calc(100%-80px)] w-full justify-center'>
      <div className='flex items-start justify-center gap-6'>
        <div
          className='relative flex w-[50%] max-w-2xl overflow-hidden rounded-lg group-hover:opacity-75'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            src={img1}
            alt={`${productName} plant`}
            className='h-[50%] w-full rounded-lg object-cover object-center'
          />
          <img
            src={img2}
            alt={`${productName} plant zoomed in`}
            className={`absolute top-0 h-[100%] w-full rounded-lg object-cover object-center duration-700 ${
              isHover ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div className='flex max-w-[30%] flex-col gap-4'>
          <h2 className='text-forest-900 text-3xl font-bold'>{productName}</h2>
          <h3 className='text-sage-500 text-2xl font-bold'>{`$${price}`}</h3>
          <p className='text-forest-900 text-sm lg:text-base'>{info}</p>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <button
            onClick={() => {
              addToCart(productName, price, quantity, img1);
              setQuantity(1);
            }}
            className='bg-forest-900 text-white-100 hover:bg-sage-500 w-32 rounded-lg p-2'
          >
            Add to Cart
          </button>
          <button
            onClick={() => nav(-1)}
            className='bg-forest-900 text-white-100 hover:bg-sage-500 w-32 rounded-lg p-2'
          >
            Back to Shop
          </button>
        </div>
      </div>
    </section>
  );
}

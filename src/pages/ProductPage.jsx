import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import plants from '../data/plantData';
import Quantity from '../components/Quantity';
import { ArrowLeftCircle } from 'lucide-react';

export default function ProductPage({ addToCart, toggleCart }) {
  const { productName } = useParams();
  const nav = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setTimeout(window.scrollTo(0, 0), 100);
  }, []);

  const { price, img1, img2, info } = plants.find(
    (plant) => plant.name === productName,
  );

  return (
    <section className='text-forest-900 relative flex h-[calc(100%-84px)] w-full justify-center'>
      <div className='bg-white-100 flex flex-col items-center justify-start gap-6 pt-6 md:flex-row md:items-start md:justify-center md:bg-opacity-0 md:pt-12'>
        <div
          className='relative flex h-auto w-[70%] max-w-2xl rounded-lg md:w-[40%]'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            src={img1}
            alt={`${productName} plant`}
            className='h-full w-full rounded-lg object-cover object-center'
          />
          <img
            src={img2}
            alt={`${productName} plant zoomed in`}
            className={`absolute top-0 h-[100%] w-full rounded-lg object-cover object-center duration-700 ${
              isHover ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div className='flex max-w-[70%] flex-col gap-2 md:max-w-[40%]'>
          <h2 className='text-forest-900 text-xl font-bold md:text-3xl'>
            {productName}
          </h2>
          <h3 className='text-sage-500 text-xl font-bold md:text-2xl'>{`$${price}`}</h3>
          <p className='text-forest-900 text-sm lg:text-base'>{info}</p>
          <div className='mt-2 flex items-center justify-start gap-6'>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <button
              onClick={() => {
                addToCart(productName, price, quantity, img1);
                setQuantity(1);
                toggleCart();
              }}
              className='bg-forest-900 text-white-100 hover:bg-sage-500 w-24 rounded-lg p-2 text-sm md:text-base'
            >
              Add to Cart
            </button>
          </div>
          <button
            onClick={() => nav(-1)}
            className='bg-forest-900 text-white-100 hover:bg-sage-500 mt-4 flex w-32 items-center justify-center gap-2 rounded-lg p-2 text-sm md:w-36 md:text-base'
          >
            <ArrowLeftCircle /> Back to Shop
          </button>
        </div>
      </div>
    </section>
  );
}

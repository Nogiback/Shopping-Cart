import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import asset1 from '../assets/asset1.jpg';

export default function Home() {
  useEffect(() => {
    setTimeout(window.scrollTo(0, 0), 100);
  }, []);

  return (
    <>
      <section className='text-forest-900 relative flex h-[calc(100%-84px)] w-full justify-center'>
        <div className='container flex items-center justify-between gap-16 px-4 py-40'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
                Welcome to the Nogi Shop
              </h1>
              <p className='text-forest-900 mx-auto max-w-[700px] md:text-lg'>
                Transform your living spaces into vibrant, green sanctuaries
                with our carefully curated collection of indoor plants. Explore
                a diverse range of stylish, low-maintenance, and air-purifying
                foliage that effortlessly blends beauty with tranquility.
              </p>
            </div>
            <Link
              className='text-md bg-forest-900 text-grey-100 hover:bg-sage-600 border-forest-900 inline-flex h-9 items-center justify-center rounded-md border-2 border-solid px-4 py-2 font-medium shadow-lg transition-colors'
              to='/shop'
            >
              Shop Now
            </Link>
          </div>
          <div className='bg-white-100 relative hidden max-w-[50%] overflow-hidden rounded-lg group-hover:opacity-75 md:flex'>
            <img
              src={asset1}
              alt='Living room with plants'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </section>
    </>
  );
}

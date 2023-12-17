import { useState } from 'react';
import { useParams } from 'react-router-dom';
import plants from '../data/plantData';

export default function ProductPage({ addToCart }) {
  const { productName } = useParams();
  const { price, img1, img2, info } = plants.find(
    (plant) => plant.name === productName,
  );

  return (
    <section className='text-forest-900 dark:bg-forest-900 dark:text-white-200 relative flex h-[calc(100%-80px)] w-full justify-center'>
      Product Page
    </section>
  );
}

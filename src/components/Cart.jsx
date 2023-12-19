import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Cart({ cartStatus, toggleCart, cart }) {
  function calculateSubtotal() {
    return cart.reduce(
      (currentTotal, item) => currentTotal + item.price * item.quantity,
      0,
    );
  }

  return (
    <>
      <div
        onClick={toggleCart}
        className={`${
          cartStatus
            ? 'bg-grey-300 absolute left-0 top-0 h-full w-full opacity-50 transition-all'
            : 'hidden'
        }`}
      ></div>
      <div
        className={`bg-white-100 absolute right-0 top-[72px] z-10 flex h-auto w-[420px] flex-col gap-4 rounded-l-xl p-4 md:top-[84px] ${
          cartStatus
            ? 'translate-x-0 transform transition-transform duration-700'
            : 'translate-x-full transform transition-transform duration-700'
        }`}
      >
        <div className='border-forest-900 flex items-center justify-between border-b-2 border-solid'>
          <h2 className='text-forest-900 text-xl font-bold'>Your Cart</h2>
          <button onClick={toggleCart} className='hover:text-[red]'>
            <X className='h-8 w-8' />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className=''>
            <p className=''>There are currently no items in your cart.</p>
            <Link to='/shop' className=''>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className='border-forest-900 flex gap-2 border-b-2 border-solid pb-4'
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className='h-32 w-32 rounded-lg'
                  ></img>

                  <div>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <h4>${item.price}</h4>
                  </div>
                </div>
              );
            })}
            <p>Total: ${calculateSubtotal()}</p>
            <Link to='/' onClick={toggleCart} className=''>
              Checkout
            </Link>
            <Link to='/shop' onClick={toggleCart} className=''>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

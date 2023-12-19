import { Link } from 'react-router-dom';
import { X, MinusCircle, PlusCircle, Trash } from 'lucide-react';

export default function Cart({
  cartStatus,
  toggleCart,
  cart,
  onDecrease,
  onIncrease,
  deleteItem,
}) {
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
            ? 'bg-grey-300 absolute left-0 top-0 h-screen w-screen opacity-50 transition-all'
            : 'hidden'
        }`}
      ></div>
      <div
        className={`bg-white-100 absolute right-0 top-[72px] z-10 flex h-[calc(100%-117px)] w-[95%] flex-col gap-4 p-4 sm:top-[84px] sm:w-[420px] sm:rounded-l-xl ${
          cartStatus
            ? 'translate-x-0 transform transition-transform duration-700'
            : 'translate-x-full transform transition-transform duration-700'
        }`}
      >
        <div className='border-forest-900 flex items-center justify-between border-b-2 border-solid pb-2'>
          <h2 className='text-forest-900 text-2xl font-bold'>Cart</h2>
          <button onClick={toggleCart} className='hover:text-[red]'>
            <X className='h-8 w-8' />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className='flex h-full flex-col items-center justify-center gap-12'>
            <p className='text-xl'>
              There are currently no items in your cart.
            </p>
            <Link
              to='/shop'
              onClick={toggleCart}
              className='bg-forest-900 text-white-100 hover:bg-sage-500 w-[50%] rounded-xl p-2 text-center'
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className='flex w-full flex-col gap-4 overflow-y-scroll'>
              {cart.map((item) => {
                return (
                  <div key={item.id} className='flex w-full gap-2 pb-4'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='h-32 w-32 rounded-lg'
                    ></img>
                    <div className='flex w-full flex-col justify-between'>
                      <div>
                        <h3 className='text-lg'>{item.name}</h3>
                        <h4 className=''>${item.price}</h4>
                      </div>
                      <div className='flex w-full justify-between'>
                        <div className='flex'>
                          <button>
                            <MinusCircle
                              type='button'
                              className='hover:text-sage-500 h-6 w-6'
                              onClick={() => onDecrease(item)}
                            />
                          </button>
                          <div className='text-forest-900 w-8 text-center text-lg font-semibold'>
                            {item.quantity}
                          </div>
                          <button>
                            <PlusCircle
                              type='button'
                              className='hover:text-sage-500 h-6 w-6'
                              onClick={() => onIncrease(item)}
                            />
                          </button>
                        </div>
                        <button>
                          <Trash
                            type='button'
                            className='h-6 w-6 pr-2 transition-colors hover:text-[red]'
                            onClick={() => deleteItem(item)}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='bg-white-100 text-forest-900 border-forest-900 flex w-full flex-col justify-center gap-4 border-t-2 border-solid pt-4 text-xl font-bold'>
              <div className='flex justify-between'>
                <span>Total:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div className='flex flex-col items-center justify-center gap-4 text-lg'>
                <Link
                  to='/'
                  onClick={toggleCart}
                  className='bg-forest-900 text-white-100 hover:bg-sage-500 w-full rounded-xl p-2 text-center'
                >
                  Checkout
                </Link>
                <button
                  onClick={toggleCart}
                  className='bg-forest-900 text-white-100 hover:bg-sage-500 w-full rounded-xl p-2 text-center'
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

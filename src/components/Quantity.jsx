import { PlusCircle, MinusCircle } from 'lucide-react';

export default function Quantity({ quantity, setQuantity }) {
  function decreaseQuantity() {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  function increaseQuantity() {
    if (quantity === 99) return;
    setQuantity((quantity) => quantity + 1);
  }

  return (
    <div className='flex items-center justify-start'>
      <button>
        <MinusCircle
          type='button'
          className='h-10 w-10'
          aria-label='decrease-quantity'
          onClick={decreaseQuantity}
        />
      </button>
      <div className='text-forest-900 bg-white-100 w-10 appearance-none text-center text-2xl font-bold'>
        {quantity}
      </div>
      <button>
        <PlusCircle
          type='button'
          className='h-10 w-10'
          aria-label='increase-quantity'
          onClick={increaseQuantity}
        />
      </button>
    </div>
  );
}

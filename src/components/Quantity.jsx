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
          className='h-9 w-9'
          onClick={decreaseQuantity}
        />
      </button>
      <div className='text-forest-900 w-10 text-center text-2xl font-bold'>
        {quantity}
      </div>
      <button>
        <PlusCircle
          type='button'
          className='h-9 w-9'
          onClick={increaseQuantity}
        />
      </button>
    </div>
  );
}

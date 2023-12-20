import { MinusCircle, PlusCircle, Trash } from 'lucide-react';

export default function CartItem({ item, onDecrease, onIncrease, deleteItem }) {
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
}

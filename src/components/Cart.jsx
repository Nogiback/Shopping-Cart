import { Link } from 'react-router-dom';

export default function Cart({ status, toggleCart, cart }) {
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
          status
            ? 'bg-grey-300 absolute left-0 top-0 h-full w-full opacity-50 transition-all'
            : 'hidden'
        }`}
      ></div>
      <div
        className={`bg-white-100 absolute right-0 top-[72px] z-10 h-auto w-[420px] overflow-y-scroll rounded-l-xl p-4 md:top-[84px] ${
          status
            ? 'translate-x-0 transform transition-transform duration-700'
            : 'translate-x-full transform transition-transform duration-700'
        }`}
      >
        <div>
          <h2>Your Cart</h2>
          <button>X</button>
        </div>
        {cart.length === 0 ? (
          <div className=''>
            <p className=''>There are currently no items in your cart.</p>
            <Link to='/shop' className=''>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className=''>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <img src={item.img} alt={item.name}></img>
                  </div>
                </div>
              );
            })}
            <p>Total: ${calculateSubtotal()}</p>
            <Link to='/' className=''>
              Checkout
            </Link>
            <Link to='/shop' className=''>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default function Cart({ status, toggleCart, cart }) {
  function calculateSubtotal() {
    return cart.reduce(
      (currentTotal, item) => currentPrice + item.price * item.quantity,
      0,
    );
  }

  return <div className='h-[calc(100%-80px)]'>Cart</div>;
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartActive, setCartActive] = useState(false);

  function toggleCart() {
    if (!cartActive) {
      setCartActive(true);
      document.body.style.overflowY = 'hidden';
      window.scrollTo(0, 0);
    } else {
      setCartActive(false);
      document.body.style.overflowY = 'auto';
    }
  }

  function addToCart(productName, price, quantity, productImage) {
    const itemExists = cart.findIndex((item) => item.name === productName);

    if (itemExists !== -1) {
      const updatedQuantity = cart[itemExists].quantity + quantity;
      setCart((prevCart) => {
        prevCart[itemExists].quantity = updatedQuantity;
        return [...prevCart];
      });
    } else {
      const newItem = {
        id: uuidv4(),
        name: productName,
        price: price,
        quantity: quantity,
        img: productImage,
      };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.name !== product.name));
  }

  function decreaseCartItemQuantity(product) {
    if (product.quantity === 1) {
      removeFromCart(product);
      return;
    } else {
      const newQuantity = product.quantity - 1;
      updateCartItemQuantity(product, newQuantity);
    }
  }

  function increaseCartItemQuantity(product) {
    if (product.quantity === 99) return;
    const newQuantity = product.quantity + 1;
    updateCartItemQuantity(product, newQuantity);
  }

  function updateCartItemQuantity(product, newQuantity) {
    setCart(
      cart.map((item) => {
        if (item.name === product.name) {
          item.quantity = newQuantity;
        }
        return item;
      }),
    );
  }

  return (
    <>
      <Router>
        <NavBar toggleCart={toggleCart} cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route
            path='/shop/:productName'
            element={
              <ProductPage addToCart={addToCart} toggleCart={toggleCart} />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Cart
          cartStatus={cartActive}
          toggleCart={toggleCart}
          cart={cart}
          onDecrease={decreaseCartItemQuantity}
          onIncrease={increaseCartItemQuantity}
          deleteItem={removeFromCart}
        />
        <Footer />
      </Router>
    </>
  );
}

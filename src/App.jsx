import { useState, useEffect } from 'react';
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
  const [cartActive, setCartActive] = useState(true);

  function toggleCart() {
    if (!cartActive) {
      setCartActive(true);
    } else {
      setCartActive(false);
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

  function removeFromCart(productName, productImage, price, quantity) {}

  return (
    <>
      <Router>
        <NavBar toggleCart={toggleCart} cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route
            path='/shop/:productName'
            element={<ProductPage addToCart={addToCart} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Cart status={cartActive} toggleCart={toggleCart} cart={cart} />
        <Footer />
      </Router>
    </>
  );
}

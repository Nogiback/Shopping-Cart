import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartActive, setCartActive] = useState(false);

  function toggleCart() {
    if (!cartActive) {
      setCartActive(true);
    } else {
      setCartActive(false);
    }
  }

  function addToCart(itemName, itemImage, price, quantity) {}

  function removeFromCart(itemName, itemImage, price, quantity) {}

  return (
    <>
      <Router>
        <NavBar toggleCart={toggleCart} cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/store/:title' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

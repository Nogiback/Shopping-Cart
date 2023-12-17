import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import Shop from './pages/Shop';
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

  function addToCart(productName, productImage, price, quantity) {}

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
        {/* <Cart status={cartActive} toggleCart={toggleCart} cart={cart} /> */}
        <Footer />
      </Router>
    </>
  );
}

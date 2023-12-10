import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-sky-700 p-4">
      <h1 className="text-3xl font-bold text-orange-500">Nogi Shop</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/store">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

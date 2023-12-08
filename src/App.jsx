import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' />
          <Route path='/store' />
        </Routes>
      </Router>
    </>
  )
}
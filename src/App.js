
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { products } from './data/products.mjs';
import Nav from './components/Nav';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

import './App.css';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Steve Rector
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="/staff" element={<StaffPage/>} />   
                <Route path="/order" element={<OrderPage />}/>
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Steve Rector</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;

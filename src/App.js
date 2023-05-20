
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';

import './App.css';

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
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="/blog" element={<BlogPage />} /> 

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;

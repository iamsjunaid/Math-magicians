import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  const [activeLink, setActiveLink] = useState('/'); // Set initial active link to "/"
  return (
    <div className="App">
      <nav>
        <h1 className="title">Math Magicians</h1>
        <ul className="links-container">
          <li>
            <Link
              to="/"
              onClick={() => setActiveLink('/')}
              className={activeLink === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="vl" />
          <li>
            <Link
              to="/quote"
              onClick={() => setActiveLink('/quote')}
              className={activeLink === '/quote' ? 'active' : ''}
            >
              Quote
            </Link>
          </li>
          <li className="vl" />
          <li>
            <Link
              to="/calculator"
              onClick={() => setActiveLink('/calculator')}
              className={activeLink === '/calculator' ? 'active' : ''}
            >
              Calculator
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;

// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;

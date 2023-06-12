import './App.css';
import Calculator from './components/Calculator.js';
import Quote from './components/Quote.js';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;

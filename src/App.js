import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
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

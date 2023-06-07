import './styles/calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    const clicked = event.target.textContent;
    const value = calculate(calculatorData, clicked);
    setCalculatorData(value);
  };

  const { total, operation, next } = calculatorData;
  return (
    <div>
      <div className="container">
        <div className="screen"><p>{ next || operation || total || 0 }</p></div>
        <div className="row-1">
          <div><button type="submit" className="btn" id="ac" onClick={handleButtonClick}>AC</button></div>
          <div><button type="submit" className="btn" id="addsub" onClick={handleButtonClick}>+/-</button></div>
          <div><button type="submit" className="btn" id="mod" onClick={handleButtonClick}>%</button></div>
          <div><button type="submit" className="btn btn-orange" id="div" onClick={handleButtonClick}>÷</button></div>
        </div>
        <div className="row-2">
          <div><button type="submit" className="btn" id="seven" onClick={handleButtonClick}>7</button></div>
          <div><button type="submit" className="btn" id="eight" onClick={handleButtonClick}>8</button></div>
          <div><button type="submit" className="btn" id="nine" onClick={handleButtonClick}>9</button></div>
          <div><button type="submit" className="btn btn-orange" id="mul" onClick={handleButtonClick}>x</button></div>
        </div>
        <div className="row-3">
          <div><button type="submit" className="btn" id="four" onClick={handleButtonClick}>4</button></div>
          <div><button type="submit" className="btn" id="five" onClick={handleButtonClick}>5</button></div>
          <div><button type="submit" className="btn" id="six" onClick={handleButtonClick}>6</button></div>
          <div><button type="submit" className="btn btn-orange" id="min" onClick={handleButtonClick}>-</button></div>
        </div>
        <div className="row-4">
          <div><button type="submit" className="btn" id="one" onClick={handleButtonClick}>1</button></div>
          <div><button type="submit" className="btn" id="two" onClick={handleButtonClick}>2</button></div>
          <div><button type="submit" className="btn" id="three" onClick={handleButtonClick}>3</button></div>
          <div><button type="submit" className="btn btn-orange" id="add" onClick={handleButtonClick}>+</button></div>
        </div>
        <div className="row-5">
          <div><button type="submit" className="btn" id="zero" onClick={handleButtonClick}>0</button></div>
          <div><button type="submit" className="btn" id="point" onClick={handleButtonClick}>.</button></div>
          <div><button type="submit" className="btn btn-orange" id="equal" onClick={handleButtonClick}>=</button></div>
        </div>
      </div>
    </div>
  );
}

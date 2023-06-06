/* eslint linebreak-style: ["error", "windows"] */
import './styles/calculator.css';

const Calculator = () => (
  <div>
    <div className="container">
      <div className="input-container"><input type="text" /></div>
      <div className="row-1">
        <div><button type="submit" className="btn" id="ac">A/C</button></div>
        <div><button type="submit" className="btn" id="addsub">+/-</button></div>
        <div><button type="submit" className="btn" id="mod">%</button></div>
        <div><button type="submit" className="btn btn-orange" id="div">÷</button></div>
      </div>
      <div className="row-2">
        <div><button type="submit" className="btn" id="seven">7</button></div>
        <div><button type="submit" className="btn" id="eight">8</button></div>
        <div><button type="submit" className="btn" id="nine">9</button></div>
        <div><button type="submit" className="btn btn-orange" id="mul">x</button></div>
      </div>
      <div className="row-3">
        <div><button type="submit" className="btn" id="four">4</button></div>
        <div><button type="submit" className="btn" id="five">5</button></div>
        <div><button type="submit" className="btn" id="six">6</button></div>
        <div><button type="submit" className="btn btn-orange" id="min">-</button></div>
      </div>
      <div className="row-4">
        <div><button type="submit" className="btn" id="one">1</button></div>
        <div><button type="submit" className="btn" id="two">2</button></div>
        <div><button type="submit" className="btn" id="three">3</button></div>
        <div><button type="submit" className="btn btn-orange" id="add">+</button></div>
      </div>
      <div className="row-5">
        <div><button type="submit" className="btn" id="zero">0</button></div>
        <div><button type="submit" className="btn" id="point">.</button></div>
        <div><button type="submit" className="btn btn-orange" id="equal">=</button></div>
      </div>
    </div>
  </div>
);

export default Calculator;

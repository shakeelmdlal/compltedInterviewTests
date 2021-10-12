

import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState();
  const [inputVal, setInputVal] = useState('');
  const [prevValue, setPrevValue] = useState()
  const [funcBtn, setFuncBtn] = useState('')

  const plus = (e) => {
    setFuncBtn(e.target.name)
    setPrevValue(inputVal)
    setInputVal('')
  }
  
  const minus = (e) => {
    setFuncBtn(e.target.name)
    setPrevValue(inputVal)
    setInputVal('')
  }

  const numBtn = (e) => {
    setInputVal(inputVal.concat(e.target.name));
    console.log(inputVal)
  }

  const calculate = () => {
    if (funcBtn === "plus") {
      let preVal = prevValue;
      preVal = parseInt(preVal) + parseInt(inputVal)
      setResult(preVal)
    }
    if (funcBtn === "minus") {
      let preVal = prevValue;
      preVal = parseInt(preVal) - parseInt(inputVal)
      setResult(preVal)
    }
  }


  return (
    <div className="App">
      {result}
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button name="1" onClick={numBtn}>1</button>
      <button name="2" onClick={numBtn}>2</button>
      <button name="plus" onClick={plus}>plus</button>
      <button name="minus" onClick={minus}>Minus</button>
      <button onClick={() => calculate()}>Enter</button>
    </div>
  );
}

export default App;

// import React, { useState,useEffect,useRef } from 'react';
// import './App.css';

// function App() {
//   const [result,setResult]=useState("");
//   const inputRef=useRef(null);
//   useEffect(()=>inputRef.current.focus()); 

//   function handleclick(e){
//       setResult(result.concat(e.target.name));
//   }
//   function backspace(){
//     setResult(result.slice(0,result.length-1))
//   }
//   function clear(){
//     setResult("")
//   }
//   function calculate(){
//     try{
//       setResult(eval(result).toString());
//     }
//     catch(error){
//       setResult("Error");
//     }
//   }
//   return (
//     <div className="calc-app">
//     <form>
//       <input type="text" value={result} ref={inputRef}/>
//     </form>
//       <div className="keypad">
//         <button name="1" onClick={handleclick}>1</button>
//         <button name="2" onClick={handleclick}>2</button>
//         <button name="3" onClick={handleclick}>3</button>
//         <button name="+" onClick={handleclick}>+</button>
//         <button name="4" onClick={handleclick}>4</button>
//         <button name="5" onClick={handleclick}>5</button>
//         <button name="6" onClick={handleclick}>6</button>
//         <button name="-" onClick={handleclick}>-</button>
//         <button name="7" onClick={handleclick}>7</button>
//         <button name="8" onClick={handleclick}>8</button>
//         <button name="9" onClick={handleclick}>9</button>
//         <button name="*" onClick={handleclick}>*</button>
//         <button name="0" onClick={handleclick}>0</button>
//         <button name="/" onClick={handleclick}>/</button>
//         <button onClick={clear}>Clear</button>
//         <button onClick={backspace}>Back</button>    
//         <button id="result" onClick={calculate}>Result</button>
//       </div>

//     </div>
//   );
// }
// export default App;

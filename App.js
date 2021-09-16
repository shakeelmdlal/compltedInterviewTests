import React from "react";
import "./index.css";
import "./App.css";
// import Calculator from "./calculator"
// import Stocks from "./stocks"
// import NotesApp from "./NotesApp"
// import Movies from "./movieList"
// import SearchStudent from './CheckAvailability/Search';
import ShoppingCart from './ShoppingCart';
import {fizzbuzz} from './FizzBuzz'

function App() {


  return (
    <div className="App">
      {/* <p style={{backgroundColor:'#ff0000', color:'white', height:'30px'}}>
       /////////// Calculator Test //////////
    </p>
     <Calculator />
     <p style={{backgroundColor:'#ff0000', color:'white', height:'30px'}}>
       /////////// Stocks Test //////////
       </p>
     <Stocks />
     <p style={{backgroundColor:'#ff0000', color:'white', height:'30px'}}>
       /////////// Movies list Test //////////
       </p>
      <Movies />
      <p style={{backgroundColor:'#ff0000', color:'white', height:'30px'}}>
        /////////// NotesApp Test //////////
      </p>
      <NotesApp /> */}
      {/* <p style={{ backgroundColor: '#ff0000', color: 'white', height: '30px' }}>
        /////////// Check Student Availability Test //////////
      </p>
      <SearchStudent /> */}

      <p style={{ backgroundColor: '#ff0000', color: 'white', height: '30px' }}>
        /////////// ShoppingCart Test //////////
      </p>
      <ShoppingCart />
   
    </div>
  );
}

export default App
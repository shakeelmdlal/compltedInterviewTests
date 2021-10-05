'use strict';
import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
 // process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString: string = '';
  let inputLines: string[] = [];
  let currentLine: number = 0;

  process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
  });

  process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
  });

  function readLine(): string {
    return inputLines[currentLine++];
  }

  function fizzBuzz(num: number){
    if (num % 15 === 0) {
      return "fizzbuzz";
    }
    if (num % 3 === 0) {
      return "fizz";
    }
    if (num % 5 === 0) {
      return "buzz";
    }
    return num;
  
  }
  
  function main() {
      const n: number = parseInt(readLine().trim(), 10);
      console.log(n)
  
    fizzBuzz(n);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;

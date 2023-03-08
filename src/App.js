import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('lmao')

  function decrementCount(){
    setCount(count-1)
  }

  function incrementCount() {
    setCount(count+1)
  }

  return (
    <div className=" flex gap-1 justify-center items-center">
      <button className=' text-3xl bg-slate-400 rounded-lg p-1' onClick={decrementCount}>-</button>
      <span className=' text-3xl'>{count}</span>
      <span className=' text-3xl'>{theme}</span>
      <button className=' text-3xl bg-slate-400 rounded-lg p-1' onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;

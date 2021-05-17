import React from 'react';
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {incrementNumber, decrementNumber} from './actions/index'

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
        <div className="container">

          <h1>Increment / Decrement Counter</h1>
          <h4>Using React & Redux</h4>

          <div className="quantity">
            <a href="#" className="quantity__minus" title="Decrement" onClick={() => dispatch(decrementNumber())} ><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a href="#" className="quantity__plus" title="Increment" onClick={() => dispatch(incrementNumber())} ><span>+</span></a>
          </div>
      </div>
    </>
  )
}

export default App

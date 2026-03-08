import './counter.css';
import { useState } from 'react';

function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div className="counter">
            <div className="count-show">
                <h1>{count}</h1>
            </div>
            <div className="count-btn">
                <button className="count-button"onClick={()=>setCount(count-1)}>Decrement</button>
                <button className="count-button" onClick={()=>setCount(count+1)}>Increment</button>
            </div>
            <div className="count-reset">
                <button className="count-button" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
export default Counter;
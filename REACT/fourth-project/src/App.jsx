import {useState} from 'react'
import './App.css'

function App(){
    const [count, setCount]=useState(0)
    return(
        <div className='counter-container'>
            <h1>Counter App</h1>
            <div className='counter-display'>{count}</div>
            <div className='counter-buttons'>
                <button className='check' onClick={()=>setCount(count-1)}>Decrement</button> 
                <button className='check' onClick={()=>setCount(count+1)}>Increment</button>
            </div>
            <div className='counter-reset'>
              <button className='check' onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )

}
export default App
import { useState } from 'react'
import './App.css'

function App(){
  const [task,setTask]=useState("");
  const [tasks, setTasks]=useState([]);

  const addTask =()=>{
    if(task==="") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask =(index)=>{
    const newTasks=tasks.filter((_,i)=> i !== index);
    setTasks(newTasks)
};

return(
  <div className="app">
    <h1>Todo App</h1>
    <div className="input-container">
    <input type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addTask}>Add</button>
    </div>
    <ul>
      {tasks.map((item,index)=>(
        <li key={index}>
          {item}
          <button onClick={()=>deleteTask(index)}>X</button>
        </li>
      ))}
    </ul>
    
  </div>
)}

export default App;
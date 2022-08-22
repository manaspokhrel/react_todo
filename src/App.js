import React, {useState} from "react";
import './App.css'
const App = () => {
const [todos, setTodo] = useState([])
const [userinput, setUserInput] = useState([])
const addData = () => {
setTodo([...todos, userinput])
}
return ( <div>
  <h1>Todo List</h1>
  <input onChange = {(event) => setUserInput([...todos,event.target.value])} type = "text" ></input>
  <button onClick={() => addData()} >Add</button>
  <ul>
    {
      todos.map((todo,index) => <li key = "index">{todo}</li> ) 
    }
  </ul>
  </div>
)
}
export default App;
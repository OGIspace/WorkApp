import Navbar from "./Components/NavBar/NavBar";
import { useState } from "react";
import ToDo from "./Components/ToDo/ToDo";
import ToDoForm from "./Components/ToDo/ToDoForm";



const App = ( ) => {
  
  const [todos, setTodos] = useState([])
    
  const addTask = (userInput) => {
      if(userInput) {
        const newItem = {
          id: Math.random().toString(36),
          task: userInput,
          complete: false
        }
        setTodos([todos, newItem])
      }
    }
  const removeTask = (id) => {
      setTodos([todos.filter((todo) => todo.id !== id)])
    }
  
    const handleToggle = (id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? { todo, complete: !todo.complete } : {todo }
        )
      ])
    }

  return (
    <>
   
      <Navbar/>
     
    </>
  );
};

export default App;
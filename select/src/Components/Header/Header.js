import React from "react";
import { useState } from "react";
import ToDo from "../ToDo/ToDo";

const Header = () => {
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
    <div className="container_header">
        <div className="header">
        <header>
              <h1>Список задач: {todos.length}</h1>
          </header>
          {todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
                />
               )
              })}
        </div>
    </div>

     );
}
 
export default Header;
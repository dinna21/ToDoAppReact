import { useState } from 'react';
import './style.css'

export default function App() {
  const [newItem,setNewItem] = useState("")
  const [todos,setTodos] = useState([])

  function HandleAddBtn(e)
  {
    e.preventDefault()

    setTodos((currentTodos) =>{
          return [
          ...todos,{id: crypto.randomUUID(),title: newItem,completed: false},
        ]
    })
    setNewItem("")
  }
  function toggleToDo(id,completed){
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if(todo.id == id){
            todo.completed = completed
            return { ...todo,completed }
          }
          return todo
        })
      })
  }
  
  // console.log(todos)
  return (
    <>
      <form onSubmit={HandleAddBtn} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" id="item" />
      </div>
      <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}
              onChange={e=>toggleToDo(todo.id,e.target.checked)}
              />{todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>


  );
}
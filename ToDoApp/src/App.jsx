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
  }
  console.log(todos)
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
        <li>
          <label>
            <input type="checkbox"/>Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
                <li>
          <label>
            <input type="checkbox"/>Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
                <li>
          <label>
            <input type="checkbox"/>Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
                <li>
          <label>
            <input type="checkbox"/>Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>


  );
}
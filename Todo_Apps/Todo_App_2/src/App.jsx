import { useState } from 'react'
import "./css/App.module.css";

function App() {
  const [item, setItem] = useState('')
  const [todo, setTodo] = useState([])

  const onClickHandler = (e) => {
    e.preventDefault();
    e.target.value != '' ? setTodo((pre) => {
      return [...pre, { name: e.target.value }]
    }) : <li>Enter any Todo here</li>
  }
  console.log(todo);

  return (
    <div>

      <form onSubmit={onClickHandler}>

        <label htmlFor='item' >TODO list</label>

        <input
          placeholder='Enter new todo here'
          value={item}
          onChange={(e) => {
            console.log(e.target.value);
            setItem(()=>{
              e.target.value
            })
          }}
          type="text"
          id='item' />

        <button htmlFor='item'>ADD</button>

      </form>

      <ul>

        {todo.map(todoItem => {
          return (<li>
            {/* <label> */}
            {/* <input type="checkbox" /> */}
            <p>{todoItem.name}</p>
            <button>Delete</button>
            {/* </label> */}
          </li>)
        })
        }

      </ul>

    </div>
  )
}

export default App
// defaultChecked={todoItem.check}
// key={todoItem.name}
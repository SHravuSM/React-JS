// import React, { useState } from 'react'

// export default function App() {
//   const [item, setItem] = useState('')
//   const [todos, setTodos] =useState([])

//   // console.log(item);
//   console.log(todos);

//   const submitHandler = (e) => {
//     e.preventDefault()
//     setTodos((pre)=>{
//       return [...pre, {name : item}]
//     })
//   }

//   return (
//     <div>

//       <form onSubmit={submitHandler}>
//         <label htmlFor="item">Todo list</label>
//         <input value={item} type="text" id='item' onChange={(e) => setItem(e.target.value)} />
//         <button>ADD</button>
//       </form>

//       <ul>
//         {
//         todos.map((to)=>{
//           <li>
//           <input type="text" />
//           <p>{to.name}</p>
//           <button>DELETE</button>
//         </li>
//         })}
//       </ul>

//     </div>
//   )
// }




import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [item, setItem] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {

    e.preventDefault();
    if (todos.length < 6) {
      setTodos(pre => {
        return [...pre, item]
      })
    }
  }


  const handleDelete = (evt) => {

    // alert(`deleting ${evt.target.value}`)
    setTodos(todos.filter((val) => {
      return val != evt.target.value
    }))
    setItem('')




    // setTodos()
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Todo list</label>
        <input type="text" id='item' placeholder={todos.length === 0 ? "Start adding Todo's" : "add more Todo's"} onChange={e => setItem(e.target.value)} value={item} />
        <button>ADD</button>
      </form>
      {todos.length == 0 ? <h1>Welcome Start adding new TODO's</h1> : <ul>
        {todos.map(todoItem => <li key={todoItem}>
          <input type="checkbox" name="tic" id="todoItem" />
          <label htmlFor="todoItem">{todoItem}</label>
          {/* {console.log(todoItem)} */}
          <button value={todoItem} onClick={handleDelete}>DELETE</button>

        </li>
        )}
      </ul>}
    </div>
  )
}
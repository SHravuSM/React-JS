import { useRef, useState } from 'react';
import './App.css'
import Heading from "./components/Heading";
import Input from './components/Input';
import Items from './components/Items';
import Start from './components/Start';

function App() {

  const [items, setItems] = useState([])
  let inref = useRef()

  function handleAdd(tasks, dates) {
    if(tasks != '' && dates != ''){
      console.log(`task : ${tasks} & date : ${dates}`);
    setItems(
      [...items, { task: tasks, date: dates },
      ]);
    }
  }

  function handleDelete(item) {
    let newList = items.filter(todoitem => todoitem.task !== item)
    setItems(newList)
    console.log(item, 'deleted');

  }

  return (
    <>

      <Heading></Heading>

      <Input 
      inref = {inref}
      onAdd = {handleAdd}>
      </Input>

      {items.length == 0 && <Start />}

      <Items handleDelete={handleDelete} item={items} />

    </>
  )
}

export default App

import React, { useState } from 'react'

export default function Input({ onAdd, inref }) {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  function onEnter(e) {
    if (e.target.value != null) {
      setText(e.target.value);
    }
    else{
      setDate(e.target.value = 'add any task')
    }
  }

  function onSelect(e) {
    if (e.target.value != null) {
      setDate(e.target.value)
    }
    else{
      setDate(e.target.value = 'add any task')
    }
  }

  function send() {
    onAdd(text, date);
    setText('');
    setDate('');
  }

  return (
    <div ref={inref} className='Input'>

      <input onChange={onEnter} type="text" placeholder='Enter new task here' value={text} />

      <input onChange={onSelect} type="date" value={date} />

      <button onClick={send}>ADD</button>

    </div>
  )
}

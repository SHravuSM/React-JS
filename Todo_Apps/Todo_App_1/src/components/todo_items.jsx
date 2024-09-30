import React from 'react'

export default function Todo_items({ task, date, onDelete }) {
    return (
        <div className='container'>

            <div>{task}</div>

            <div>{date}</div>

            <button onClick={() => { onDelete(task) }}>Delete</button>
        </div>
    )
}

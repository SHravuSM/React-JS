import React from 'react'

export default function Tasks({task,time}) {

  const div = { 
    fontSize: "20px", textAlign: 'center', color: 'white', display: 'inline-block', margin: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: "100px", width: '500px', backgroundColor: 'black', borderRadius: '7px'
  }

  return (
    <>
      <center>
        <div style={div}>
          <input style={{ height: '100px', }} type="checkbox" name="Task" id="T_no" />
          <div >{task}</div>
          <div >{time}</div>
          <button style={{ borderRadius: '8px', backgroundColor: 'black', color: 'red', }}>Delete</button>
        </div>
      </center>
    </>
  )
}

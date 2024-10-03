import { useState } from 'react'
import Board from './TicTacToe/Board'

function App() {

  


  return (
    <div className='w-[100%] h-screen border-2 flex flex-col justify-between items-center'>
      
      <h1 className='text-6xl pt-10 p-5 pb-28 underline decoration-slate-300 text-red-400 font-mono'>TIC-TAC-TOE</h1>
      
      <Board />

    </div>
  )
}

export default App

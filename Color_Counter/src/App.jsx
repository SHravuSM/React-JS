import React, { useEffect, useContext, useReducer, useState } from 'react'
import { Contextstore } from './Context'

export default function App() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const store = useContext(Contextstore)

    const [name, setName] = useState('Karthik')

    useEffect(() => {
        let name = prompt('What is Your Name : ')
        setName(name)
        store.setName(name)
    }, [])

    useEffect(() => {
        document.title = name + ` : ${state.count}`
    }, [[], state.count])

    let changeColor = () => {
        let Color = Math.trunc((Math.random(store.cooler)) * 10)
        store.setColor(store.cooler[Color])
    }

    function reducer(state, action) {

        switch (action.type) {

            case "increment":
                return { count: state.count + 1 }

            case 'decrement':
                return { count: state.count - 1 }

        }
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <h1 style={{
                color: 'white',
                fontSize: '100px',
                margin: '10px',
                visibility: state.count >= -8 ? 'visible' : 'hidden'
            }} onMouseMove={() => {
                dispatch({ type: 'decrement' })
                changeColor()
                store.setFsi((state.count + 10) - 1)
            }}>-</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: `${store.fsi}px`,
                gap: '35px',
                height: '50%',
                width: '70%',
                border: `2px solid ${store.color}`,
                borderRadius: '7px',
            }}>

                <h1 style={{ color: 'white' }}>Hello {store.Name} <span style={{ color: store.color }}>{state.count}</span></h1>

            </div >

            <h1 style={{
                color: 'white',
                fontSize: '100px',
                visibility: state.count <= 45 ? 'visible' : 'hidden'
            }} onMouseMove={() => {
                dispatch({ type: 'increment' })
                changeColor()
                store.setFsi(state.count + 10)
            }}>+</h1>

        </div >
    )
}

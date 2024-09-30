import React, { createContext, useState } from 'react'

export const Contextstore = createContext()

export default function ContextProvider({ children }) {

    const cooler = ['red', 'green', 'blue', 'white', 'yellow', 'tomato', 'purple', 'peru', 'skyblue', 'khaki']

    const [color, setColor] = useState('white');

    let [fsi, setFsi] = useState(10);

    const [Name, setName] = useState('Karthik')

    return (
        <Contextstore.Provider value={{
            color, setColor,
            Name, setName, cooler,
            fsi, setFsi
        }}>
            {children}
        </Contextstore.Provider>
    )
}

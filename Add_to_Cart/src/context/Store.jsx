import React, { useContext } from 'react'
import { createContext, useState } from "react";

const storeContext = createContext(null)

export let useCart = () => {
    let cart = useContext(storeContext);
    return cart;
}
export default function StoreProvider(props) {
    const [items, setItmes] = useState([])

    return (
        <div>
            <storeContext.Provider value={{
                items,
                setItmes,
            }}>
                {props.children}
            </storeContext.Provider>
        </div>
    )
}

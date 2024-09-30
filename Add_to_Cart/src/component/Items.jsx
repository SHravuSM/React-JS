import React from 'react'
import { useCart } from '../context/Store'

export default function Items(prop) {
    let storeItems = useCart()
    var ls_style={
                listStyle:'none'
            }

    function handleAdd() {
        storeItems.setItmes([...storeItems.items, { name: prop.name, price: prop.price }])
    }

    return (
        <div>
            <ul style={ls_style}>
                <li>{prop.name}</li>
                <li>{prop.price}</li>
                <button onClick={handleAdd}>Add to Cart</button>
            </ul>
        </div>
    )
}
import React from 'react'
import { useCart } from '../context/Store'

export default function Cart() {

    let cart = useCart()

    return (
        <div>
            <h1>Cart</h1>
            {cart.items.map((item) => <li>{item.name} - ${item.price} </li>

            )}
            <br />
            <p>Total -${cart.items.reduce((cip, nip) => {
                return cip + nip.price
            }, 0)}</p>
            <hr />
        </div>
    )
}

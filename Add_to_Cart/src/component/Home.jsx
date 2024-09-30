import React from 'react'
import Items from './Items'
import Cart from './Cart'

export default function Home() {
  return (
    <div>
      <Items name = 'MacBook' price = {1500}></Items>
      <Items name = 'GalaxyBook' price = {1600}></Items>
      <Items name = 'SurfaceBookPro' price = {1800}></Items>
      <br />
      <hr />
      <Cart></Cart>
    </div>
  )
}

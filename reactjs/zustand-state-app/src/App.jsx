import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userCartStore from './store/userCartStore';

function App() {
  const [count, setCount] = useState(0);
  const { cart, addToCart } = userCartStore();
  console.log(cart)
  return (
    <>
        <h2>Cart ({cart.length})</h2>
      <button onClick={() => addToCart({ id: Date.now(), name: "Item" })}>
        Add Item
      </button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Category from './components/Category'
import productCategory from './components/productCategory'
import CartItem from './components/CartItem'

function App() {
  const category = productCategory()
  const [cartItems, setCartItems] = useState([])
  console.log("cartItems", cartItems)
  return (
    <div className='main-container'>
      <div className='category-list'>
        {category.map((value, index) => (
          <Category key={index} productCategory={value} cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>
      <CartItem cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default App

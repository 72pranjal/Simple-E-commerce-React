import { useState } from 'react'
import './App.css'
import Category from './components/Category'
import productCategory from './components/productCategory'
import CartItem from './components/CartItem'
import Header from './components/Header'

function App() {
  const category = productCategory()
  const [activeCat, setActiveCat] = useState(`men's clothing`)
  const [cartItems, setCartItems] = useState([])
  console.log("cartItems", cartItems)
  return (
    <div className='main-container'>
      <div className='category-list'>
        <Header category={category} activeCat={activeCat} setActiveCat={setActiveCat} />
        {/* {category.map((value, index) => ( */}
          <Category productCategory={activeCat} cartItems={cartItems} setCartItems={setCartItems} />
        {/* ))} */}
      </div>
      <CartItem cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default App

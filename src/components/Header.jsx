import React from 'react'

const Header = ({category, activeCat, setActiveCat})=> {
  return (
    <div className='category-container'>
        <ul className='category-list-header'>
            {
                category.map((item, index)=> {
                    return (
                        <li onClick={()=> setActiveCat(item)} className={activeCat === item ? 'active' : ''} key={index}>{item}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Header
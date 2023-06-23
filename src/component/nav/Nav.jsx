import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import './nav.css'

const Nav = () => {
    const cartProducts = useSelector(state => state.cart);
  return (
    <div className='navbar'>
        <NavLink to='product' className={({isActive}) => isActive ? 'nav_product' : 'nav_product1'}>Product</NavLink>
        <NavLink to='cart' className={({isActive}) => isActive ? 'nav_product cartt' : 'nav_product1 cartt'}>
          <BsCart3 />
          <h4 className='cart_number'>{cartProducts.length}</h4>
        
        </NavLink>

    </div>
  )
}

export default Nav

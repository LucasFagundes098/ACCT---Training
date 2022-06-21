import React from 'react'
import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar'>
            <h1>ACCT - React</h1>
            <div className='navbar-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/teste'>
                            <i className='cart-icon'><FaShoppingCart/></i>
                        </Link>
            </div>
        </nav>
  )
}

export default Navbar
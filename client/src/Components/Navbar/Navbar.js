import React from 'react'
import Links from '../Links'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar--page'>
        <p>Agence et consultation</p>
        <ul className="navbar--page_links">
            <Links />
        </ul>
    </div>
  )
}

export default Navbar
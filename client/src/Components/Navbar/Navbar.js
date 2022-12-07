import React from 'react'
import Links from '../Links'
import Flag from 'react-flagkit';

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar--page'>
        <p>ProUni Group</p>
        <ul className="navbar--page_links">
            <Links />
        </ul>
        <div className="navbar--page_flag">
        <Flag country="US" /> | <Flag country="FR" />
        </div>
    </div>
  )
}

export default Navbar
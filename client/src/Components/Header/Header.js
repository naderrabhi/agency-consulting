import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header--page'>
        <p>Nos services sont maintenant disponibles en ligne  → <Link to="/contact">Contactez-nous</Link></p>
    </div>
  )
}

export default Header
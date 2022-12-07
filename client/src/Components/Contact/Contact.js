import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact--page section__padding'>
      <p>Nos services sont maintenant disponibles en ligne  → </p>
      <Link to='/contact'><button className='btn--costum btn--costum_hover'>Contatez-nous</button></Link>
    </div>
  )
}

export default Contact
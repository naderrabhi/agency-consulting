import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact--page section__padding'>
      <p>Contactez-nous dès aujourd'hui</p>
      <Link to='/contact'><button className='btn--costum btn--costum_hover'>Contatez-nous</button></Link>
    </div>
  )
}

export default Contact
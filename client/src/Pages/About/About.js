import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from '../../assets/images/about.jpg'
import './about.css'

const About = () => {
  return (
    <div className='about--page section__padding'>
        <img className='about--page_img' src={aboutImage} alt="about nous" />
        <div className="about--page_content">
            <h1>Qui sommes-nous ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis officia deleniti necessitatibus eius similique quis quasi qui quia, assumenda ad veritatis odio, numquam iste rem aperiam mollitia error iusto ut.</p>
            <Link to='/services'><button className='btn--costum btn--costum_hover'>Nos Services</button></Link>
        </div>
    </div>
  )
}

export default About
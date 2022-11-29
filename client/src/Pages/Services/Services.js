import React from 'react'
import { Link } from 'react-router-dom'
import {data} from '../../assets/data'

import './services.css'

const Services = () => {
  return (
    <div className='services--page section__padding'>
        {data.map(service => <div key={service._id} className="services--page_content">
            <div className="services--content_description">
                <p>{service.content}</p>
            </div>
            <div className="services--content_info">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <Link to={service.path}><button className='btn--costum btn--costum_hover'>En savoir plus</button></Link>
            </div>
        </div>)} 
    </div>
  )
}

export default Services
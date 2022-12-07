import React from 'react'
import {data} from '../../assets/data'
import ServiceCard from '../../Components/ServiceCard'

import './services.css'

const Services = () => {
  return (
    <div className='services--page section__padding'>
        {data.map(service => <ServiceCard key={service._id} service={service} />)} 
    </div>
  )
}

export default Services
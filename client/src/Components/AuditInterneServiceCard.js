import React from 'react'

const AuditInterneServiceCard = ({service}) => {
  return (
    <div className='AuditInterneBody'>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
    </div>
  )
}

export default AuditInterneServiceCard
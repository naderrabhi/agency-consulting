import React from 'react'
import AuditInterneServiceCard from './AuditInterneServiceCard'

const AuditInterneBody = ({servicedata}) => {
  return (
    <div className="auditInter--page_list">
        <h1 className='header--h'>Nos services d’Audit Interne</h1>
        {servicedata.map(service => <AuditInterneServiceCard key={service._id} service={service} />)}   
    </div>
  )
}

export default AuditInterneBody
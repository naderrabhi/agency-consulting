import React from 'react'
import AuditInterneHeader from '../../../Components/AuditInterneHeader'
import AuditInterneBody from '../../../Components/AuditInterneBody'

import {data} from '../../../assets/servicesdata'
import {servicedata} from '../../../assets/servicesdata'

import './serviceauditinterne.css'

const ServiceAuditInterne = () => {
  return (
    <div className='auditInterne--page section__padding'>
        <AuditInterneHeader data={data} />
        <AuditInterneBody servicedata={servicedata} />
    </div>
  )
}

export default ServiceAuditInterne
import React from 'react'

const AuditInterneHeader = ({data}) => {
  return (
    <div className='AuditInterneHeader'>
        <div className="AuditInterneHeader--text">
            <h1 className='header--h'>{data.title}</h1>
            <p className='minitext--p'>{data.description}</p>
            <p className='text--p'>{data.text}</p>
        </div>
        <div className="AuditInterneHeader--img service--w">
            <img className='service--img' src={data.image} alt={data.title} />
        </div>
    </div>
  )
}

export default AuditInterneHeader
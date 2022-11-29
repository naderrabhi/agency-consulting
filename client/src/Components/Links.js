import React from 'react'
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À Propos</Link>
        </li>
        <li>
          <Link to="/services">Nos Services</Link>
        </li>
        <li>
          <Link to="/team">Notre équipe</Link>
        </li>
        <li>
          <Link to="/contact">Contacter Nous</Link>
        </li>
    </>
  )
}

export default Links
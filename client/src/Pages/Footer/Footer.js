import React from "react";
import SocialLink from "../../Components/SocialLink";

import './footer.css'

const Footer = () => {
  return (
    <div className="footer--page section__padding">
      <div className="footer--page_details">
        <div className="footer--details_info">
            <h5>Contactez-nous</h5>
            <p>123 Canada Canada</p>
            <p>123 456 789</p>
        </div>
        <div className="footer--details_info">
            <h5>Heures d'ouverture</h5>
            <p>Lundi - Vendredi</p>
            <p>08:00 - 17:00</p>
            <p>Samedi - Dimanche</p>
            <p>08:00 - 12:00</p>
        </div>
      </div>
      <ul className="footer--page_social">
        <SocialLink />
      </ul>
      <p>2022,Tous droits réservés</p>
    </div>
  );
};

export default Footer;

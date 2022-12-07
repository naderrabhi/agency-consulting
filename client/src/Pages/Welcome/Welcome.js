import React from "react";
import { Link } from "react-router-dom";

import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome--page section__padding" >
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <Link to='/contact'><button className="btn--costum btn--costum_hover">Nous joindre</button></Link>
    </div>
  );
};

export default Welcome;

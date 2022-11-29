import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg1.jpg";

import "./welcome.css";

const Welcome = () => {
  return (
    <div
      className="welcome--page section__padding"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "10% 60%",
        opacity: 0.8
      }}
    >
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <p>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur</p>
      <Link to='/contact'><button className="btn--costum btn--costum_hover">Nous joindre</button></Link>
    </div>
  );
};

export default Welcome;

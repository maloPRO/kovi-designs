import React, { useState } from "react";
import '../styles/homeDisplay.css';
import bg from '../images/bg/bg.jpg';
import bg1 from '../images/bg/bg1.jpg';
import bg2 from '../images/bg/bg2.jpg';

const images = [bg, bg1, bg2];
const HomeDisplay = () => {
  
  const [background] = useState(images[Math.floor(Math.random() * images.length)]);

  return (
    <div className="homeDisplay" style={{backgroundImage: `url(${background})`}}>Shop high-end furniture now!</div>
  )
}

export default HomeDisplay;
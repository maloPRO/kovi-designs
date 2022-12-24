import React from "react";
import '../styles/popular.css';
import dinnerBg from '../images/bg/dining.jpg';
import bedBg from '../images/bg/beds.jpg';
import sofaBg from '../images/bg/sofa.jpg';

const Popular = () => {


  return (
    <div className="popular">
      <h3>Popular categories</h3>
      <div className="popContainer">
        <div className="popSofas" style={{backgroundImage: `url(${sofaBg})`}}>Sofas</div>
        <div className="popBeds" style={{backgroundImage: `url(${bedBg})`}}>Beds</div>
        <div className="popDining" style={{backgroundImage: `url(${dinnerBg})`}}>Dining tables</div>
      </div>
    </div>
  )
}

export default Popular;
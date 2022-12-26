import React from "react";
import { Link } from 'react-router-dom'
import '../styles/popular.css';
import dinnerBg from '../images/bg/dining.jpg';
import bedBg from '../images/bg/beds.jpg';
import sofaBg from '../images/bg/sofa.jpg';

const Popular = () => {


  return (
    <div className="popular">
      <h3>Popular categories</h3>
      <div className="popContainer">
        <Link className="links" to = {`${process.env.PUBLIC_URL}/sofas`} style={{backgroundImage: `url(${sofaBg})`}}>Sofas</Link>
        <Link className="links" to = {`${process.env.PUBLIC_URL}/beds`} style={{backgroundImage: `url(${bedBg})`}}>Beds</Link>
        <Link className="links" to = {`${process.env.PUBLIC_URL}/dining`} style={{backgroundImage: `url(${dinnerBg})`}}>Dining</Link>
      </div>
    </div>
  )
}

export default Popular;
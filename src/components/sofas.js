import React, { useState } from "react";
import Nav from "./nav";
import Categories from "./categories";
import uniqid from 'uniqid';
import sofa from '../images/bg/bg.jpg';
import sofa1 from '../images/bg/bg1.jpg';
import sofa2 from '../images/bg/bg2.jpg';

const Sofas = () => {

  const [sofaPics, setSofaPics] = useState([
    {
      name: 'Brazilian Box Sofa',
      image: `${sofa}`,
      id: uniqid(),
      price: 'KES 30,300'
    },
    {
      name: 'Prana Sofa',
      image: `${sofa1}`,
      id: uniqid(),
      price: 'KES 30,300'
    },
    {
      name: 'Ventura Sofa',
      image: `${sofa2}`,
      id: uniqid(),
      price: 'KES 30,300'
    }
  ]);

  const images = sofaPics.map((sofaPic) => 
    <div className="imageDisplay">
      <img className="images" src={sofaPic.image} alt=''></img>
      <p className="itemName">{sofaPic.name}</p>
      <p className="itemPrice">{sofaPic.price}</p>
    </div>
  )


  return (
    <div>
      <Nav />
      <Categories />
      <div className="sofas">
        <h1>Sofas</h1>
        <div className="sofaDisplay">{images}</div>
      </div>
    </div>
  )
}

export default Sofas;
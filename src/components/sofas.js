import React, { useState } from "react";
import Nav from "./nav";
import Categories from "./categories";
import uniqid from 'uniqid';
import sofa from '../images/items/sofa.jpg';
import sofa1 from '../images/items/sofa1.jpg';
import sofa2 from '../images/items/sofa2.jpg';
import sofa3 from '../images/items/sofa3.jpg';
import '../styles/categories.css';

const Sofas = () => {

  const [sofaPics] = useState([
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
      price: 'KES 43,000'
    },
    {
      name: 'Ventura Sofa',
      image: `${sofa2}`,
      id: uniqid(),
      price: 'KES 40,700'
    },
    {
      name: 'Campa Sofa',
      image: `${sofa3}`,
      id: uniqid(),
      price: 'KES 60,300'
    },
  ]);

  const images = sofaPics.map((sofaPic) => 
    <div key={sofaPic.id} className="imageDisplay">
      <img className="images" src={sofaPic.image} alt=''></img>
      <p className="itemName">{sofaPic.name}</p>
      <p className="itemPrice">{sofaPic.price}</p>
      <p className="addToCart">Add to cart</p>
    </div>
  )


  return (
    <div>
      <Nav />
      <Categories />
      <div className="sofas">
        <h1 className="categoryTitle">Sofas</h1>
        <div className="categoryDisplay">{images}</div>
      </div>
    </div>
  )
}

export default Sofas;
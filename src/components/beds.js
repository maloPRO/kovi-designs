import React, { useState } from "react";
import Nav from "./nav";
import Categories from "./categories";
import '../styles/categories.css';
import uniqid from 'uniqid';
import bed from '../images/items/bed.jpg';
import bed1 from '../images/items/bed1.jpg';
import bed2 from '../images/items/bed2.jpg';
import bed3 from '../images/items/bed3.jpg';

const Beds = () => {

  const [bedPics] = useState([
    {
      name: 'Bed Degrass',
      image: `${bed}`,
      id: uniqid(),
      price: 'KES 50,300'
    },
    {
      name: 'Prana Mexicano',
      image: `${bed1}`,
      id: uniqid(),
      price: 'KES 33,000'
    },
    {
      name: 'Campara Hardwood',
      image: `${bed2}`,
      id: uniqid(),
      price: 'KES 42,000'
    },
    {
      name: 'Ventura bed',
      image: `${bed3}`,
      id: uniqid(),
      price: 'KES 30,100'
    },
  ]);

  const images = bedPics.map((bedPic) => 
    <div key={bedPic.id} className="imageDisplay">
      <img className="images" src={bedPic.image} alt=''></img>
      <p className="itemName">{bedPic.name}</p>
      <p className="itemPrice">{bedPic.price}</p>
    </div>
  )

  return (
    <div>
      <Nav />
      <Categories />
      <div className="beds">
        <h1 className="categoryTitle">Beds</h1>
        <div className="categoryDisplay">{images}</div>
      </div>
    </div> 

  )
}

export default Beds;
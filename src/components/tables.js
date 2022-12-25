import React, { useState } from "react";
import Nav from "./nav";
import Categories from "./categories";
import uniqid from 'uniqid';
import table from '../images/items/table.jpg';
import table1 from '../images/items/table1.jpg';
import table2 from '../images/items/table2.jpg';
import '../styles/categories.css';

const Tables = () => {

  const [tablePics] = useState([
    {
      name: 'Brazilian Box Sofa',
      image: `${table}`,
      id: uniqid(),
      price: 'KES 30,300'
    },
    {
      name: 'Prana Sofa',
      image: `${table1}`,
      id: uniqid(),
      price: 'KES 43,000'
    },
    {
      name: 'Ventura Sofa',
      image: `${table2}`,
      id: uniqid(),
      price: 'KES 40,700'
    },
  ]);

  const images = tablePics.map((tablePic) => 
    <div key={tablePic.id} className="imageDisplay">
      <img className="images" src={tablePic.image} alt=''></img>
      <p className="itemName">{tablePic.name}</p>
      <p className="itemPrice">{tablePic.price}</p>
    </div>
  )


  return (
    <div>
      <Nav />
      <Categories />
      <div className="tables">
        <h1 className="categoryTitle">Tables</h1>
        <div className="categoryDisplay">{images}</div>
      </div>
    </div>
  )
}

export default Tables;
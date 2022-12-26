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
      name: 'Caracha table',
      image: `${table}`,
      id: uniqid(),
      price: 'KES 20,900'
    },
    {
      name: 'Prana table',
      image: `${table1}`,
      id: uniqid(),
      price: 'KES 23,000'
    },
    {
      name: 'Ventura table',
      image: `${table2}`,
      id: uniqid(),
      price: 'KES 10,700'
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
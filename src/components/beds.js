import React from "react";
import Nav from "./nav";
import Categories from "./categories";
import '../styles/categories.css';

const Beds = () => {

  return (
    <div>
      <Nav />
      <Categories />
      <div className="beds">
        <h1 className="categoryTitle">Beds</h1>
        <div className="categoryDisplay"></div>
      </div>
    </div> 

  )
}

export default Beds;
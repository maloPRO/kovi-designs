import React from "react";
import '../styles/app.css';
import Nav from "./nav";
import Categories from "./categories";
import HomeDisplay from "./homeDisplay";
import Popular from "./popular";


const Home = () => {
  
  return (
    <div className="home">
      <Nav />  
      <Categories/>
      <HomeDisplay />
      <Popular />
    </div>
  )
}

export default Home;
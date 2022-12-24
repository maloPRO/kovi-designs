import React from "react";
import '../styles/app.css';
import uniqid from 'uniqid';
import Nav from "./nav";
import Categories from "./categories";
import HomeDisplay from "./homeDisplay";
import Popular from "./popular";

const App = () => {
  const categories = [
    {
      name: 'bedroom',
      id: uniqid()
    },
    {
      name: 'dining',
      id: uniqid()
    },
    {
      name: 'living',
      id: uniqid()
    },
    {
      name: 'office',
      id: uniqid()
    },
    {
      name: 'kitchen',
      id: uniqid()
    }
  ]

  return (
    <div className="app">
      <Nav />  
      <Categories categories = {categories} />
      <HomeDisplay />
      <Popular />
    </div>
  )
}

export default App;
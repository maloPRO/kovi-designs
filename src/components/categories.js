import React, { useState } from "react";
import uniqid from 'uniqid';
import '../styles/categories.css';
import { Link } from 'react-router-dom';

const Categories = (props) => {


  const [categories] = useState(
     [
      {
        name: 'beds',
        id: uniqid(),
        link: `${process.env.PUBLIC_URL}/beds`,
      },
      {
        name: 'sofas',
        id: uniqid(),
        link: `${process.env.PUBLIC_URL}/sofas`
      },
      {
        name: 'tables',
        id: uniqid(),
        link: `${process.env.PUBLIC_URL}/tables`
      },
      {
        name: 'dining',
        id: uniqid(),

      },
      {
        name: 'stands',
        id: uniqid(),
        
      },
      {
        name: 'fittings',
        id: uniqid(),
      
      },
    ]
  );

  const categoryList = categories.map((category) => 
    <Link to={category.link} key={category.id} className='category'>{category.name}</Link>
  )


  return (
    <div className="categories">
      {categoryList}
    </div>
  )
}

export default Categories;
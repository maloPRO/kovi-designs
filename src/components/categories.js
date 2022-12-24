import React, { useState } from "react";
import uniqid from 'uniqid';
import '../styles/categories.css';

const Categories = (props) => {
  const [categories] = useState(
     [
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
  );

  const categoryList = categories.map((category) => 
    <li key={category.id}>{category.name}</li>
  )


  return (
    <div className="categories">
      <ul>{categoryList}</ul>
    </div>
  )
}

export default Categories;
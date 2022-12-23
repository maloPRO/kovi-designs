import React, { useState } from "react";
import '../styles/categories.css';

const Categories = (props) => {
  const [categories , setCategories] = useState(props.categories);

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
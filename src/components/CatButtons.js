import React from "react";
import { categories } from "../data/categories";
export default function CatButtons() {
  return (
    <>
      {categories.map((cat) => {
                // console.log(cat.title)

        <button 
        type="button" 
        className={
          "m-1 btn btn-primary"
        }
        key={cat.id} 
        // onClick={() => onCatSelection(cat.id)}
      >
        {cat.title}
      </button>
      })}
      
    </>
  );
}

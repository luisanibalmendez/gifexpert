
import { useState } from "react";
import { AddCategory, GifGrid } from "./component";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Panzer Tank', 'Ballerina' ]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory )) return;
    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory 
      onNewCategory = { (value) => onAddCategory(value) }
    />

      <button onClick={ onAddCategory }>Agregar</button>

      { 
        categories.map( ( category ) => (
          <GifGrid 
              key={ category } 
              category={ category } 
          />
        ) )
      }

      </>
  )
}

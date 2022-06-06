import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["Pokemon", "Yu-Gi-Oh", "Dragon Ball Z"])

  // const handleAdd = () => {
  //   setCategories([...categories, "Digimon"])
  // }

  return (
    <>
        <h2>Gift Expert App</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        {/* <button onClick={handleAdd}>Add</button> */}

        <ol>
          {
            categories.map(category => {
              return <li key={category}>{category}</li>
            })
          }
        </ol>
    </>
  )
}
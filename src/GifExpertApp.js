import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["Pokemon"])
  // const [categories, setCategories] = useState(["Pokemon", "Yu-Gi-Oh", "Dragon Ball Z"])

  return (
    <>
        <h1>Gift Expert App</h1>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <>
          {
            categories.map(category => 
              // return <li key={category}>{category}</li>
              <GifGrid key={category} category={ category }
              />
            )
          }
        </>
    </>
  )
}
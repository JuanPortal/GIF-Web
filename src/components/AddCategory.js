import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = e => setInputValue(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        if (inputValue.trim().length > 0){
            setCategories(category => [...category, inputValue])
            setInputValue('')
        }
    }
  return (
   <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Enter a show'
            value={inputValue}
            onChange={handleInputChange}
        />
   </form>
  )
}
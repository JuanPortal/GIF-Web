import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifApp = () => {

    const [ categories, setCategories ] = useState(['Pokémon'])
    
    return (
        <>
            {/* Title */}
            <h1>GIF App</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories}/>

            {/* List */}
            <div>
                {categories.map(category => {
                    return <div key={category}>{ category }</div>
                })}
            </div>
        </>
    )
}

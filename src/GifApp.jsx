import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import { Footer } from "./components/Footer"

export const GifApp = () => {

    const [categories, setCategories] = useState(['Pokémon'])

    const onAddCategory = newCategory => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GIF App</h1>

            <AddCategory onNewCategory={onAddCategory} />

            <section>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </section>

            <Footer />
        </>
    )
}

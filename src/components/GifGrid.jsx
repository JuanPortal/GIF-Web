import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className='category'>
            <h2>{category}</h2>

            <div className='container'>
                {
                    images.map( ({id, url, title}) => (
                        <GifItem key={id} url={url} title={title}/>
                    ))
                }
            </div>
        </div>
    )
}

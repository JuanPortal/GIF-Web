import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <div className='category'>
            <h2>{category}</h2>

            {
                isLoading && <h3>Loading...</h3>
            }

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

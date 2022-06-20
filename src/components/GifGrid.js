import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h2>{category}</h2>
            <div className='container'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}

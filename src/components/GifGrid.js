import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    const {state, loading} = useFetchGifs()
    console.log(state, loading);

    useEffect(() => {
        getGifs(category).then(img => setImages(img))
    }, [category])

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

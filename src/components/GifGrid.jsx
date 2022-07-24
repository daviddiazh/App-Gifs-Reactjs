import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>
                {
                    images.map( gif => (
                        <GifItem 
                            key={gif.id}
                            { ...gif } //Here spread all props
                        />
                    ))
                }
            </div>
        </>
    )
}

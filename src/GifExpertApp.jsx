import React, { useState } from 'react'
import { AddCategory, GifGrid, Footer } from './components';
import { Navbar } from './components/Navbar';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            <Navbar />
            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
            />

            {
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }

            <Footer />
        </>
    )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifsApp</h1>

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={ event => onAddCategory(event) }
            />
            <button onClick={ onAddCategory }>Agregar</button>

            <ol>
                {
                    categories.map( category => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>

        </>
    )
}

import React from 'react'
import gif from '../images/gif.png'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 style={{ marginTop: '18px' }}>GifsApp</h1>
            <img className='img-gif' src={gif} width={100} alt='Gif Image' />
        </nav>
    )
}

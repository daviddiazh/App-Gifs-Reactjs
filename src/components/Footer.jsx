import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; Powered by. David Diaz H | {year}.</p>
        </footer>
    )
}

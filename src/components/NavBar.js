import React from 'react'

import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <h2>
                <Link to={`/`}>blog</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/Posts`} className='new-btn'>Post</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
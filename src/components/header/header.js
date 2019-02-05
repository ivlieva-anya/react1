import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className = 'styled_div'>
            <h3>
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </h3>
            <ul>
                <li>
                    <Link to ='/characters/' >Characters</Link>
                </li>
                <li>
                    <Link to ='/houses/'>Houses</Link>
                </li>
                <li>
                    <Link to ='/books/'>Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;
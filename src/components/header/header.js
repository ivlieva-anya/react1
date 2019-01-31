import React from 'react';
//import styled from 'styled-components';
import './header.css';

// const HeaderBlock = styled.div`
// `;

// const HeaderTitle = styled.h3`
// `;

// const HeaderLinks = styled.ul`
// `;

const Header = () => {
    return (
        <div className = 'styled_div'>
            <h3>
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul>
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;
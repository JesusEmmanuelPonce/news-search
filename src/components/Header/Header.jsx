import React from 'react';
import "./Header.scss";

const Header = ({ title }) => {
    return (
        <nav>
            <span>
                { title }
            </span>
        </nav>
    )
}

export default Header

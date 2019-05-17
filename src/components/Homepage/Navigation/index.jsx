import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const navBar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            width: '100%',
            height: '70px',
            padding: '50px 0 40px'
        }}>
            <Logo />
            <Nav />
        </div>

    );
};

export default navBar;
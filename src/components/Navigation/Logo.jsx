import React from 'react';
import { NavLink } from 'react-router-dom'

const logo = (props) => {
    const { windowScroll } = props;
    return <NavLink to="/" style={{ padding: '10px 30px' }}>
        <img width="100px"
            src={windowScroll > 100 ? "./asset/homepage/logo.png" : "./asset/homepage/logo-white.png"}
            alt="flage dream logo" />
    </NavLink>
};

export default logo;

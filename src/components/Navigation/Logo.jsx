import React from 'react';
import { NavLink } from 'react-router-dom'

const logo = (props) => {
    const { windowScroll, mobile } = props;
    if (mobile) {
        return <NavLink to="/">
            <img width="100px"
                src={"./asset/homepage/logo.png"}
                alt="flage dream logo" />
        </NavLink>
    } else {
        return <NavLink to="/" style={{ padding: '12px 30px 8px' }}>
            <img width="100px"
                src={windowScroll > 100 ? "./asset/homepage/logo.png" : "./asset/homepage/logo-white.png"}
                alt="flage dream logo" />
        </NavLink>
    }

};

export default logo;

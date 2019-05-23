import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        height: '70px',
        opacity: 0,
        position: 'fixed',
        top: '0',
        transform: 'translateY(-100%)',
        transition: 'transform .3s cubic-bezier(.4,0,.6,1),opacity 0s .3s',
        backgroundColor: '#fff',
        zIndex: 10
    }
};



const getDimensions = () => {
    return window.scrollY;
};

const NavBar = (props) => {
    const { classes } = props;
    const [scroll, getWindowScroll] = useState(getDimensions());

    useEffect(() => {
        const scrollCallback = () => {
            if (window.scrollY < 400) {
                getWindowScroll(getDimensions());
                console.log('scrolltop', window.scrollY);
            }

        };
        window.addEventListener('scroll', scrollCallback);

        return () => { window.addEventListener('scroll', scrollCallback); };

    }, []);



    return (
        <div className={classes.root}
            style={scroll < 250 ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: 'transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s',
                padding: '50px 0 40px'
            } : {
                    padding: '50px 0 40px'
                }}>
            <Logo />
            <Nav />
        </div>

    );
};

export default withStyles(styles)(NavBar);
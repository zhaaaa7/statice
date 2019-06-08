import React, { useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { withStyles } from '@material-ui/core/styles';
import './Navigation.css';

const styles = {
    root: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100vw',
        height: '80px',
        // opacity: 0,
        position: 'fixed',
        top: '0',
        // transform: 'translateY(-100%)',
        transition: 'backgroundColor .3s cubic-bezier(.4,0,.6,1)',
        backgroundColor: 'transparent',
        zIndex: 10,

    }
};



const NavBar = (props) => {
    const { windowScroll, windowWidth, classes } = props;

    useEffect(() => {
        const nav = document.getElementById('nav');
        if (windowScroll < 100) {
            nav.style.setProperty('--whiteFont', '#fff');

        } else {
            nav.style.setProperty('--whiteFont', '#000');

        }

        // console.log('???', nav.style);
    }, [windowScroll]);
    return (
        <nav className={classes.root + ' ' + 'navRoot'} id="nav"
            style={windowScroll < 100 ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: 'backgroundColor.3s cubic-bezier(.4,0,.2,1) .3s',
            } : {
                    padding: '30px 0',
                    backgroundColor: '#fff',
                    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'


                }}>
            <Logo windowScroll={windowScroll} />
            <Nav windowWidth={windowWidth} />
        </nav>
    );
};

export default withStyles(styles)(NavBar);
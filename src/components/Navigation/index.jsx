import React from 'react';
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



const NavBar = (props) => {
    const { windowScroll, windowWidth, classes } = props;

    return (
        <nav className={classes.root}
            style={windowScroll < 250 ? {
                opacity: '1',
                transform: 'translateY(0)',
                transition: 'transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s',
                padding: '50px 0 40px'
            } : {
                    padding: '50px 0 40px'
                }}>
            <Logo />
            <Nav windowWidth={windowWidth} />
        </nav>
    );
};

export default withStyles(styles)(NavBar);
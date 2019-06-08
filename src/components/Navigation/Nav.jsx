import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '../../customHook';
import BrowserNav from './BrowserNav';
import MobileNav from './MobileNav';


const styles = {
    root: {
        width: '40%',
        maxWidth: '400px',
        height: '67px',
        position: 'relative'
    }
};


const Nav = (props) => {
    const { classes } = props;
    let mobileView = useMediaQuery("(max-width:700px)");

    return (
        <div className={classes.root} >
            {
                mobileView ? <MobileNav /> : <BrowserNav />
            }

        </div>
    );
};


export default withStyles(styles)(Nav);

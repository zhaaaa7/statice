import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Drawer from '@material-ui/core/Drawer';


const styles = theme => ({
    root: {
        position: 'absolute',
        right: '26px',
        top: '8px'
    },
    nav: {
        marginTop: '25px',
        width: '40vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: '40px',

        '& li': {
            fontSize: '34px'
        }
    }

});


const MobileNav = (props) => {
    const { classes } = props;
    const [showNav, toggleShowNav] = useState(false);

    return (
        <div className={classes.root}>
            <IconButton aria-label="NavMenu" onClick={() => toggleShowNav(true)}>
                <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor="right" open={showNav} onClose={() => toggleShowNav(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleShowNav(false)}
                    onKeyDown={() => toggleShowNav(false)}
                >
                    <IconButton aria-label="NavMenu" onClick={() => toggleShowNav(false)}>
                        <CloseIcon />
                    </IconButton>
                    <ul className={classes.nav}>
                        <li>旗舰课程</li>
                        <li>免费资源</li>
                        <li>关于我们</li>
                        <li>登录</li>
                    </ul>
                </div>
            </Drawer>



        </div>

    );
};


export default withStyles(styles)(MobileNav);

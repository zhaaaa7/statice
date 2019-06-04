import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import MobileNav from './MobileNav';
import { useMediaQuery } from '../../customHook';

const styles = {
    root: {
        width: '40%',
        maxWidth: '400px',
        height: '67px',
        position: 'relative'
    },
    nav: {
        marginTop: '25px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: '40px',
        '& li': {
            fontSize: '14px'
        }
    }
};


const Nav = (props) => {
    const { classes } = props;
    let mobileView = useMediaQuery("(max-width:700px)");

    return (
        <div className={classes.root} id="nav">
            {
                mobileView ?
                    <MobileNav />
                    : <ul className={classes.nav}>
                        <NavLink to="/courses">旗舰课程</NavLink>
                        <NavLink to="/a">免费资源</NavLink>
                        <NavLink to="/aboutus">关于我们</NavLink>
                        <NavLink to="/d">登录</NavLink>
                    </ul>
            }
        </div>
    );
};


export default withStyles(styles)(Nav);

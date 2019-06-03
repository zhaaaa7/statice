import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import MobileNav from './MobileNav';

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
    const { windowWidth, classes } = props;

    return (
        <div className={classes.root}>
            {
                windowWidth > 700 ?
                    <ul className={classes.nav}>
                        <NavLink to="/courses">旗舰课程</NavLink>
                        <NavLink to="/a">免费资源</NavLink>
                        <NavLink to="/aboutus">关于我们</NavLink>
                        <NavLink to="/d">登录</NavLink>
                        <li>{windowWidth}</li>
                    </ul>
                    : <MobileNav />
            }
        </div>

    );
};


export default withStyles(styles)(Nav);

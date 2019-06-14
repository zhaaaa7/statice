import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import Logo from './Logo';
import Button from '@material-ui/core/Button';

import MobileNavItem from './MobileNavItem';


const styles = theme => ({
    root: {
        position: 'absolute',
        right: '0',
        top: '8px'
    },
    nav: {
        marginTop: '65px',
        width: '60vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        '& a': {
            fontSize: '16px',
        },
        '& > li': {
            width: '80%',
            margin: '6px auto',
            borderBottom: '1px solid #e5e5e5',

        }
    },
    logo: {
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    button: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
});


const MobileNav = (props) => {
    const { classes } = props;
    const [showNav, toggleShowNav] = useState(false);

    const [dropdownOpens, setDropdownOpens] = useState([false, false]);
    const [navItems, getNavItems] = useState([]);
    // const nav = [...document.getElementsByClassName('sideNavItem')];

    useEffect(() => {
        const nav = [...navItems];
        // const outnav = document.getElementById('outnav');
        // console.log('?????click', nav, showNav, outnav);

        const ifContains = (target) => {
            for (let ele of nav) {
                if (ele === target || ele.contains(target)) return false;
            }
            return true;
        };
        const listenClick = (e) => {
            if (ifContains(e.target)) {
                setDropdownOpens([false, false]);
            }
        };
        document.addEventListener('click', listenClick);
        return () => { document.removeEventListener('click', listenClick); };
    });


    // console.log('!!!', navItems);

    return (
        <div className={classes.root}>
            <IconButton aria-label="NavMenu" onClick={() => toggleShowNav(true)}>
                <MenuIcon style={{ color: "var(--whiteFont)" }} fontSize="large" />
            </IconButton>
            <Drawer anchor="right" open={showNav} id="outnav"
                onClose={() => {
                    toggleShowNav(false);
                    setDropdownOpens([false, false]);
                }}>
                <div tabIndex={0} role="button">
                    <IconButton aria-label="NavMenu" onClick={() => {
                        toggleShowNav(false);
                        setDropdownOpens([false, false]);
                    }}>
                        <CloseIcon />
                    </IconButton>

                    <div className={classes.logo} ><Logo mobile={true} /></div>

                    <ul className={classes.nav}>
                        <li>
                            <MobileNavItem
                                dropdownOpens={dropdownOpens}
                                setDropdownOpens={setDropdownOpens}
                                openStatus={dropdownOpens[0]}
                                itemKey={0}
                                rootUrl={'/courses'}
                                topLevel={"旗舰课程"}
                                secondLevel={["程序员算法面试课", "程序员全栈开发实战课", "数据科学求职实战课"]} />
                        </li>
                        <li>
                            <MobileNavItem
                                dropdownOpens={dropdownOpens}
                                setDropdownOpens={setDropdownOpens}
                                openStatus={dropdownOpens[1]}
                                itemKey={1}
                                rootUrl={'/resources'}
                                topLevel={"免费资源"}
                                secondLevel={["最新活动", "技术博客"]}
                                getNavItems={getNavItems}
                            />
                        </li>
                        <li>
                            <Button size="medium" className={classes.button}><a href="./#/aboutus">关于我们</a></Button>
                        </li>
                        <li>
                            <Button size="medium" className={classes.button}><a href="./#/login">登陆</a></Button>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};


export default withStyles(styles)(MobileNav);

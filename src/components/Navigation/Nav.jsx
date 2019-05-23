import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
function debounce(fn) {
    let timer;
    return () => {
        if (timer) { clearTimeout(timer); }
        timer = setTimeout(() => { fn(); }, 100);
    };
}

const getDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    return { width, height };
};

const Nav = (props) => {
    const { classes } = props;
    const [windowSize, getWindowSize] = useState(getDimensions());



    useEffect(() => {
        const resizeCallback = debounce(() => {
            getWindowSize(getDimensions());
        });

        window.addEventListener('resize', resizeCallback);
        return () => {
            window.removeEventListener('resize', resizeCallback);
        }
    }, []);





    return (
        <div className={classes.root}>
            {
                windowSize.width > 700 ?
                    <ul className={classes.nav}>
                        <li>旗舰课程</li>
                        <li>免费资源</li>
                        <li>关于我们</li>
                        <li>登录</li>
                        <li>{windowSize.width}</li>
                    </ul>
                    : <MobileNav />
            }




        </div>

    );
};


export default withStyles(styles)(Nav);

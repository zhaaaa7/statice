import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BrowserNavItem from './BrowserNavItem';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        width: '100%',
        maxWidth: '400px',
        height: '67px',
        position: 'relative'
    },
    nav: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: '40px',


        '& li': {
            fontSize: '14px'
        },
        '& ul > *': {
            cursor: 'pointer'
        }
    },
    fontColor: {
        color: '#fff'
    }
};


const BrowserNav = (props) => {
    const { fontColor, classes } = props;
    const [dropdownOpens, setDropdownOpens] = useState([false, false]);

    // console.log('???', dropdownOpens);
    return (
        <div className={classes.root} id="nav">
            <ul className={classes.nav}>

                <BrowserNavItem
                    dropdownOpens={dropdownOpens}
                    setDropdownOpens={setDropdownOpens}
                    itemKey={0}
                    rootUrl={'/courses'}
                    topLevel={"旗舰课程"}
                    secondLevel={["程序员算法面试课", "程序员全栈开发实战课", "数据科学求职实战课"]} />

                <BrowserNavItem
                    dropdownOpens={dropdownOpens}
                    setDropdownOpens={setDropdownOpens}
                    itemKey={1}
                    rootUrl={'/resources'}
                    topLevel={"免费资源"}
                    secondLevel={["最新活动", "技术博客"]} />

                <Button size="medium"><a style={{ color: "var(--whiteFont)" }} href="/#/aboutus">关于我们</a></Button>
                <Button size="medium"><a style={{ color: "var(--whiteFont)" }} href="/#/login">登陆</a></Button>
            </ul>

        </div>
    );
};


export default withStyles(styles)(BrowserNav);

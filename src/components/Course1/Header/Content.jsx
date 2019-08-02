import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        alignItems: "center",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        '& > *': {
            marginBottom: '30px'
        }
    },
    '@media screen and (max-width: 700px)': {
        root: {
            width: '80%',
        }
    },
    text1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '28px',
        letterSpacing: '0.7px',
        fontWeight: '500'
    },
    text2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '400',
        opacity: '0.86',
        marginTop: '-18px',
        lineHeight: '1.64'
    },
    button1: {
        width: '156px',
        height: '35px',
        border: '1px solid #fff',
        borderRadius: '2px',
        color: '#1f74d4',
        backgroundColor: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        marginRight: '10px',
        '&:hover': {
            color: '#000',

        }
    },
    button2: {
        width: '156px',
        height: '35px',
        border: '1px solid #fff',
        borderRadius: '2px',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        '&:hover': {
            color: '#000',
            backgroundColor: '#fff',

        }
    },
};


const Content = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <h1 className={classes.text1}>程序员算法面试课</h1>
            <p className={classes.text2}>​在这三个月的项目实战课程中，你将会在资深工程师的带领下，独立完成四个完整的工业级别项目，并且深入学习从全栈网站开发、大数据架构应用到后端分布式系统设计的前沿技术，掌握一名硅谷软件工程师的必备技术栈。</p>
            <form style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <button type="submit" className={classes.button1}>立即报名</button>
                <button type="submit" className={classes.button2}>点击试听</button>
            </form>
        </div>
    );
};

export default withStyles(styles)(Content);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: "center",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        '& > *': {
            marginBottom: '30px'
        }
    },
    text1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '42px',
        letterSpacing: '1.1px',
        fontWeight: '400'
    },
    text2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '300',
        marginTop: '-18px'
    },
    form: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '190px',
        height: '35px',
        borderRadius: '2px',
        border: 'solid 1px #fff',
        backgroundColor: '#fff',
        marginRight: '10px',
        marginBottom: '10px',

        '&::placeholder': {
            opacity: '0.45',
            color: '#404040',
            fontSize: '14px',
            paddingLeft: '6px'
        }
    },
    button: {
        width: '150px',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#1f74d4',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '10px'
    },
    '@media screen and (max-width: 500px)': {
        root: {
            width: '90%',
        },
        text1: {
            fontSize: '32px'
        },
        text2: {
            fontSize: '14px'
        },
        form: {
            flexDirection: 'column'
        }
    },
    '@media screen and (max-width: 400px)': {
        root: {
            width: '90%',
        },
        text1: {
            fontSize: '26px'
        },
        text2: {
            fontSize: '14px'
        },
    },
};


const Content = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1 className={classes.text1}>从这里走向世界一流公司</h1>
            <h3 className={classes.text2}>​用最优质的资源，帮助未来科技从业者实现求职梦想</h3>
            <form className={classes.form}>
                <input type="text"
                    className={classes.input}
                    placeholder="输入你的邮箱"
                />
                <button type="submit" className={classes.button}>获取免费学习资源</button>
            </form>
        </div>
    );
};

export default withStyles(styles)(Content);
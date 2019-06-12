import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        position: 'relative',
        width: '80%',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        margin: '20px 0',
        maxWidth: '600px',
        minWidth: '270px',
    },
    header: {
        position: 'absolute',
        top: '-20px',
        left: '8%',
        width: '84%',
        height: '50px',
        borderRadius: '5px',
        backgroundColor: '#1f74d4',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '20px',
        letterSpacing: '0.5px'
    },
    form: {
        margin: '40px 10% 0 10%',
        width: '80%',

    },
    textField: {
        width: '100%',
        margin: '10px 0'
    },
    submitButton: {
        width: '100%',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#11539d',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        marginTop: '20px'

    },
    divider: {
        position: 'relative',
        color: '#999',
        margin: '20px 0',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '10%',
            height: '1px',
            width: '35%',
            backgroundColor: '#dfdfdf'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            height: '1px',
            left: '55%',

            width: '35%',
            backgroundColor: '#dfdfdf'
        }
    },
    footer: {
        textAlign: 'left',
        width: '80%',
        margin: '0 auto 20px'
    },
    contact: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    reminder: {
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '0.9px',
        color: '#404040',
        marginBottom: '10px'
    },
    '@media screen and (max-width: 500px)': {
        contact: {
            flexDirection: 'column'
        },
    }
};


const CoontactForm = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <header className={classes.header}>课程咨询</header>
            <form className={classes.form} autoComplete="off">
                <TextField
                    id="name"
                    label="姓名"
                    className={classes.textField}
                />
                <TextField
                    id="email"
                    label="电子邮箱"
                    className={classes.textField}
                />
                <TextField
                    id="wechatID"
                    label="微信号"
                    className={classes.textField}
                />
                <button type="submit" className={classes.submitButton}>提交</button>
            </form>
            <p className={classes.divider}>或</p>
            <footer className={classes.footer}>
                <p className={classes.reminder}>直接联系课程组Davy老师:</p>
                <section className={classes.contact}>
                    <p><img style={{ verticalAlign: 'middle', marginRight: '6px' }} alt="mailicon" src="./asset/courses/mail.png" width="24px" />davy.z@flagdream.com</p>
                    <div>
                        <img src="./asset/courses/wechat.png" alt="wechaticon" width="24px" style={{ verticalAlign: 'top', marginRight: '6px' }} />
                        <img src="./asset/courses/qr.png" alt="qrcode" width="50px" />
                    </div>
                </section>
            </footer>
        </div>
    );
};


export default withStyles(styles)(CoontactForm);

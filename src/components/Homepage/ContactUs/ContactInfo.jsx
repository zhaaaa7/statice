import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '90%',
        maxWidth: '400px',
        color: '#fff',
    },

    title: {
        color: '#fff',
        fontSize: '36px',
        fontWeight: '400',
        letterSpacing: '0.9px',
        textAlign: 'left',
        marginBottom: '10px'
    }
};

const CoontactInfo = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>联系我们</h2>
            <p style={{ textAlign: 'left', letterSpacing: '0.9px', lineHeight: '1.79' }}>请发送邮件至
                <span style={{ color: '#65abf1', fontWeight: '500' }}>services@flagdream.com</span>。
                课程组老师将在收到邮件后24小时内与你联系。
            </p>
            <div style={{ marginTop: '40px', textAlign: 'left' }}>
                <p style={{ marginBottom: '20px' }}>微信公众号</p>
                <div style={{ backgroundColor: '#fff', width: "150px", height: '150px' }} >

                    <img src="./asset/courses/qr.png" alt="qrcode" width="150px" />
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(CoontactInfo);
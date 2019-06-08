import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        display: 'flex',
        width: '70%',
        margin: '0 auto'
    },
    '@media screen and (max-width: 700px)': {
        root: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        dec: {
            margin: '20px 0 0 0 !important',
        }
    },
    info: {
        width: '272px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    promotion: {
        fontSize: '14px',
        color: '#fff',
        textAlign: 'left',
        lineHeight: '2',
        fontWeight: '500',
    },
    oldnumber: {
        fontSize: '24px',
        color: '#ffb099',
        marginBottom: '30px',
        fontWeight: '600',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '15px',
            width: '113px',
            height: '2px',
            transform: 'rotate(8deg)',
            backgroundColor: '#f9c2b2'
        }
    },
    number: {
        fontSize: '24px',
        color: '#ffb099',
        marginBottom: '30px',
        fontWeight: '600',
    },
    button: {
        width: '272px',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        color: '#1f74d4',
        backgroundColor: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        '&:hover': {
            color: '#fff',

            backgroundColor: '#404040',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'

        }
    },

    dec: {
        width: '160px',
        height: '160px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("./asset/courses/earlybird.png")`,
        marginLeft: '8%',
    }
};


const Promotion = (props) => {
    const { classes } = props;

    return (
        <div style={{
            // height: '215px',
            opacity: '0.95',
            backgroundColor: '#1f74d4',
            padding: '30px'
        }} >
            <section className={classes.root}>
                <div style={{ width: '272px' }}>
                    <div className={classes.info}>
                        <div>
                            <p className={classes.promotion}>课程原价</p>
                            <p className={classes.oldnumber}>3998 USD</p>
                        </div>
                        <div>
                            <p className={classes.promotion}>Early Bird折后价</p>
                            <p className={classes.number}>2998 USD</p>
                        </div>
                    </div>
                    <Button variant="contained" size="medium" className={classes.button}>立即报名</Button>
                </div>
                <div className={classes.dec}>
                </div>
            </section>
        </div>
    );
};

export default withStyles(styles)(Promotion);
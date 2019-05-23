import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import QuestionPanel from './QuestionPanel';


const styles = {
    root: {
        display: 'flex',
        // justifyContent: 'space-around',
        marginTop: '60px',

    },
    info: {
        width: '272px',
        display: 'flex',
        justifyContent: 'space-between',


    },
    promotion: {
        fontSize: '14px',
        color: '#fff',
        textAlign: 'left'
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
        fontWeight: '600'
    }
};
const Questions = (props) => {
    const { classes } = props;

    return (
        <div style={{
            height: '215px',
            opacity: '0.95',
            backgroundColor: '#1f74d4'
        }}>
            <section className={classes.root}>
                <div>
                    <div className={classes.info}>
                        <div>
                            <p className={classes.promotion}>课程原价</p>
                            <p className={classes.oldnumber}><span className={classes.dec}></span>3998 USD</p>
                        </div>
                        <div>
                            <p className={classes.promotion}>Early Bird折后价</p>
                            <p className={classes.number}>2998 USD</p>
                        </div>
                    </div>
                    <button type="submit" className={classes.button}>立即报名</button>
                </div>
            </section>

        </div>
    );
};

export default withStyles(styles)(Questions);
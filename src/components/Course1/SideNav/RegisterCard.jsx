import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '200px',
        height: '110px',
        backgroundColor: '#1f74d4',
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.18)',

        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 0 5px 5px'

    },
    info: {
        margin: '20px 0',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',


    },
    promotion: {
        fontSize: '14px',
        color: '#fff',
        lineHeight: '1.2',
        fontWeight: '500',

    },
    oldnPrice: {
        fontSize: '14px',
        color: '#fff',
        opacity: '0.8',
        fontWeight: '500',
        position: 'relative',
        marginBottom: '10px',

        '&::before': {
            content: '""',
            position: 'absolute',
            top: '10px',
            width: '133px',
            height: '2px',
            transform: 'rotate(4deg)',
            backgroundColor: '#ff825e'
        }
    },
    number: {
        fontSize: '18px',
        color: '#fff',
        fontWeight: '600',
    },
    button: {
        width: '90%',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        color: '#1f74d4',
        backgroundColor: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer'
    },

};
const RegisterCard = (props) => {
    const { classes } = props;
    const [showButton, setShowButton] = useState(false);

    return (
        <div className={classes.root} onMouseEnter={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }}>
            {!showButton && <div className={classes.info}>
                <div>
                    <p className={classes.oldnPrice}>课程原价: 3998 USD</p>
                </div>
                <div>
                    <p className={classes.promotion}>5月18日前报名只需</p>
                    <p className={classes.number}>2998 USD</p>
                </div>
            </div>}
            {
                showButton && <button type="submit" className={classes.button}>立即报名</button>
            }
        </div>
    );
};

export default withStyles(styles)(RegisterCard);
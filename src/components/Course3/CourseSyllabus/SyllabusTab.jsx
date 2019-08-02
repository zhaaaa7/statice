import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '250px',
        height: '190px',
        margin: '0 auto',
        cursor: 'pointer',
        '& > section': {
            height: '50%'
        }
    },
    title: {
        fontWeight: '400',
        fontSize: '18px',
        textAlign: 'left',
        marginBottom: '8px',
        color: '#404040'
    },

    dec: {
        width: '247px',
        height: '4px',
        borderRadius: '2px',
        backgroundColor: '#f2f2f2'
    },
    decTop: {
        width: '0%',
        height: '4px',
        borderRadius: '2px',
        transition: 'width 100ms linear'

    },
    decTopSelected: {
        width: '75%',
        height: '4px',
        borderRadius: '2px',
        backgroundColor: '#1f74d4',
        transition: 'width 100ms linear'
    },
    '@media screen and (max-width: 690px)': {
        root: {
            width: '100%',
            height: '90px',

            display: 'flex',
            '& > section': {
                width: '50%',
                padding: '0 5%'
            }
        },
        dec: {
            width: '40vw',
        }
    },
    '@media screen and (max-width: 500px)': {
        title: {
            fontSize: '14px'
        }
    },
};


const SyllabusTab = (props) => {
    const { tabStatus, changetab, classes } = props;

    return (
        <div className={classes.root}>
            <section onClick={() => { changetab([true, false]) }}>
                <h5 className={classes.title}>{'系统性算法训练与提升'}</h5>
                <div className={classes.dec}>
                    <div className={tabStatus[0] ? classes.decTopSelected : classes.decTop}></div>

                </div>
            </section>
            <section onClick={() => { changetab([false, true]) }}>
                <h5 className={classes.title}>{'进阶算法训练和冲刺'}</h5>
                <div className={classes.dec}>
                    <div className={tabStatus[1] ? classes.decTopSelected : classes.decTop}></div>

                </div>
            </section>
        </div>
    );
};

export default withStyles(styles)(SyllabusTab);
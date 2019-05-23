import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '250px',
        height: '302px',
        backgroundColor: '#fff',
        margin: '0 auto 60px',

    },
    title: {
        fontWeight: '400',
        fontSize: '18px',
        textAlign: 'left'
    },

    dec: {
        width: '247px',
        height: '4px',
        borderRadius: '2px',
        backgroundColor: '#f2f2f2'
    },
    decTop: {
        width: '183px',
        height: '4px',
        borderRadius: '2px',
        backgroundColor: '#1f74d4'
    }


};
const SyllabusTab = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <section>
                <h5 className={classes.title}>{'系统性算法训练与提升'}</h5>
                <div className={classes.dec}>
                    <div className={classes.decTop}></div>
                </div>
            </section>
            <section>
                <h5 className={classes.title}>{'进阶算法训练和冲刺'}</h5>
                <div className={classes.dec}>
                    <div className={classes.decTop}></div>
                </div>
            </section>
        </div>
    );
};

export default withStyles(styles)(SyllabusTab);
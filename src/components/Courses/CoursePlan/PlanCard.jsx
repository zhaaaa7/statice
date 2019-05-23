import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '200px',
        height: '302px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        margin: '0 auto 60px',

    },
    icon: {},
    title: {
        padding: '0 20px',
        fontWeight: '400',
        fontSize: '16px',


    },
    description: {
        padding: '0 30px',
        color: '#999999',
        fontSize: '13px',
        margin: '10px 0'

    },

};
const PlanCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <section>
                <div className={classes.icon}>ICON</div>
                <h5 className={classes.title}>{props.title}</h5>
                <p className={classes.description}>{props.des}</p>
            </section>
        </div>
    );
};

export default withStyles(styles)(PlanCard);
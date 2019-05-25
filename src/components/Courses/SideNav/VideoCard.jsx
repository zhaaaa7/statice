import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {

        width: '200px',
        height: '110px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.18)',

        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px'

    },


};
const VideoCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            试看

        </div>
    );
};

export default withStyles(styles)(VideoCard);
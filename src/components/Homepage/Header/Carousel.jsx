import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        height: '100%',
        overflowX: 'hidden'
    },
    video: {
        position: 'relative',
        zIndex: '-1',
        objectFit: 'fill',
        width: '100%',
    },
    '@media screen and (max-width: 1024px)': {
        video: {
            width: 'auto',
            height: '100%'
        },
    },

};
const Carousel = (props) => {
    const { classes } = props;
    return (

        <div className={classes.root}>
            <video src="./asset/homepage/30secsequence.mp4" autoPlay loop muted
                poster="./asset/homepage/30secsequence.png"

                className={classes.video}>

            </video>
        </div>
    );
};

export default withStyles(styles)(Carousel);
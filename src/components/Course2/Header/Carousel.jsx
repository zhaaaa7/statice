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
        objectFit: 'cover',
        width: '100%',
    },
    // '@media screen and (max-width: 1024px)': {
    //     video: {
    //         width: 'auto',
    //         height: '100%'
    //     },
    // },
};
const Carousel = (props) => {
    const { classes } = props;
    return (

        <div className={classes.root}>
            <video src="./asset/courses/程序员项目课.mp4" autoPlay loop muted
                poster="./asset/courses/程序员项目课.png"

                className={classes.video}>

            </video>
        </div>
    );
};

export default withStyles(styles)(Carousel);
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import VideoDialog from './VideoDialog';


const styles = {
    root: {
        width: '200px',
        height: '150px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.18)',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px'
    },
    mask: {
        width: '153px',
        height: '84px',
        opacity: '0.74',
        borderRadius: '5px',
        backgroundColor: '#112337',
        cursor: 'pointer',
        marginTop: '10px'

    },
    playButton: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        border: '1px solid #e5e5e5',
        backgroundColor: '#d8d8d8',
        position: 'relative',
        top: '20%',
        left: '35%',
        '&::after': {
            content: '""',
            width: '0px',
            height: '0px',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '12px solid #112337',
            position: 'absolute',
            top: '35%',
            left: '43%',
            // transform: 'translate(-50%,-50%)'
        }
    }
};
const VideoCard = (props) => {
    const { classes } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            试看
            <section className={classes.mask} onClick={() => { setOpen(true) }}>
                <div className={classes.playButton}></div>
            </section>
            <VideoDialog open={open} handleClose={setOpen} />
        </div>
    );
};

export default withStyles(styles)(VideoCard);
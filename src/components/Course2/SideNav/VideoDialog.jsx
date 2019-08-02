import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';


const styles = {
    root: {
        position: 'relative',
        borderRadius: '0px'
    },
    content: {
        padding: '0px'
    },
    video: {
        position: 'relative',
        objectFit: 'fill',
        width: '800px',
        '&:focus': {
            outline: 'none'
        }
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }
};

const VideoDialog = (props) => {
    const { handleClose, open, classes } = props;



    return (
        <Dialog onClose={() => { handleClose(false) }} open={open} aria-labelledby="simple-dialog-title" maxWidth="lg">
            <section className={classes.root}>
                <DialogTitle> 试看-程序员全栈开发实战课  </DialogTitle>
                <IconButton className={classes.closeButton} aria-label="Close" onClick={() => { handleClose(false) }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent className={classes.content}>
                    <video src="./asset/homepage/30secsequence.mp4" autoPlay controls
                        poster="./asset/homepage/30secsequence.png"

                        className={classes.video} >

                    </video>
                </DialogContent>
            </section>
        </Dialog>
    );
}

export default withStyles(styles)(VideoDialog);
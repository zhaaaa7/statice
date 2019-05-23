import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import QuestionPanel from './QuestionPanel';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '60px',
        backgroundColor: '#fff',

    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    },
    tab: {},
    content: {},
    button: {
        width: '190px',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#1f74d4',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500'
    }
};
const Questions = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#f8fafc' }}>
            <h2 style={{ marginTop: '40px' }}>常见问题</h2>
            <section className={classes.root}>

                <QuestionPanel />
            </section>

        </div>
    );
};

export default withStyles(styles)(Questions);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FeedbackCard from './FeedbackCard';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        top: '0',
        left: '0',
        animation: '12s feedbackFlow linear infinite'


    },
    '@keyframes feedbackFlow': {
        '0%': {
            transform: 'translateX(0)'
        },

        '100%': {
            transform: 'translateX(-50%)'
        },

    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    }
};

const FeedbackGroup = (props) => {
    const { classes, data } = props;
    return (

        <section className={classes.root} >
            {
                data.map((ele, index) => {
                    return <FeedbackCard
                        key={index}
                        content={ele.content}
                        name={ele.name}
                        title={ele.title}
                        decImg={ele.decImg} />;
                })
            }
            {
                data.map((ele, index) => {
                    return <FeedbackCard
                        key={index}
                        content={ele.content}
                        name={ele.name}
                        title={ele.title}
                        decImg={ele.decImg} />;
                })
            }
        </section>


    );
};

export default withStyles(styles)(FeedbackGroup);
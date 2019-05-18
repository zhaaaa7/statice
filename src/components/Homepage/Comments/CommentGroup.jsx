import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommentCard from './CommentCard';

const styles = {
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    }
};

const CommentGroup = (props) => {
    const { classes, data } = props;

    return (
        <section className={classes.root}>
            {
                data.map((ele, index) => {
                    return <CommentCard
                        key={index}
                        content={ele.content}
                        name={ele.name}
                        title={ele.title}
                        company={ele.company}
                        decImg={ele.decImg} />;
                })
            }
        </section>
    );
};

export default withStyles(styles)(CommentGroup);
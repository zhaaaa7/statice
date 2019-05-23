import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SyllabusTab from './SyllabusTab';
import SyllabusContent from './SyllabusContent';


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
const CourseSyllabus = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#f8fafc' }}>
            <h2 style={{ marginTop: '40px' }}>课程大纲</h2>
            <section className={classes.root}>
                <div className={classes.tab}>
                    <SyllabusTab />

                </div>
                <div className={classes.content}>
                    <SyllabusContent />

                </div>
            </section>
            <button type="submit" className={classes.button}>点击咨询课程</button>
        </div>
    );
};

export default withStyles(styles)(CourseSyllabus);
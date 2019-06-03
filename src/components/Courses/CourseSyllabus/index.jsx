import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SyllabusTab from './SyllabusTab';
import SyllabusContent from './SyllabusContent';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '30px'
    },
    '@media screen and (max-width: 690px)': {
        root: {
            flexDirection: 'column'
        },
    },
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
    const [tabStatus, setTabStatus] = useState([true, false]);

    return (
        <div style={{ backgroundColor: '#f8fafc' }} className="roots">
            <div>
                <h2 style={{ marginTop: '40px' }}>课程大纲</h2>
                <section className={classes.root}>
                    <div className={classes.tab}>
                        <SyllabusTab changetab={(tab) => { setTabStatus(tab) }} tabStatus={tabStatus} />
                    </div>
                    <div className={classes.content}>
                        <SyllabusContent tabStatus={tabStatus} />
                    </div>
                </section>
                <button type="submit" className={classes.button}>点击咨询课程</button>
            </div>
        </div>
    );
};

export default withStyles(styles)(CourseSyllabus);
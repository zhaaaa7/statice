import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SyllabusTab from './SyllabusTab';
import SyllabusContent from './SyllabusContent';
import Button from '@material-ui/core/Button';



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
        fontWeight: '500',
        '&:hover': {
            backgroundColor: '#11539d',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'

        }
    }
};
const CourseSyllabus = (props) => {
    const { classes } = props;
    const [tabStatus, setTabStatus] = useState([true, false]);

    const contactUsTop = document.getElementById('course-contactUs');


    return (
        <div style={{ backgroundColor: '#f8fafc' }} className="roots">
            <div>
                <h2>课程大纲</h2>
                <section className={classes.root}>
                    <div className={classes.tab}>
                        <SyllabusTab changetab={(tab) => { setTabStatus(tab) }} tabStatus={tabStatus} />
                    </div>
                    <div className={classes.content}>
                        <SyllabusContent tabStatus={tabStatus} />
                    </div>
                </section>

                <Button variant="contained" size="medium" color="primary" className={classes.button}
                    onClick={() => {
                        contactUsTop.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                    }}>
                    点击咨询课程
                </Button>
            </div>
        </div>
    );
};

export default withStyles(styles)(CourseSyllabus);
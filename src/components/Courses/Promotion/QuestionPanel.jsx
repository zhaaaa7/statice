import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = {
    root: {
        width: '70%',
        height: '400px',
        backgroundColor: '#fff',
        margin: '0 auto 60px',

    },
    content: {
        fontSize: '14px',
        lineHeight: '1.79',
        color: '#676767',
        textAlign: 'left'
    },


    panel: {
        boxShadow: '0px -1px 1px 0px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.2)',
        backgroundColor: '#fff',
        marginBottom: '20px',
    },
    question: {
        fontSize: '15px',
        color: '#404040'
    },
    answer: {
        fontSize: '14px',
        color: '#676767',
        lineHeight: '1.64',
        textAlign: 'left'
    }

};
const SyllabusContent = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                    <p className={classes.question}>&gt; 参加培训后，要花多少时间才能获得Dream offer？</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className={classes.answer}>参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。
          当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。</p>
                </ExpansionPanelDetails>
            </ExpansionPanel>


        </div>
    );
};

export default withStyles(styles)(SyllabusContent);
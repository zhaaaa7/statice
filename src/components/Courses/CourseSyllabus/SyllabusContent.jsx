import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '250px',
        height: '302px',
        backgroundColor: '#fff',
        margin: '0 auto 60px',

    },
    content: {
        fontSize: '14px',
        lineHeight: '1.79',
        color: '#676767',
        textAlign: 'left'
    },



};
const SyllabusContent = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <p className={classes.content}>
                在算法面试冲刺课的第一阶段中，老师将带领学员系统性进行进行高频算法面试考点的梳理。全面解析和总结线性结构、递归、二叉搜索、树形、图形、排序、记忆化搜索和动态规划等高频考点、考题。在上课过程中，老师不仅会注重培养学生的算法Coding能力，还将帮助学生提升解题思路和逻辑，做到举一反三，触类旁通。课程同时注重实战Coding演练，还原面试情境，帮助学员提升面试能力。
            </p>
        </div>
    );
};

export default withStyles(styles)(SyllabusContent);
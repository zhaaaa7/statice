import React from 'react';
import FooterColumn from './FooterColumn';
import CopyRight from './CopyRight';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
    },
    '@media screen and (max-width: 500px)': {
        root: {
            padding: '20px 10px',

        }
    }
};

const Footer = (props) => {
    const { classes } = props;
    return (
        <footer style={{ width: '100%' }}>
            <section className={classes.root}>
                <FooterColumn
                    title={'旗舰课程'}
                    content={['程序员算法面试课', '程序员项目实战课​', '数据科学求职实战课']}>
                </FooterColumn>
                <FooterColumn
                    title={'新闻&资源'}
                    content={['最新活动', '技术博客']}>
                </FooterColumn>
                <FooterColumn
                    title={'关于我们'}
                    content={['公司介绍', '使用条款', 'Careers']}>
                </FooterColumn>
            </section>
            <CopyRight />
        </footer>
    );
};

export default withStyles(styles)(Footer);
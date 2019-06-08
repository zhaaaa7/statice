import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RegisterCard from './RegisterCard';


const styles = {
    container: {
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.18)',
        backgroundColor: '#fff',
        margin: '0 auto 20px',
        borderRadius: '5px',
    },
    root: {
        width: '200px',
        height: '330px',
        padding: '20px 20px 20px 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        '& > li': {
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(64, 64, 64, 0.5)',
            transition: 'transform 0.2s ease-in',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        }
    },
    dot: {
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        backgroundColor: 'rgba(107, 120, 132, 0.3)',
        marginRight: '10px'
    },
};

const content = ['学习路径', '课程特色', '课程大纲', '讲师介绍', '常见问题', '学员课程反馈', '课程咨询'];

const SideNavCard = (props) => {
    const { sideNavIndex, offsetTops, classes } = props;

    return (
        <div className={classes.container}>
            <ul className={classes.root}>
                {
                    content.map((ele, index) => {
                        if (index === sideNavIndex) {
                            return <li key={index} style={{ color: '#404040' }} onClick={() => {
                                console.log('click', offsetTops[index]);
                                window.scrollTo({
                                    top: offsetTops[index] + 90,
                                    behavior: "smooth"
                                })
                            }}>
                                <span className={classes.dot} style={{ backgroundColor: 'rgba(107, 120, 132, 1)' }}></span>
                                {ele}
                            </li>
                        } else {
                            return <li key={index} onClick={() => {
                                console.log('click', offsetTops[index]);
                                window.scrollTo({
                                    top: offsetTops[index] + 90,
                                    behavior: "smooth"
                                })
                            }}><span className={classes.dot}></span>{ele}</li>
                        }
                    })
                }
            </ul>

            <RegisterCard />
        </div>
    );
};

export default withStyles(styles)(SideNavCard);
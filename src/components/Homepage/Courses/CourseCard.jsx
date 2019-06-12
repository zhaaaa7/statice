import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '300px',
        height: '302px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        margin: '0 auto 60px',

    },
    decoration: {
        width: '260px',
        height: '163px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.28), 0 2px 10px 0 rgba(0, 0, 0, 0.5)',
        backgroundColor: '#ffffff',
        margin: '0 20px',
        transform: 'translateY(-20px)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.61, 0.7, 1)',
    },
    title: {
        textAlign: 'left',
        padding: '0 20px',
        fontWeight: '500',
        color: '#404040',
        letterSpacing: '1.1px'

    },
    description: {
        textAlign: 'left',
        padding: '0 20px',
        color: '#999999',
        letterSpacing: '0.9px',
        margin: '10px 0'

    },
    more: {
        textAlign: 'left',
        padding: '0 20px',
        color: '#1f74d4'
    }
};
const CourseCard = (props) => {
    const { cardIndex, classes } = props;
    return (
        <div className={classes.root}
            onMouseEnter={() => {
                let cardDec = document.getElementById(`card-dec-${cardIndex}`);
                cardDec.style.transform = 'translateY(-60px)';
            }}
            onMouseLeave={() => {
                let cardDec = document.getElementById(`card-dec-${cardIndex}`);
                cardDec.style.transform = 'translateY(-20px)';
            }}
        >
            <section>
                <div className={classes.decoration} id={`card-dec-${cardIndex}`}
                    style={{ backgroundImage: `url('${props.decImg}')` }}></div>
                <header className={classes.title}>{props.title}</header>
                <p className={classes.description}>{props.des}</p>
                <p className={classes.more}>了解更多...</p>
            </section>
        </div>
    );
};

export default withStyles(styles)(CourseCard);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    section: {
        color: '#404040',
        fontSize: '18px',
        letterSpacing: '1.2px',
        fontWeight: 'normal',
        margin: '20px 0'
    },
    item: {
        color: '#5e5e5e',
        fontSize: '14px',
        letterSpacing: '0.9px',
        margin: '8px 0'
    },
    '@media screen and (max-width: 500px)': {
        section: {
            fontSize: '16px',

        },
        item: {
            fontSize: '12px',

        }
    }
});

const FooterColumn = (props) => {
    const { classes } = props;

    return (
        <ul className={classes.ul}>
            <h5 className={classes.section}>{props.title}</h5>
            {props.content.map(ele => {
                return <li className={classes.item} key={ele}>{ele}</li>
            })}
        </ul>
    );
};

export default withStyles(styles)(FooterColumn);
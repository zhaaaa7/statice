import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        position: 'relative',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',

    },
    navTitle: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',

    },
    arrow: {
        width: '0px',
        height: '0px',
        marginLeft: '6px',
        borderTop: '4px solid',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        transition: 'all 150ms ease-in'
    },
    down: {
        transform: 'rotate(180deg)'
    },
    dropdown: {
        width: '200px',
        borderRadius: '3px',
        backgroundColor: '#fff',
        padding: '12px 6px 10px 16px',
        '& li': {
            textAlign: 'left',
            padding: '2px 6px',
            borderRadius: '2px',
            transition: 'all 150ms linear',
            '& a': {
                display: 'inline-block',
                color: '#404040',
            },
            '&:hover': {
                boxShadow: '0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)',
                backgroundColor: '#1f74d4',
                '& a': {
                    color: '#fff',
                }
            }
        }
    },


};


const MobileNavItem = (props) => {
    const { dropdownOpens, itemKey, openStatus, setDropdownOpens, rootUrl, secondLevel, getNavItems, classes } = props;
    const [showDropdown, toggleShowDropdown] = useState(false);

    // console.log('!!!', dropdownOpens);

    useEffect(() => {
        toggleShowDropdown(openStatus);
    }, [openStatus]);

    useEffect(() => {
        if (itemKey === 1) {
            getNavItems(document.getElementsByClassName('sideNavItem'));
        }
    }, []);

    return (
        <Button size="medium"
            className={`${classes.root} sideNavItem`}
            onClick={() => {
                toggleShowDropdown(!showDropdown);
                const opens = dropdownOpens.map((ele, index) => {
                    if (index === itemKey) return true;
                    return false;
                });

                setDropdownOpens(opens);
            }}>
            <div className={classes.navItem}>

                <div className={classes.navTitle}>{props.topLevel}
                    <b className={
                        showDropdown ?
                            classes.arrow + ' ' + classes.down :
                            classes.arrow
                    }></b>
                </div>
                {
                    showDropdown && <div className={classes.dropdown} >
                        <ul>
                            {
                                secondLevel.map((ele, index) => {
                                    return <li key={index}><a href={`./#${rootUrl}/course${index + 1}`}>{ele}</a></li>
                                })
                            }
                        </ul>
                    </div>
                }
            </div>


        </Button>
    );
};


export default withStyles(styles)(MobileNavItem);

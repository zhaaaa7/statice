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
        alignItems: 'center'
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
    displayNone: {
        display: 'none',
    },
    dropdown: {
        position: 'absolute',
        left: '-60px',
        top: '45px',
        // transform: 'translate3d(-30%, 40px, 0px)',
        width: '200px',
        borderRadius: '3px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        backgroundColor: '#fff',
        padding: '12px 6px',
        '& li': {
            borderRadius: '2px',
            transition: 'all 150ms linear',
            '& a': {
                display: 'inline-block',
                padding: '12px 20px 12px 20px',
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


const BrowserNavItem = (props) => {
    const { dropdownOpens, itemKey, openStatus, setDropdownOpens, rootUrl, secondLevel, classes } = props;
    const [showDropdown, toggleShowDropdown] = useState(false);

    // console.log('!!!', dropdownOpens);

    useEffect(() => {
        toggleShowDropdown(openStatus);
    }, [openStatus]);


    return (
        <Button size="medium"

            style={{ color: "var(--whiteFont)" }}
            className={`${classes.root} topNavItem`}
            onClick={() => {
                toggleShowDropdown(!showDropdown);
                const opens = dropdownOpens.map((ele, index) => {
                    if (index === itemKey) return true;
                    return false;
                });

                setDropdownOpens(opens);
            }}>

            <div className={classes.navItem}>{props.topLevel}
                <b id="testNav" className={
                    showDropdown ?
                        classes.arrow + ' ' + classes.down :
                        classes.arrow
                } style={{ borderTopColor: "var(--whiteFont)" }}></b>
            </div>

            {/*
                showDropdown && <div className={classes.dropdown} >
                    <ReactCSSTransitionGroup
                        transitionName="navDropdown"
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}>

                        <ul>
                            {
                                secondLevel.map((ele, index) => {
                                    return <li key={index}><a href={`./#${rootUrl}/course${index + 1}`}>{ele}</a></li>
                                })
                            }
                        </ul>



                    </ReactCSSTransitionGroup>
                </div>
                        */}
            {<ReactCSSTransitionGroup
                transitionName="navDropdown"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={200}>
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

            </ReactCSSTransitionGroup>}
        </Button>
    );
};


export default withStyles(styles)(BrowserNavItem);

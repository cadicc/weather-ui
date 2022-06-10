import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { SWITCH_HOME, SWITCH_HISTORICAL } from '~/features/Switch';
// import { css } from '@emotion/css';
import styles from './NavBar.module.css';

export const listLink = ['/', '/historical-weather'];

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.NavBar}>
            <div className={styles.posIcon}>
                <IconButton aria-label="navigation" size="small" className={styles.navButton}>
                    <FontAwesomeIcon icon={faBars} inverse />
                </IconButton>
                <Link to={listLink[0]} onClick={() => dispatch(SWITCH_HOME())} className={styles.navButton}>
                    <IconButton aria-label="Home" size="small">
                        <FontAwesomeIcon icon={faHouse} inverse />
                    </IconButton>
                </Link>
                <Link
                    to="/historical-weather"
                    onClick={() => dispatch(SWITCH_HISTORICAL())}
                    className={styles.navButton}
                >
                    <IconButton aria-label="Historical Weather" size="small">
                        <FontAwesomeIcon icon={faChartArea} inverse />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};
export default NavBar;

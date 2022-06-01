import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faChartArea } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid item>
                    <IconButton aria-label="navigation" size="small">
                        <FontAwesomeIcon icon={faBars} inverse />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Link to="/">
                        <IconButton aria-label="Home" size="small">
                            <FontAwesomeIcon icon={faHouse} inverse />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/historical-weather">
                        <IconButton aria-label="Historical Weather" size="small">
                            <FontAwesomeIcon icon={faChartArea} inverse />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};
export default NavBar;

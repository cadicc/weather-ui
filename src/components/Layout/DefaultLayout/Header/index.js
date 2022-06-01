import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import { IconButton, Input } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const Header = () => {
    const DivHeader = styled.div`
        position: fixed;
        display: flex;
        height: 40px;
        width: 98%;
        right: 0;
        top: 0;
        background-color: #2e0249;
        color: #fff;
    `;
    return (
        <DivHeader>
            <Grid container spacing={0}>
                <Grid item xs={10}>
                    <Item>Forecast</Item>
                </Grid>
                <Grid item xs={2} style={{ justifyContent: 'flex-end' }}>
                    <Item>
                        <IconButton aria-label="Dark" size="small">
                            <FontAwesomeIcon icon={faMoon} inverse />
                        </IconButton>
                        <Input placeholder="Tìm kiếm"></Input>
                        <IconButton aria-label="Search" size="small">
                            <FontAwesomeIcon icon={faSearch} inverse />
                        </IconButton>
                    </Item>
                </Grid>
            </Grid>
        </DivHeader>
    );
};
export default Header;

import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import { IconButton, Input } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import HeadlessTippy from '@tippyjs/react/headless';
import { KEY_WEATHER } from '~/features/KeyWeather';
import { css } from '@emotion/css';

const Header = () => {
    const DivHeader = styled.div`
        position: fixed;
        display: flex;
        height: 40px;
        width: 98%;
        right: 0;
        top: 0;
        background-color: #0063b1;
        color: #fff;
    `;
    const [searchInput, setSearchInput] = useState('');
    // const [searchSug, setSearchSug] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const title = useSelector((state) => state.switch.value);
    const dispatch = useDispatch();

    useEffect(() => {
        // axios
        //     .get(`https://api.weatherapi.com/v1/search.json?key=f0106112791a4d5486c104334223105&q=Hanoi`)
        //     .then(function (res) {
        //         setSearchValue(res.data);
        //         console.log(res.data);
        //     });
    }, []);

    return (
        <DivHeader>
            <Grid container spacing={0}>
                <Grid item xs={10}>
                    <Item style={{ fontWeight: 600, fontSize: 14 }}>{title}</Item>
                </Grid>
                <Grid item xs={2} style={{ justifyContent: 'flex-end' }}>
                    <Item>
                        <IconButton aria-label="Dark" size="small">
                            <FontAwesomeIcon icon={faMoon} inverse />
                        </IconButton>
                        <div>
                            <HeadlessTippy
                                interactive
                                visible={searchValue.length > 0}
                                render={(attrs) => (
                                    <div className="box-search" tabIndex="-1" {...attrs}>
                                        <ul
                                            className={css`
                                                list-style: none;
                                            `}
                                        >
                                            {/* {searchValue.map((val) => (
                                                <li key={val.id}>{val.name}</li>
                                            ))} */}
                                        </ul>
                                    </div>
                                )}
                            >
                                <Input
                                    placeholder="Tìm kiếm"
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) => {
                                        setSearchInput(e.target.value);
                                    }}
                                ></Input>
                            </HeadlessTippy>
                            <IconButton
                                aria-label="Search"
                                size="small"
                                onClick={() => dispatch(KEY_WEATHER(searchInput), console.log(1))}
                            >
                                <FontAwesomeIcon icon={faSearch} inverse />
                            </IconButton>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </DivHeader>
    );
};
export default Header;

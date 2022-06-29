import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import HeadlessTippy from '@tippyjs/react/headless';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import useAxiosSearch from '~/service/searchApi';
import { set_value } from '~/features/Search';
import { set_fav } from '~/features/favorites/addFavorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddFavorite = () => {
    const [searchInput, setSearchInput] = useState('');
    const { searchApi } = useAxiosSearch();
    const dispatch = useDispatch();
    const listFav = useSelector((state) => state.addFav.value);

    useEffect(() => {
        if (listFav.length > 0) {
            localStorage.setItem('listFav', JSON.stringify(listFav));
        }
    }, [listFav]);

    return (
        <div
            className={css`
                width: 1920px;
                min-height: 1080px;
                background-color: #222121;
                font-family: 'Manrope', sans-serif !important;
                margin-top: 30px;
            `}
        >
            <Container>
                <div
                    className={css`
                        display: block;
                        height: 20px;
                    `}
                ></div>
                <Link
                    to="/favorites"
                    className={css`
                        color: #ffffff;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                        }
                    `}
                >
                    <ArrowBackIcon
                        className={css`
                            position: relative;
                            top: 5px;
                            margin-right: 3px;
                        `}
                    />
                    Back
                </Link>
                <div
                    className={css`
                        display: block;
                        height: 20px;
                    `}
                ></div>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    `}
                >
                    <HeadlessTippy
                        interactive
                        visible={searchInput.length > 0}
                        render={(attrs) => (
                            <div className="box-search" tabIndex="-1" {...attrs}>
                                <ul
                                    className={css`
                                        list-style: none;
                                        background-color: #ffffff9e;
                                        margin: 0;
                                        padding: 0;
                                        color: #000;
                                        cursor: pointer;
                                        width: 1152px;
                                        margin-top: -10px;
                                    `}
                                >
                                    {searchApi.map((result) => {
                                        return (
                                            <li
                                                key={result.id}
                                                onClick={() => {
                                                    setSearchInput('');
                                                    dispatch(set_fav(result.name));
                                                    alert('Add completed');
                                                }}
                                                className={css`
                                                    padding: 5px;
                                                    &:hover {
                                                        background-color: #ffffffc4;
                                                    }
                                                `}
                                            >
                                                <h4
                                                    className={css`
                                                        margin: 5px 0;
                                                    `}
                                                >
                                                    {result.name}
                                                </h4>
                                                <p
                                                    className={css`
                                                        margin: 5px 0;
                                                    `}
                                                >{`${result.name}, ${result.country}`}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    >
                        <input
                            placeholder="Tìm kiếm"
                            // ref={searchRef}
                            type="text"
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                dispatch(set_value(e.target.value));
                                // searchRef.current.focus();
                            }}
                            className={css`
                                border: 0px;
                                padding: 15px 5px;
                                height: 50%;
                                width: 125%;
                                font-size: 14px;
                                &:focus-visible {
                                    outline: none;
                                }
                            `}
                        ></input>
                    </HeadlessTippy>
                </div>
                {/* <div>
                    <Autocomplete
                        disablePortal
                        options={
                            [
                                { label: 'The Godfather', id: 1 },
                                { label: 'Pulp Fiction', id: 2 },
                            ]
                            // searchApi.map((data) => {
                            //     return [{ label: data.name, id: data.id }];
                            // })
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search location"
                                // onChange={(e) => {
                                //     setSearchInput(e.target.value);
                                //     dispatch(set_value(e.target.value));
                                // }}
                            />
                        )}
                        className={css`
                            margin-top: 20px;
                            & label {
                                color: #ffffff;
                            }
                            & fieldset {
                                border-color: #ffffff5e;
                                &:hover {
                                    border-color: #ffffff;
                                }
                            }
                        `}
                    />
                </div> */}
            </Container>
        </div>
    );
};
export default AddFavorite;

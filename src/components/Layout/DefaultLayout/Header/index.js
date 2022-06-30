import React from 'react';
import { useState, useRef } from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/css';
import { useSelector, useDispatch } from 'react-redux';
import HeadlessTippy from '@tippyjs/react/headless';
import { set_value } from '~/features/Search';
import { get_swap } from '~/features/SwapNavBar';
import { current_weather } from '~/features/Current';
import useAxiosSearch from '~/service/searchApi';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const title = useSelector((state) => state.switch.value);
    const swap = useSelector((state) => state.swap.value);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const { searchApi } = useAxiosSearch();

    return (
        <div
            className={css`
                display: flex;
            `}
        >
            <div
                className={css`
                    position: fixed;
                    display: flex;
                    justify-content: center;
                    width: 3%;
                    height: 3.2%;
                    background-color: #1f1f1f;
                    top: 0;
                    left: 0;
                    padding: 10px 0;
                `}
                onClick={() => dispatch(get_swap(!swap))}
            >
                <span>
                    <IconButton aria-label="navigation" size="small">
                        <FontAwesomeIcon
                            icon={faBars}
                            inverse
                            className={css`
                                padding: 0 5px;
                            `}
                        />
                    </IconButton>
                </span>
            </div>
            <div
                className={css`
                    display: flex;
                    background-color: #20253d;
                    position: fixed;
                    width: 96.5%;
                    top: 0;
                    right: 0;
                    z-index: 1;
                    align-items: center;
                    color: #ffffff;
                    padding: 5px;
                `}
            >
                <div
                    className={css`
                        width: 67%;
                    `}
                >
                    <div
                        className={css`
                            font-weight: bold;
                            font-size: 14px;
                            padding-left: 10px;
                        `}
                    >
                        {title}
                    </div>
                </div>
                <div
                    className={css`
                        width: 30%;
                    `}
                >
                    <div
                        className={css`
                            display: flex;
                            justify-content: flex-end;
                        `}
                    >
                        <div
                            className={css`
                                // display: flex;
                                // align-items: center;
                                // background-color: #ffffffc4;
                                padding: 5px;
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
                                                width: 217px;
                                                margin-left: 17px;
                                                margin-top: -3px;
                                            `}
                                        >
                                            {searchApi.map((result) => {
                                                return (
                                                    <li
                                                        key={result.id}
                                                        onClick={() => {
                                                            dispatch(current_weather(result.name));
                                                            setSearchInput('');
                                                        }}
                                                        className={css`
                                                            padding: 10px;
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
                                    ref={searchRef}
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) => {
                                        setSearchInput(e.target.value);
                                        dispatch(set_value(e.target.value));
                                        searchRef.current.focus();
                                    }}
                                    className={css`
                                        border: 0px;
                                        padding: 7px 5px;
                                        height: 50%;
                                        width: 125%;
                                        &:focus-visible {
                                            outline: none;
                                        }
                                    `}
                                ></input>
                            </HeadlessTippy>
                            <IconButton
                                aria-label="Search"
                                size="small"
                                onClick={() => dispatch(current_weather(searchInput))}
                                className={css`
                                    position: absolute !important;
                                    right: 10px;
                                    top: 10px;
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    inverse
                                    className={css`
                                        color: #000;
                                    `}
                                />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;

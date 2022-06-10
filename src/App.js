import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout/';
import styles from './App.module.css';

import { Global, css } from '@emotion/react';

function App() {
    return (
        <Router>
            <Global
                styles={css`
                    :root {
                        --primary: #242f9b;
                        --secondary: #ffffff;
                    }
                `}
            />
            <div className={styles.App}>
                <Box
                    sx={{
                        width: 1920,
                        height: 1080,
                    }}
                >
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </Box>
            </div>
        </Router>
    );
}

export default App;

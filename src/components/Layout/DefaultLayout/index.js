import { Container } from '@mui/material';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import Header from './Header';

const DefaultLayout = ({ children }) => {
    const DivContent = styled.div`
        padding: 30px;
    `;
    return (
        <div className="layout">
            <Header />
            <NavBar />
            <Container maxWidth="xl">
                <DivContent className="content">{children}</DivContent>
            </Container>
        </div>
    );
};
export default DefaultLayout;

import NavBar from './NavBar';
import Header from './Header';

const DefaultLayout = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            <div>
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};
export default DefaultLayout;

import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import Sidebar from './Sidebar';

/**
 * Header component that displays the navigation bar with a logo
 * and a sidebar for navigation.
 *
 * @returns {JSX.Element} The Header component.
 */
function Header() {
    return (
        <div className="header">
            {/* Sidebar for additional navigation options */}
            <Sidebar />
            <header className="header__navigation-bar">
                {/* Logo that links to the home page */}
                <Link className="header__link" to="/home">
                    <img src={logo} className="header__logo" alt="logo" />
                </Link>
            </header>
        </div>
    );
}

export default Header;

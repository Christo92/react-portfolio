import { Link } from 'react-router-dom';
import { bubble as Menu } from "react-burger-menu";

/**
 * Sidebar navigation component using react-burger-menu.
 * Provides quick navigation links to "Home" and "About" pages.
 */
function Sidebar() {
    return (
        <Menu>
            <Link className="menu-item" to="/home">Accueil</Link>
            <Link className="menu-item" to="/about">A propos</Link>
        </Menu>
    );
}

export default Sidebar;

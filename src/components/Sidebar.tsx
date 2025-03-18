import { Link } from 'react-router-dom';
// React-burger-menu
import { bubble as Menu } from "react-burger-menu";

function Sidebar() {
    return (
        <Menu>
            <Link className="menu-item" to="/home">Accueil</Link>
            <Link className="menu-item" to="/about">A propos</Link>
        </Menu>
    );
}

export default Sidebar;

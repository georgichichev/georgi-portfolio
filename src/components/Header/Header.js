import {NavLink} from "react-router-dom";

const menuItems = [
    'Home',
    'Projects',
    'Info',
    'Contact'
];

const Header = () => {
    return(
        <header className="header">
            <h1>Georgi Chichev</h1>
            <p>Web Developer</p>
            <nav>
                <ul>
                    {menuItems.map(x =>
                        <li key={x}>
                            <NavLink to={`/${x.toLowerCase()}`} key={x}>{x}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
const menuItems = [
    'Home',
    'Projects',
    'Info',
    'Contact'
];

const Header = ({onPageClick}) => {
    return(
        <header className="header">
            <h1>Georgi Chichev</h1>
            <p>Web Developer</p>
            <nav>
                <ul>
                    {menuItems.map(x => <li onClick={onPageClick} key={x}>{x}</li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header
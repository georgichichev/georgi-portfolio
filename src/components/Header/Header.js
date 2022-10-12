import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import React from "react";

const menuItems = [
    'Home',
    'Projects',
    'Info',
    'Contact'
];

const Header = () => {
    return (
        <header className="header">
            <h1>Georgi Chichev</h1>
            <p>Web Developer</p>
            <nav>
                <ul>
                    {menuItems.map(x =>
                        <motion.li
                            key={x}
                        >
                            <NavLink
                                to={`/${x.toLowerCase()}`}
                                key={x}
                            >
                                <motion.p
                                    whileHover={{
                                        color: '#777373',
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    {x}
                                </motion.p>
                            </NavLink>
                        </motion.li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
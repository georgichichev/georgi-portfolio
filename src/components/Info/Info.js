import {motion} from "framer-motion";
import AnimatedPage from "../AnimatedPage/AnimatedPage.js";

const certificates = [
    {
        name: "Programming Basics ↗",
        href: "https://softuni.bg/certificates/details/107324/6004be60"
    },
    {
        name: "Programming Fundamentals ↗",
        href: "https://softuni.bg/certificates/details/119806/8c03f069"
    },
    {
        name: "JS Advanced ↗",
        href: "https://softuni.bg/certificates/details/126599/a1c11425"
    },
    {
        name: "JS Applications ↗",
        href: "https://softuni.bg/certificates/details/130307/e236dde4"
    },
    {
        name: "JS Back-End ↗",
        href: "https://softuni.bg/certificates/details/137162/20c0f50e"
    },
    {
        name: "ReactJS ↗",
        href: "https://softuni.bg/certificates/details/140726/cdc60287"
    },

];

const Info = () => {
    return (
        <>
            <AnimatedPage
                className={"info"}
            >
                <motion.a
                    whileHover={{
                        color: '#777373',
                        transition: { duration: 0.3 },
                    }}
                    href="https://github.com/georgichichev/"
                    rel="noreferrer"
                    target="_blank"
                >
                    GitHub ↗
                </motion.a>
                <motion.a
                    whileHover={{
                        color: '#777373',
                        transition: { duration: 0.3 },
                    }}
                    href="https://linkedin.com/in/georgi-chichev"
                    rel="noreferrer"
                    target="_blank"
                >
                    LinkedIn ↗
                </motion.a>
            </AnimatedPage>
            <AnimatedPage
                className={"certificates"}
            >
                <h3>Certificates</h3>
                <ul>
                        {certificates.map(x => (
                            <li key={x.name}>
                                <motion.a
                                    whileHover={{
                                        color: '#777373',
                                        transition: { duration: 0.3 },
                                    }}
                                    href={x.href}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {x.name}
                                </motion.a>
                            </li>
                            )
                        )}
                </ul>
            </AnimatedPage>
        </>
    )
}

export default Info
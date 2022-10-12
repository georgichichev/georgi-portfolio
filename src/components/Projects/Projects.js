import {motion} from "framer-motion";
import AnimatedPage from "../AnimatedPage/AnimatedPage.js";

const Projects = () => {
    return(
        <AnimatedPage
            className={"projects"}
        >
            <h3>Projects (Design & Develop)</h3>
            <article className="project">
                <motion.a
                    whileHover={{
                        color: '#777373',
                        transition: { duration: 0.3 },
                    }}
                    href="https://chatterboxer-9c635.firebaseapp.com"
                    rel="noreferrer" target="_blank"
                >
                    Chatterbox
                </motion.a>
                <p>React, Express, Mongoose & Web Sockets</p>
            </article>
            <article className="project">
                <motion.a
                    whileHover={{
                        color: '#777373',
                        transition: { duration: 0.3 },
                    }}
                    href="https://planetino-295eb.web.app/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Planetino
                </motion.a>
                <p>React & Framer Motion</p>
            </article>
        </AnimatedPage>
    )
}

export default Projects
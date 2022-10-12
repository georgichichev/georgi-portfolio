import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import React from "react";
import AnimatedPage from "../AnimatedPage/AnimatedPage.js";

const Contact = () => {
    return(
        <AnimatedPage
            className={"contact"}
        >
            <p className="contactText">
                Right now, I am open for any javascript related job offers.
            </p>
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = "mailto:georgichichev15@gmail.com";
                    e.preventDefault();
                }}
            >
                <motion.p
                    className="contactLink"
                    whileHover={{
                        color: '#777373',
                        transition: { duration: 0.3 },
                    }}
                >
                    Contact me ↗
                </motion.p>
            </Link>
        </AnimatedPage>
    )
}

export default Contact
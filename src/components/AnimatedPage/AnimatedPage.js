import {motion} from "framer-motion";

const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
};

const AnimatedPage = ({children, className}) => {
    return (
        <motion.div
            className={className}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
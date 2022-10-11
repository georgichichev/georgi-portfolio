import {Link} from "react-router-dom";

const Contact = () => {
    return(
        <section className="contact">
            <p>
                Right now, I am open for any javascript related job offers.
            </p>
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = "mailto:georgichichev15@gmail.com";
                    e.preventDefault();
                }}
            >
                Contact me
            </Link>
        </section>
    )
}

export default Contact
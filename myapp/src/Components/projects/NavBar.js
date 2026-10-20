import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link, useLocation } from "react-router-dom"

export default function Navbar({ fullname }) {
    const githubLink = "http://github.com/CallumF15";
    const linkedInLink = "https://www.linkedin.com/in/callum-flannagan-09ba9a132/";

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const handleSectionClick = (event, sectionId) => {
        if (isHomePage) {
            event.preventDefault();

            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
                <a className="logo" href="#home">
                    {fullname || "YOURNAME"}<span>.</span>
                </a>

                <div className="navbar-right">
                    <div className="nav-links">
                        <Link to="/#home" onClick={(event) => handleSectionClick(event, "home")}>
                            Home
                        </Link>

                        <Link to="/#about" onClick={(event) => handleSectionClick(event, "about")}>
                            About
                        </Link>

                        <Link to="/#projects" onClick={(event) => handleSectionClick(event, "projects")}>
                            Work
                        </Link>

                        {/* <Link to="/contact" onClick={(event) => handleSectionClick(event, "contact")}>
                            Contact
                        </Link> */}
                    </div>

                    <div className="navbar-socials">
                        <a
                            href="mailto:CallumFlannagan@hotmail.com?subject=Portfolio%20Feedback"
                            aria-label="Email me"
                            title="Email"
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href={linkedInLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

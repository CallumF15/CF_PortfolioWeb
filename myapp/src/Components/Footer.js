import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import "../Styles/Footer.scss";

const Footer = ({ fullname }) => {
    const githubLink = "https://github.com/CallumF15";
    const linkedInLink = "https://www.linkedin.com/in/callum-flannagan-09ba9a132/";
    const emailLink = "mailto:CallumFlannagan@hotmail.com?subject=Portfolio%20Enquiry";

    return (
        <footer className="site-footer" id="contact">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-intro">
                        <a href="#home" className="footer-logo">
                            {fullname || "YOURNAME"}<span>.</span>
                        </a>

                        <h2>
                            Have a project
                            <br />
                            <span>in mind?</span>
                        </h2>

                        <p>
                            I'm always interested in connecting, sharing ideas, and
                            exploring new opportunities.
                        </p>

                        <a className="footer-contact" href={emailLink}>
                            Let's talk <span>↗</span>
                        </a>
                    </div>

                    <div className="footer-links">
                        <div className="footer-link-group">
                            <span className="footer-label">EXPLORE</span>

                            <Link to="home" smooth duration={500}>
                                Home
                            </Link>
                            <Link to="about" smooth duration={500} offset={-80}>
                                About
                            </Link>
                            <Link to="projects" smooth duration={500} offset={-80}>
                                Projects
                            </Link>
                        </div>

                        <div className="footer-link-group">
                            <span className="footer-label">CONNECT</span>

                            <a
                                href={linkedInLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn <span>↗</span>
                            </a>

                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub <span>↗</span>
                            </a>

                            <a href={emailLink}>
                                Email <span>↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} {fullname || "YOURNAME"}.
                        All rights reserved.
                    </p>

                    <p className="footer-built">
                        DESIGNED WITH PURPOSE <span>✳</span>
                    </p>

                    <a href="#home" className="back-to-top">
                        BACK TO TOP ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
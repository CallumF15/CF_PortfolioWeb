import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import { IconContext } from 'react-icons/lib'
import 'bootstrap/dist/js/bootstrap.bundle'

//Top part of webpage - displays name/logo
const Header = ({ fullname }) => {
    const githubLink = "http://github.com/CallumF15";
    const linkedInLink = "https://www.linkedin.com/in/callum-flannagan-09ba9a132/";

    return (
        <>
            <nav className="navbar navbar-default sticky-top navbar-expand-lg navbar-light nav-box p-4">
                <div className="container">
                    <a className="navbar-brand" href="/#">
                        {fullname}
                        {/* <div class="svg-wrapper">
                            <svg>
                                <rect class="shape" height="50" width="100%" />
                            </svg>
                        </div> */}
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto pe-5">

                            <li className="nav-item social-colour">
                                <a onClick={() => scroll.scrollToTop} className="nav-link" href="/#"> Home </a>
                            </li>

                            <li className="nav-item social-colour" >
                                <Link
                                    activeClass="active"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={100}
                                    className='nav-link'>

                                    About
                                </Link>
                            </li>

                            <li className="nav-item social-colour" >
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={100}
                                    className='nav-link'>

                                    Projects
                                </Link>
                            </li>

                            <IconContext.Provider value={{ size: 20 }}>
                                <li className="nav-item social-colour me-1">
                                    <a className="nav-link waves-effect waves-light" href="mailto: CallumFlannagan@hotmail.com?subject=Portfolio%Feedback">
                                        <FaEnvelope />
                                    </a>
                                </li>

                                <li className="nav-item social-colour me-1">
                                    <a className="nav-link waves-effect waves-light" href={linkedInLink} target="_blank" rel="noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                </li>

                                <li className="nav-item social-colour">
                                    <a className="nav-link waves-effect waves-light" href={githubLink} target="_blank" rel="noreferrer"> 
                                        <FaGithub />
                                    </a>
                                </li>
                            </IconContext.Provider>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
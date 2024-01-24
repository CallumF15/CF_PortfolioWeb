import PropTypes from 'prop-types'
import '../Styles/index.scss'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
//import { Nav, Container } from 'react-bootstrap'

//Top part of webpage - displays name/logo 
const Header = ({fullname}) => {
    const githubLink = "http://github.com/CallumF15";
    const linkedInLink = "/#";

    return (
        <>
            <ScrollLink
                to={"home"}
                spy={true}
                smooth={true}
                duration={500}
                className='some-class'
                activeClass='some-active-class'>
            </ScrollLink>


            <nav className="navbar navbar-default sticky-top navbar-expand-lg navbar-light nav-box p-4">
                <div className="container">
                    <a className="navbar-brand" href="/#">{fullname}
                        {//maybe replace name with logo
                            /* <div class="svg-wrapper">
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

                            <li className="nav-item">
                                <a className="nav-link active" href="/#"> Home </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="/#">Projects</a>
                            </li>

                            {//li with "sr-only" 
                                /* <li className="nav-item">
                                <a className="nav-link active" href="#">Projects <span className="sr-only">(current)</span></a>
                            </li> */}

                            
                            <li className="nav-item social-colour me-1">
                                <a className="nav-link waves-effect waves-light" href="mailto: CallumFlannagan@hotmail.com?subject=Portfolio%Feedback">
                                    <FaEnvelope size={20} />
                                </a>
                            </li>

                            <li className="nav-item social-colour me-1">
                                <a className="nav-link waves-effect waves-light" href={linkedInLink}>
                                    <FaLinkedinIn size={20} />
                                </a>
                            </li>

                            <li className="nav-item social-colour">
                                <a className="nav-link waves-effect waves-light" href={githubLink}>
                                    <FaGithub className="" size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.defaultProps = {  //if no value assigned to prop, assign this
    title: 'Test 1 2 3',
}

//Assign data type of prop
Header.propTypes = {
    title: PropTypes.string,
}

export default Header
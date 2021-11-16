import PropTypes from 'prop-types'
import '../index.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'



//Top part of webpage - displays name/logo 

const Header = (props) => {
    return (
        <>
            <nav className="navbar navbar-default sticky-top navbar-expand-sm navbar-light nav-box p-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Callum Flannagan
                    {/* <div class="svg-wrapper">
                        <svg>
                            <rect class="shape" height="50" width="100%" />
                        </svg>
                    </div> */}
                    
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto pe-5">

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            < li className="nav-item" >
                                <a className="nav-link" href="#">Contact</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light social-colour">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light social-colour" href={'http://github.com/CallumF15'}>
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
import PropTypes from 'prop-types'
import '../index.scss'
import { FaLinkedinIn  } from 'react-icons/fa'



//Top part of webpage - displays name/logo 

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Callum Flannagan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        < li className="nav-item" >
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light">
                                <FaLinkedinIn/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <h1> {props.title} </h1>

        </div>
    )
}

Header.defaultProps = {  //if no value assigned to prop, assign this
    title: 'Test 1 2 3',
}

//Assign data type of prop
Header.propTypes ={  
    title: PropTypes.string,
}

export default Header
import React from 'react'
import '../Styles/index.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = (props) => {
    return (
        <footer className="bg-dark">
            <div className="text-light">
                <div className="container">
                    <div className="p-2">
                        <p className="text-center py-2"> © {(new Date().getFullYear())} Copyright - {props.fullname}
                            <a className="text-light social-colour  px-2 py-2 mx-1" href={'http://Linkedin.com/'}>
                                <FaLinkedinIn size={20} /></a>

                            <a className="text-light social-colour px-2 py-2 mx-1" href={'http://github.com/CallumF15'}>
                                <FaGithub className="" size={20} /> </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

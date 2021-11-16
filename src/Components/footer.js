import React from 'react'
import '../index.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = (props) => {
    return (
        <footer>
            <div className="bg-dark text-light">
                <div className="container">
                    <div className="p-3">
                        <p className="tt"> © 2021 Copyright - {props.fullname}

                            <a className="social-colour px-2 py-2 mx-1">
                                <FaLinkedinIn size={20} /></a>

                            <a className="social-colour px-2 py-2 mx-1" href={'http://github.com/CallumF15'}>
                                <FaGithub className="" size={20} /> </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import '../Styles/index.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = (props) => {
    return (
        <footer className="bg-dark">
            <div className="text-light">
                <div className="container">
                    <div className="p-2">
                        <p className="text-center pt-2"> © {(new Date().getFullYear())} Copyright - {props.fullname}
                            <a className="text-light social-colour  px-2 py-2 mx-1" href={'http://Linkedin.com/'}>
                                <FaLinkedinIn size={20} /></a>

                            <a className="text-light social-colour px-2 py-2 mx-1" href={'http://github.com/CallumF15'}>
                                <FaGithub className="" size={20} /> </a>
                        </p>

                        <p className='text-center'>
                            Image by <a href="https://www.freepik.com/free-vector/white-abstract-background-3d-paper-style_6443898.htm#query=white%20abstract%20shapes%20transparent%20background&position=0&from_view=keyword&track=ais_user&uuid=02d81af6-3e9b-4ffe-9b82-4128f9b0ffa8">Freepik</a>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

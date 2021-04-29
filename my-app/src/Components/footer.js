import React from 'react'
import '../index.scss'

const Footer = (props) => {
    return (
        <div className="bg-dark text-center text-lg-start text-light">
            <div className="text-center p-3">
                © 2021 Copyright -
                <a className="text-light" href=""> {props.fullname}</a>
            </div>
        </div>
    )
}

export default Footer

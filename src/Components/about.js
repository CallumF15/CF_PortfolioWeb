import React from 'react'
import mePic from '../Images/me.jpg'

const about = () => {
    return (
        <>
            <section className="py-5 text-center  pt-5 about-background">
                <div className="container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <img className="about-profile-img" src={mePic}/> 
                            <h1 className="fw-light">Callum Flannagan</h1>
                            <p className="lead about-text-colour"> Hi, I'm Callum a graduate developer.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Get to know me</a>
                                <a href="#" className="btn btn-secondary my-2">Contact me</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about

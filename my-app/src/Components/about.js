import React from 'react'
import mePic from '../Images/me.jpg'

const about = () => {
    return (
        <>
            <section className="py-5 text-center  pt-5 about-background">
                <div className="container">
                    <div className="row py-lg-5">
                        <div className="col mx-auto">

                            <h1 className="fw-light">Callum Flannagan</h1>

                            <p className="lead about-text-colour">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque neque non massa vehicula sodales. 
                            Integer tincidunt euismod massa, non maximus ante maximus ut. Nunc convallis arcu nulla, ultricies mollis sem rhoncus in. I
                            nterdum et malesuada fames 
                            </p>
                            
                            {/* <p className="lead about-text-colour"> Hi, I'm Callum a graduate developer from Glasgow, Scotland</p>
                            <p className="lead about-text-colour"> A graduate developer, dabbling in games and web development</p> */}

                            <p>
                                <a href="htt" className="btn btn-primary my-2">Get to know me</a>
                                <a href="htt" className="btn btn-secondary my-2">Contact me</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about

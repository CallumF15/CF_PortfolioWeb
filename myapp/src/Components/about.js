import React from 'react'

const About = () => {

    return (
        <>
            <section className='About about-bg-pattern'>
                <div className='about-bg-pattern hidden p-5'>

                    <div className="about-custom-shape bg-light">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="pt-2 pb-5 my-5 text-center">
                        <h1 className="display-5 fw-bold">About me</h1>
                        <div className="text-underline mb-4"></div>

                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4 pb-5">
                                Organised and adaptable professional with strong IT skills and a background in software development. Experienced with C#, web technologies, and Unity, alongside managing documentation, schedules, and small business operations. Skilled at problem-solving, learning new tools quickly, and balancing technical and organisational responsibilities. Motivated to contribute both technical expertise and reliability to a dynamic workplace
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
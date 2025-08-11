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
                            A software development graduate with a strong foundation in programming and hands-on experience in web and game development. During a career break, I dedicated time to caring for my father and assisting with his business operations, enhancing my problem-solving, organization, and communication skills. Throughout this period, I remained committed to my technical growth through personal projects and continuous learning. Now eager to re-enter the industry, leverage my skills, and contribute to a dynamic development team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
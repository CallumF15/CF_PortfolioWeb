import React from 'react'

const About = () => {

    return (
        <>
            {/* <section className='About shadow-sm about-bg-pattern p-5 ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}images/about-bg.png)`}}></section> */}
            <section className='About about-bg-pattern p-5'>

                <div className="about-custom-shape bg-light">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                    </svg>
                </div>

                

                <div class="pt-2 pb-5 my-5 text-center">
                    <h1 class="display-5 fw-bold">About me</h1>

                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 pb-5">
                            A passionate and adaptable software development graduate with a strong determination to excel, embrace new opportunities, and overcome challenges.
                            Proficient in languages such as C# and Java. Although my professional experience diverged from the software field, I devoted my time to being a
                            devoted caregiver for my father and providing vital support to his business during a challenging period. Now, equipped with valuable life experiences,
                            I am eager to re-immerse myself in the software industry, expand my skill set, and contribute as an integral member of a development team.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
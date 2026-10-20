import "../Styles/About.scss";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-heading">
                    <span className="about-eyebrow">
                        <span className="about-dot" />
                        A LITTLE ABOUT ME
                    </span>

                    <h2>
                        More than just
                        <br />
                        <span className="about-accent">writing code.</span>
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-copy">
                        <p className="about-intro">
                            I'm a junior software developer with a background in Computer Games Software Development and a passion for building well-structured, maintainable software.
                        </p>

                        <p>
                            Working across C#, Java, C++ and Python, I've developed projects ranging from modular 
                            gameplay systems to REST APIs and data analysis tools. I enjoy breaking down complex 
                            problems, improving existing code and designing reusable components that make software 
                            easier to understand, test and extend.
                        </p>

                        <p>
                            My approach is centred on thoughtful software design, continuous learning and writing 
                            code with a clear purpose. Whether I'm refactoring a system, building backend functionality
                             or exploring new technologies, I aim to create solutions that are practical, reliable 
                             and built to grow.
                        </p>


                        <a className="about-cta" href="#projects">
                            Explore my work <span>↗</span>
                        </a>
                    </div>

                    <div className="about-side">
                        <div className="about-card">
                            <span className="about-card-number">01</span>
                            <h3>Problem solver</h3>
                            <p>
                                I enjoy breaking complex challenges into clear, manageable
                                solutions.
                            </p>
                        </div>

                        <div className="about-card">
                            <span className="about-card-number">02</span>
                            <h3>Always learning</h3>
                            <p>
                                Exploring technologies, refining my skills and finding
                                better ways to build.
                            </p>
                        </div>

                        <div className="about-card">
                            <span className="about-card-number">03</span>
                            <h3>Detail focused</h3>
                            <p>
                                Combining technical thinking with organisation, usability
                                and care in the final result.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-bottom">
                    <span>CURIOUS BY NATURE.</span>
                    <span>BUILT WITH PURPOSE.</span>
                </div>
            </div>
        </section>
    );
};

export default About;
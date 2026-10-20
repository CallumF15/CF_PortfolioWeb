const Landingpage = ({ fullname }) => {

    // const AvatarPic = "/Images/avatar.png"; //consider using this

    return (
        <>
            <section className="hero">
                
                <main className="hero-content">
                    <div className="hero-eyebrow">
                        <span className="status-dot" />
                        <span>Junior Software developer · Portfolio</span>
                    </div>

                    <h1>

                        I build, learn, 
                        <br />
                        <span className="accent-text">
                            and bring ideas to life.
                        </span>
                    </h1>

                    <p className="hero-description">
                        Thoughtful software, purposeful interfaces, and a commitment to continuous improvement.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="button-primary">
                            Explore my work <span>↘</span>
                        </a>

                        <a href="#about" className="button-secondary">
                            More about me <span>↗</span>
                        </a>
                    </div>
                </main>

                <div className="hero-footer">
                    <span>01 / SELECTED WORK</span>
                    <a href="#projects">Scroll to explore ↓</a>
                </div>
            </section>
        </>
    )
}

export default Landingpage

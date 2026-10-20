import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Projects/ProjectDetails.scss";
import "../../Styles/Projects/UnityProject.scss"

import Navbar from "./NavBar";
import Footer from '../Footer'

const ProjectDetails = ({ fullname, projects = [] }) => {
    const [showGame, setShowGame] = useState(false);
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    function toggleGame() {
        setShowGame((prevState) => !prevState);
    }

    if (!project) {
        return (
            <main className="case-study">
                <div className="case-container case-not-found">
                    <span className="case-eyebrow">PROJECT NOT FOUND</span>
                    <h1>Looks like this page doesn't exist.</h1>
                    <Link className="case-back-link" to="/#projects">
                        ← Back to projects
                    </Link>
                </div>
            </main>
        );
    }

    const getDemoLabel = (category) => {
        switch (category?.toLowerCase()) {
            case "games":
            case "game":
                return "Play the Game";

            case "websites":
            case "website":
                return "Visit Live Site";

            case "applications":
            case "application":
            case "apps":
                return "Try the App";

            default:
                return "View Live Demo";
        }
    };

    return (
        <>
            <Navbar fullname={fullname} />

            <main className="case-study">
                <div className="case-container">
                    <Link className="case-back-link" to="/#projects">
                        ← Back to all projects
                    </Link>

                    <header className="case-hero">
                        <span className="case-eyebrow">
                            {project.category} / PROJECT CASE STUDY
                        </span>

                        <h1>{project.title}<span>.</span></h1>
                        <p className="case-subtitle">{project.subtitle}</p>

                        <div className="case-hero-image">
                            <img src={project.heroImage} alt={`${project.title} overview`} />
                        </div>
                    </header>

                    <section className="case-facts" aria-label="Project details">
                        <div className="case-fact">
                            <span>MY ROLE</span>
                            <p>{project.team.role}</p>
                        </div>

                        <div className="case-fact">
                            <span>TEAM</span>
                            <p>{project.team.size}</p>
                        </div>

                        <div className="case-fact">
                            <span>TARGET AUDIENCE</span>
                            <p>{project.audience}</p>
                        </div>

                        <div className="case-fact">
                            <span>TECH STACK</span>
                            <div className="case-tags">
                                {project.technologies.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="case-body">
                        <aside className="case-sidebar">
                            <span className="case-eyebrow">ON THIS PAGE</span>
                            <a href="#overview">Overview</a>
                            <a href="#team">Team & role</a>
                            <a href="#objectives">Objectives</a>
                            <a href="#decisions">Technical decisions</a>
                            <a href="#challenges">Challenges</a>
                            <a href="#outcome">Outcome & learnings</a>

                            {project.liveDemo && (
                                <a href="#live-demo">
                                    {getDemoLabel(project.category)}
                                </a>
                            )}
                        </aside>

                        <div className="case-content">
                            <section className="case-section" id="overview">
                                <span className="case-number">01 / THE BACKGROUND</span>
                                <h2>Project overview</h2>
                                <p>{project.overview}</p>
                            </section>

                            <section className="case-section" id="team">
                                <span className="case-number">02 / COLLABORATION</span>
                                <h2>Team & responsibilities</h2>
                                <p>{project.team.about}</p>
                                <h3>Team involved</h3>
                                <ul>
                                    {project.team.members.map((member) => (
                                        <li key={member}>{member}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="case-section" id="objectives">
                                <span className="case-number">03 / THE PLAN</span>
                                <h2>Goals & objectives</h2>
                                <ul>
                                    {project.objectives.map((objective) => (

                                        <li key={objective}>{objective.description}</li>

                                    ))}

                                    {/* //decide which design to use later */}
                                    {/* {project.objectives.map((objective, index) => (
                                        <div className="objective" key={objective.title ?? index}>
                                            <h3>{objective.title}</h3>
                                            <p>{objective.description}</p>
                                        </div>
                                    ))} */}
                                </ul>
                            </section>

                            <section className="case-section" id="decisions">
                                <span className="case-number">04 / THE APPROACH</span>
                                <h2>Technical decisions</h2>
                                <p>
                                    Every project involves decisions and trade-offs. Here are
                                    the key choices that shaped this project.
                                </p>

                                <div className="case-decision-list">
                                    {project.decisions.map((decision, index) => (
                                        <article className="case-decision" key={decision.title}>
                                            <span className="case-decision-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <h3>{decision.title}</h3>
                                                <p>{decision.description}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="case-section" id="challenges">
                                <span className="case-number">05 / PROBLEM SOLVING</span>
                                <h2>Challenges & solutions</h2>

                                {project.challenges.map((challenge) => (
                                    <article className="case-challenge" key={challenge.problem}>
                                        <h3>{challenge.problem}</h3>
                                        <p>{challenge.solution}</p>
                                    </article>
                                ))}
                            </section>

                            {project.gallery?.length > 0 && (
                                <section className="case-section">
                                    <span className="case-number">06 / VISUALS</span>
                                    <h2>Project gallery</h2>
                                    <div className="case-gallery">
                                        {project.gallery.map((image, index) => (
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                key={image}
                                                loading="lazy"
                                            />
                                        ))}
                                    </div>
                                </section>
                            )}

                            <section className="case-section" id="outcome">
                                <span className="case-number">07 / THE RESULT</span>
                                <h2>Outcome & learnings</h2>
                                <h3>What I delivered</h3>
                                <p>{project.outcome}</p>

                                <h3>What I learned</h3>
                                <p>{project.learnings}</p>
                            </section>

                            {(project.repository || project.liveDemo) && (
                                <div className="case-actions" id="live-demo">
                                    {project.liveDemo && (
                                        <a
                                            className="case-action-primary"
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View live project ↗
                                        </a>
                                    )}

                                    {project.repository && (
                                        <a
                                            className="case-action-secondary"
                                            href={project.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View source code ↗
                                        </a>
                                    )}
                                </div>
                            )}


                            {/* Live demo section */}
                            {/* {project.liveDemo && (
                                <section className="unity-game-section text-center" id="live-demo">
                                    {showGame ? (
                                        <>
                                            <div className="text-center py-3 gameScroll" id="unityGame">
                                                <h2 className="unity-game-heading">{project.name}</h2>

                                                <iframe
                                                    title={project.name}
                                                    className="unity-game-frame"
                                                    src={project.liveDemo}
                                                    scrolling="no"
                                                    allowFullScreen
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                className="unity-game-button"
                                                onClick={toggleGame}
                                            >
                                                Close {project.category?.toLowerCase() === "games" ? "Game" : "Demo"}
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="button"
                                            className="unity-game-button"
                                            onClick={toggleGame}
                                        >
                                            {getDemoLabel(project.category)}
                                        </button>
                                    )}
                                </section>
                            )} */}

                            <div className="case-end">
                                <span>END OF CASE STUDY</span>
                                <Link to="/#projects">Explore more projects ↗</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer fullname={fullname} />
        </>
    );
};

export default ProjectDetails;
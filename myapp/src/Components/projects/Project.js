import { useState } from "react";
import "../../Styles/Projects/Project.scss";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Utility/LoadingSpinner";

const Projects = ({ projects = [], dataloading, error }) => {
    const [activeCategory, setActiveCategory] = useState("All Projects");

    const categories = [
        "All Projects",
        "Games",
        "Websites",
        "Applications"
    ];

    const filteredProjects =
        activeCategory === "All Projects"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    const categoryCounts = projects.reduce((counts, project) => {
        counts[project.category] = (counts[project.category] || 0) + 1;
        return counts;
    }, {});

    const totalProjects = projects.length;

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <header className="projects-header">
                    <span className="projects-eyebrow">
                        <span className="projects-status-dot" />
                        02 / SELECTED WORK
                    </span>

                    <h2>
                        Things I've built<span className="projects-accent">.</span>
                    </h2>

                    <p>
                        A selection of projects, ideas, and things I've brought to life.
                    </p>
                </header>

                <div className="project-filters" aria-label="Filter projects">
                    {categories.map((category, index) => (
                        <button key={category} type="button"
                            className={`project-filter ${activeCategory === category ? "active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                        >
                            <span className="filter-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="filter-name">{category}</span>

                            <span className="filter-count">
                                ({String(
                                    category === "All Projects"
                                        ? totalProjects
                                        : categoryCounts[category] || 0
                                ).padStart(2, "0")})
                            </span>
                            {activeCategory === category && (
                                <span className="filter-indicator" aria-hidden="true">
                                    ↗
                                </span>
                            )}
                        </button>
                    ))}
                </div>


                <div className="projects-grid">
                    {
                        dataloading ? (
                            <div className="projects-loading">
                                <LoadingSpinner />
                            </div>) : error ? (
                                <p role="alert">{error}</p>
                            ) :
                            (filteredProjects.map((project) => (
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="project-card"
                                    key={project.id}
                                >
                                    <div className="project-image">
                                        <img src={project.heroImage} alt={project.title} />

                                        <div className="project-image-overlay">
                                            <h3>{project.title}</h3>
                                            <span>{project.category}</span>
                                        </div>
                                    </div>

                                    <div className="project-info">
                                        <p>   {project.overview.length > 200
                                            ? project.overview.slice(0, 200) + "..."
                                            : project.overview}</p>

                                        <div className="project-tags">
                                            {project.technologies.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            )))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="projects-empty">No projects in this category yet.</p>
                )}

                <div className="projects-footer">
                    <span>BUILT WITH PURPOSE.</span>
                    <span>{String(filteredProjects.length).padStart(2, "0")} PROJECTS</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
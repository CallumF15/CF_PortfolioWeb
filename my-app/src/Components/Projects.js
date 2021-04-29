import Project from './Project'

const Projects = ({ projects, onDelete, onToggle }) => {

    return (
        <div>
            {projects.map((project) => (
            <Project key={project.id} project={project}
            onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Projects

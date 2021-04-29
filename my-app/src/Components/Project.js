import {FaTimes} from 'react-icons/fa'

const Project = ({ project, onDelete, onToggle }) => {
    return (
        
        <div className={`project ${project.reminder ? 'reminder': '' }`} 
            onDoubleClick={() => onToggle(project.id)}>
                
            <h3>
                {project.name} <FaTimes onClick={() => onDelete(project.id)} />
            </h3> 
            <p> {project.desc} </p>
        </div>
    )
}

export default Project

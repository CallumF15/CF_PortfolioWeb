import Task from './task'

const Tasks = ({ tasks, onViewed}) => {

    return (
        <div className="container">
            <div className="row h-100">

            {tasks.map((task) => (
            <Task key={task.id} task={task} onViewed={onViewed}/>
            ))}

            </div>
        </div>

    )
}

export default Tasks

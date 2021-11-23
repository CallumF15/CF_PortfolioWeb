import Task from './task'
import TaskDetails from './taskDetails'

const Tasks = ({ tasks, onViewed }) => {


    return (
        <>
            <div className="pt-4 pb-5 bg-light">
                <div className="container">
                    <h1 className="text-center pb-3"> Projects </h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {tasks.map((task) => (
                            <Task key={task.id} task={task} onViewed={onViewed} />
                        ))}

                    </div>
                </div>
            </div>

            {tasks.filter(task => task.reminder).map(task => (
                <TaskDetails key={task.id} task={task} onViewed={onViewed} />
            ))}

        </>
    )
}

export default Tasks

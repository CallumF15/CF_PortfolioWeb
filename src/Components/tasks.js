import Task from './task'
import TaskDetails from './taskDetails'

const Tasks = ({ tasks, onViewed }) => {

    return (
        <>


            {/* <div className="container">
                 <h2 className="pb-2 border-bottom"> Projects </h2>

                <div className="row h-100">

                    {tasks.map((task) => (
                        <Task key={task.id} task={task} onViewed={onViewed} />
                    ))}

                </div>
            </div> */}

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {tasks.map((task) => (
                            <Task key={task.id} task={task} onViewed={onViewed} />
                        ))}

                    </div>
                </div>
            </div>

            {/* <div className="pDetailsContainer">
                <div className="container">
                    <div className="row h-100">

                        {tasks.filter(task => task.reminder).map(task => (
                            <TaskDetails key={task.id} task={task} onViewed={onViewed} />
                        ))}

                    </div>
                </div>
            </div> */}

            {tasks.filter(task => task.reminder).map(task => (
                <TaskDetails key={task.id} task={task} onViewed={onViewed} />
            ))}

        </>
    )
}

export default Tasks

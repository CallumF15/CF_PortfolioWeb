import Task from './task'
import TaskDetails from './taskDetails'
import { Element } from 'react-scroll'


const Tasks = ({ tasks, onViewed }) => {

    return (
        <>
            <Element id='projects' name='projects'>
                <section className="Projects">
                    <div className="pt-5 pb-5 bg-light">
                        <div className="container project-bg-border">
                            <div className='row'>
                                <h1 className="text-center pb-3"> Projects  </h1>
                                <div className="text-underline"></div>

                                <div className='project-selector d-flex justify-content-center pt-5'>
                                    <ul className='list-group list-group-horizontal'>
                                        <li className="list-group-item"> Games </li>
                                        <li className="list-group-item"> Websites </li>
                                    </ul>
                                </div>

                                <div className='container pt-3'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {console.log("TASK ELEMENT: ", tasks)}
                                        {tasks.map((task) => (
                                            <Task key={task.id} task={task} onViewed={onViewed} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {tasks.filter(task => task.reminder).map(task => (
                    <TaskDetails key={task.id} task={task} onViewed={onViewed} />
                ))}
            </Element>
        </>
    )
}

export default Tasks

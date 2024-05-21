import { useState, useEffect } from 'react'
import Task from './task'
import TaskDetails from './taskDetails'

const Tasks = ({ tasks, onViewed }) => {
    const [showMoreProjects, SetShowMoreProjects] = useState(false);

    //Runs on the first render
    //And any time any dependency value changes
    useEffect(() => {
        console.log('re-render on button click')
        console.log(showMoreProjects)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index, arr) => {
              //console.log(entry);
              if (entry.isIntersecting) {
                entry.target.classList.add('show');
              }//else //uncomment if you want the animation to replay everytime its visible
              // entry.target.classList.remove('show');
            })
          });
        
          const hiddenElements = document.querySelectorAll('.hidden');
          console.log( "list: ", hiddenElements)
          hiddenElements.forEach((el) => observer.observe(el));

    }, [showMoreProjects])

    const maxNumberOfProjectsVis = 3; //maximum number of projects to be shown at one time.

    const defaultList = tasks.map((task, i, arr) => {
        if (i <= arr.length - 2) {
            return <Task key={task.id} task={task} onViewed={onViewed} className={'hidden'} />
        } else
            return <Task key={task.id} task={task} onViewed={onViewed} className={'hidden'} />
    })

    let projectList = defaultList;
    const totalNoOfProjects = defaultList.length; //use this later when projects exceed 6
    // console.log(totalNoOfProjects);

    if (showMoreProjects === false)
        projectList = projectList.splice(0, maxNumberOfProjectsVis);  //limit tasks to only show a maximum of (n || maxNumberOfProjectsVis) at a time
    else
        projectList = defaultList;

    return (
        <>
            <section className="projects" style={{ position: 'relative' }}>
                <div className="pt-5 pb-5 bg-light">
                    <div className="container">
                        <div className='row'>
                            <h1 className="display-5 fw-bold text-center pb-3"> Projects </h1>
                            <div className="text-underline"></div>

                            {/*Uncomment when more projects are added of different types*/}
                            {/* <div className='project-selector d-flex justify-content-center pt-5'>
                                    <ul className='list-group list-group-horizontal'>
                                        <li className="list-group-item"> Games </li>
                                        <li className="list-group-item"> Websites </li>
                                    </ul>
                                </div> */}

                            <div className='container pt-5'>
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {/* {console.log("TASK ELEMENT: ", tasks)} */}
                                    {projectList}
                                </div>

                                <div className='col-12 text-center p-5'>
                                    {
                                        (totalNoOfProjects <= maxNumberOfProjectsVis) ? "" :
                                            <button className='btn btn-lg' onClick={() => SetShowMoreProjects((prevState) => !prevState)}> {(showMoreProjects === false) ? "Show more" : "Show Less"}</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {tasks.filter(task => task.reminder).map(task => (
                <TaskDetails key={task.id} task={task} onViewed={onViewed} />
            ))}
        </>
    )
}

export default Tasks

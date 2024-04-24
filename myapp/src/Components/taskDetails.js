
import React, { } from 'react'
import ProjectDetailsAbout from './projectDetailsAbout'
import ProjectDetailsInfo from './projectDetailsInfo'

//import projectimg from '../Images/game-dev-img.jpg'
//import ProjectDetailsAbout from './projectDetailsAbout'
//import Tasks from './tasks'
//import Gallery from './gallery'

const TaskDetails = ({ task }) => {
    React.useEffect(() => {

    }, [])

    //const teamWords = task.projectdetails.team.split(','); //separate text into individial words

    return (
        <>
            {/* <div className="game-post ">
                <div className="background-wrap">
                    <div className="cloud-1">
                        <a href="">
                            <img src={cloud} alt="cloud" />
                        </a>
                    </div>

                    <div className="cloud-2">
                        <a href="">
                            <img src={cloud} alt="cloud" />
                        </a>
                    </div>
                </div>
            </div> */}

            <section className="p-details pb-5 pt-5">
                <article className="">
                    <div className="container project-innerdetails shadow-sm bg-light">
                        <div className='row display-flex'>

                            <div className="d-flex justify-content-center">
                                <h2 className="display-4 title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                            </div>

                            {/* <div className='col-12 col-sm-12 p-1'>
                                <img src={flyPic} className="card-img-top project-img" alt="..." />
                            </div> */}
                            
                            <ProjectDetailsAbout key={task} task={task} />
                            <ProjectDetailsInfo key={task.id} task={task}/> 

                            {/* <Gallery> </Gallery> */}
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default TaskDetails

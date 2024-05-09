import ProjectDetailsAbout from './projectDetailsAbout'
import ProjectDetailsInfo from './projectDetailsInfo'
import imageHook from '../imageHook'

//import cloud from '../../../src/Images/cloud-1.png'
//import projectimg from '../Images/game-dev-img.jpg'
// import Gallery from '../gallery'

const TaskDetails = ({ task }) => {
    const stringImage = imageHook(process.env.PUBLIC_URL + task.image);

    // const cloud = process.env.PUBLIC_URL + "Images/cloud-1.png";
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
                <article className="container project-innerdetails shadow-sm bg-light">
                    <div className='row row-col-1 row-col-md-2 display-flex'>

                        <div className="d-flex justify-content-center">
                            <h2 className="display-4 fw-bold title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                        </div>

                        <ProjectDetailsAbout task={task} stringImage={stringImage} />
                        <ProjectDetailsInfo task={task} stringImage={stringImage}/>

                        {/* <Gallery> </Gallery> */}

                        {/* Unity Game goes here -> Separate React component? */}
                        {/* <div className="">
                            <iframe title={task.name} className="iframe-style" id="" src={task.link} width="951" height="713" frameborder="0" marginheight="0" scrolling="no"></iframe>
                        </div> */}
                    </div>
                </article>
            </section>
        </>
    )
}

export default TaskDetails

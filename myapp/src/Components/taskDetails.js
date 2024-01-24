import cloud from '../Images/cloud-1.png'
import projectimg from '../Images/game-dev-img.jpg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import Gallery from './gallery'

const taskDetails = ({ task }) => {
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
                                <h2 className="title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                            </div>

                            <div className='col-6 col-sm-9 p-inner-bg'>
                                <div className='p-2'>
                                    <h2 className=''> About this project </h2>

                                    <div className='px-2'> {/* Indent paragraph */}
                                        <p> A 2D superhero video game targeted towards children which utilizes the technology LeapMotion for hand gesture recognition
                                            to enable character movement.

                                            {task.bg}
                                        </p>

                                    </div>
                                </div>
                            </div>


                            {/* Project information e.g Team/software  */}
                            <div className='col-6 col-sm-3'>
                                <div className='content-shadow p-details-bg'>
                                    <img src={projectimg} className='img-fluid' alt="info-here" />
                                    <div className='p-2'>

                                        <h2 className='p-2'> University Project </h2>
                                        <hr class="hr" />

                                        <div className=' p-2'>
                                            <h2>Team</h2>
                                            <span class="badge bg-light text-dark"> Artist </span>
                                            <span class="badge bg-light text-dark m-1"> 3D modeller </span>
                                            <span class="badge bg-light text-dark"> Designer </span>
                                            <span class="badge bg-light text-dark m-1"> Psychologist </span>
                                            <span class="badge bg-light text-dark"> Programmer </span>
                                        </div>

                                        <hr class="hr" />

                                        <div className='p-2'>
                                            <h2>Target Audience</h2>
                                            <span class="badge bg-light text-dark"> Children</span>
                                        </div>

                                        <hr class="hr" />

                                        <div className='p-2'>
                                            <h2>Technologies used</h2>
                                            <span class="badge bg-light text-dark"> C# </span>
                                            <span class="badge bg-light text-dark m-1"> Unity </span>
                                            <span class="badge bg-light text-dark"> LeapMotion </span>
                                        </div>
                                    </div>

                                    <div className='p-details-source-bg text-center p-2'>
                                        <h2>Source Code</h2>
                                        <a className="nav-link py-2 px-2 social-colour" href={'http://github.com/CallumF15'}>
                                            <FaGithub className="" size={40} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <Gallery> </Gallery>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default taskDetails

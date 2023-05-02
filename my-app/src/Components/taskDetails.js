import cloud from '../Images/cloud-1.png'
import projectimg from '../Images/game-dev-img.jpg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const taskDetails = ({ task, onViewed }) => {
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

            <section className="project-details pb-5 pt-5">
                <article className="project-about">
                    <div className="container project-innerdetails shadow-sm bg-light">
                        <div className='row display-flex'>

                            <div className="d-flex justify-content-center">
                                <h2 className="title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                            </div>

                            <div className='col-6 col-sm-9 project-inner-bg'>
                                <div className='p-2'>
                                    <h2 className=''> Summary </h2>

                                    <div className='px-2'> {/* Indent paragraph */}
                                        <p> {task.desc} </p>

                                        <p> {task.bg} </p>

                                        We hoped to expand the features of the game by adding additonal abilities for the player and the boss. New attacks and defensive abiltiies,
                                        and expanding how the boss moves around to add more variety to fighting him.

                                        <hr class="hr" />

                                        <p> {task.bg} </p>

                                        <ul>
                                            <li> Implemented using the LeapMotion API for hand gesture recognition to enable character movement. </li>
                                            <li> Gained an understanding for developing a project to be intuitive for children through user-testing. </li>
                                            <li> und to add more variety to fighting him. </li>
                                            <li> und to add more variety to fighting him. </li>
                                            <li> und to add more variety to fighting him. </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            

                            <div className='col-6 col-sm-3'>
                                <div className='shadowtest test15'>
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

                                    <div className='test14 text-center p-2'>
                                        <h2>Source Code</h2>
                                        <a className="nav-link waves-effect waves-light social-colour" href={'http://github.com/CallumF15'}>
                                            <FaGithub className="" size={40} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='shadowtest'>
                                <div class="p-2 card-group card-group-scroll">
                                    <div class="card">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
                                    </div>
                                    <div class="card">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
                                    </div>
                                    <div class="card">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />                                    </div>
                                    <div class="card">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default taskDetails

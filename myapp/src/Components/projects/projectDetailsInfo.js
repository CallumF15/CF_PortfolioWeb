import { FaGithub } from 'react-icons/fa'

const ProjectDetailsInfo = ({ task, stringImage}) => {
    const teamWords = task.projectdetails.team.split(','); //separate text into individial words
    const arrtechUsed = task.projectdetails.techUsed.split(','); //separate text into individial words
    const arrTargetAudience = task.projectdetails.targetAudience.split(','); //separate text into individial words
    const projectimg = process.env.PUBLIC_URL + task.image;


    return (
        <>
            {/* Project information e.g Team/software  */}
            <div className='col-12 col-md-4 col-xl-3 pt-5 pt-sm-5 pt-md-0'>
                <div className='p-details-side-bg shadow-sm'>
                    <img src={projectimg} className='img-fluid' srcSet={stringImage} sizes="70vmin" alt="game project" />

                    <div className='p-2'>
                        <h2 className='p-2'> {task.type} </h2>
                        <hr className="hr" />

                        <div className=' p-2'>
                            <h2>Team</h2>
                            {
                                teamWords.map((teamWords, index) => {
                                    if (index % 2 === 1) {
                                        return <span key={index} className="badge bg-light text-dark m-1"> {teamWords} </span>
                                    } else
                                        return <span key={index} className="badge bg-light text-dark"> {teamWords} </span>
                                })
                            }
                        </div>

                        <hr className="hr" />

                        <div className='p-2'>
                            <h2>Target Audience</h2>
                            {
                                arrTargetAudience.map((targetAudience, index) => {
                                    if (index % 2 === 1) {
                                        return <span key={index} className="badge bg-light text-dark m-1"> {targetAudience} </span>
                                    } else
                                        return <span key={index} className="badge bg-light text-dark"> {targetAudience} </span>
                                })
                            }
                        </div>

                        <hr className="hr" />

                        <div className='p-2'>
                            <h2>Technologies used</h2>
                            {
                                arrtechUsed.map((techUsed, index) => {
                                    if (index % 2 === 1) {
                                        return <span key={index} className="badge bg-light text-dark m-1"> {techUsed} </span>
                                    } else
                                        return <span key={index} className="badge bg-light text-dark"> {techUsed} </span>
                                })
                            }
                        </div>
                    </div>

                    <div className='p-details-source-bg text-center p-2'>
                        <h2>Source Code</h2>
                        <a className="nav-link py-2 px-2 social-colour" href={'http://github.com/CallumF15'}>
                            <FaGithub className="social-colour" size={40} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsInfo
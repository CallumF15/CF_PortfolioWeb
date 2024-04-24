import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import projectimg from '../Images/game-dev-img.jpg'

const ProjectDetailsInfo = ({ task }) => {
    React.useEffect(() => {

    }, [])

    const teamWords = task.projectdetails.team.split(','); //separate text into individial words

    ///maps data and separates and displays appropriate html for each piece of data
    const displayData = (targetObject) => { //pass in task?

        //check if text has more than one word? if it does proceed, if it doesn't do not
        if (teamWords.length > 1) {
            //test this
        }

        teamWords.map((teamWords, index) => {
            if (index % 2 === 1) {
                return <span key={index} className="badge bg-light text-dark m-1"> {teamWords} </span>
            } else
                return <span key={index} className="badge bg-light text-dark"> {teamWords} </span>
        })
    }

    return (
        <>
            {/* Project information e.g Team/software  */}
            <div className='col-12 col-md-3'>
                <div className='p-inner-bg'>
                    <div className='shadow-sm p-details-bg'>
                        <img src={projectimg} className='img-fluid' alt="info-here" />
                        <div className='p-2'>
                            <h2 className='p-2'> University Project </h2>
                            <hr className="hr" />

                            <div className=' p-2'>
                                <h2>Team</h2>
                                {/* {
                                                    displayData()
                                                } */}

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
                                <span className="badge bg-light text-dark"> Children</span>
                            </div>

                            <hr className="hr" />

                            <div className='p-2'>
                                <h2>Technologies used</h2>
                                <span className="badge bg-light text-dark"> C# </span>
                                <span className="badge bg-light text-dark m-1"> Unity </span>
                                <span className="badge bg-light text-dark"> LeapMotion </span>
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
            </div>
        </>
    )
}

export default ProjectDetailsInfo
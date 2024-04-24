import React from 'react'
import flyPic from '../Images/flygame.png'

const ProjectDetailsAbout = ({ task }) => {

  return (
    <>
      <div className='col-12 col-md-9'>
        <div className='p-inner-bg'>
          <img src={flyPic} className="card-img-top project-img-height" alt="..." />
          <div className='p-5'>

            <div className='paragraph'>
              <h2 className=''> About this project </h2>
              <div className='px-2'> {/* Indent paragraph */}
                <p> A 2D superhero video game targeted towards children which utilizes the technology LeapMotion for hand gesture recognition
                  to enable character movement.
                  {task.bg}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailsAbout
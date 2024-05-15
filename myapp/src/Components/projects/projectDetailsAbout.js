const ProjectDetailsAbout = ({ task, stringImage }) => {
  const projectimg = process.env.PUBLIC_URL + task.image;

  return (
    <>
      <div className='col-12 col-md-8 col-xl-9'>
        <div className='p-details-text-bg'>
          <img src={projectimg} className="card-img-top project-img-height" srcSet={stringImage} sizes="70vmin" alt="game project" />
          {/* <img src={projectimg} className="card-img-top project-img-height" alt="..." /> */}

          <div className='p-5'>

            <div className='paragraph'>
              <h2 className=''> About this project </h2>
              <div className='px-2'> {/* Indent paragraph */}
                <p>
                  {task.desc}
                </p>

                <h2 className='mt-5'> More Info </h2>
                <p>
                  {task.desc2}
                </p>

                <p>
                  {task.desc3}
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


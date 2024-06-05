
import parse from 'html-react-parser'; //allows html tags in JSON to be rendered propertly and not as text

const ProjectDetailsAbout = ({ task, stringImage, btnSetState, btnState }) => {
  const projectimg = process.env.PUBLIC_URL + task.image;

  const { desc, desc2, instructions } = task.projectabout;

  let parsedInstructions = "";

  if (instructions !== "") {
    parsedInstructions = parse(instructions);
  }

  return (
    <>
      <div className='col-12 col-md-8 col-xl-9'>
        <div className='p-details-text-bg'>
          <picture>
            <source srcSet={stringImage} media="(orientation: landscape)" />
            <img src={projectimg} className="card-img-top project-img-height" sizes="70vmin" alt="game project" />
          </picture>


          {/* <img src={projectimg} className="card-img-top project-img-height" srcSet={stringImage} sizes="70vmin" alt="game project" /> */}

          <div className='p-5'>
            <div className='paragraph'>
              <h2> About this project </h2>
              <hr />
              <div className='px-2'> {/* Indent paragraph */}
                <p>
                  {desc}
                </p>

                <p>
                  {desc2}
                </p>


                {/* <h4 className='mt-5'> More Information </h4>
                <p>
                  {desc2}
                </p> */}

                {
                  (instructions !== "") ?
                    <>
                      <h2 className='mt-5'> Instructions </h2> <hr />
                      {parsedInstructions}

                      <hr />
                    </>
                    :
                    (<h2 className='mt-5'>  </h2>)
                }

              </div>
            </div>
          </div>


          {/* add instructions to play game into below code  */}
          {
            (task.link !== "") ?
              <div className="d-none d-md-block text-center pb-2 px-2">
                <button className='btn btn-sm' style={{ width: '50%' }} onClick={btnSetState}> {(btnState === true) ? 'Close Game' : 'Play Game'} </button>
              </div>
              : ""
          }
        </div>
      </div>
    </>
  )
}

export default ProjectDetailsAbout


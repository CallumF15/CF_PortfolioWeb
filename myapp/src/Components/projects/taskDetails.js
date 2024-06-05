import ProjectDetailsAbout from './projectDetailsAbout'
import ProjectDetailsInfo from './projectDetailsInfo'
import imageHook from '../imageHook'
import { useState } from 'react';
import { scrollToElementByIDAsync } from '../Utility/ScrollUtility';

//import cloud from '../../../src/Images/cloud-1.png'
//import projectimg from '../Images/game-dev-img.jpg'
// import Gallery from '../gallery'

const TaskDetails = ({ task }) => {
    const stringImage = imageHook(process.env.PUBLIC_URL + task.image);
    const [setGame, setShowGame] = useState(false);

    const cloud = "/Images/cloud-1.png"
    // const cloud = process.env.PUBLIC_URL + "Images/cloud-1.png";

    function toggleGame() {
        setShowGame((prevState) => !prevState);
        let b = setGame
        scrollToElementByIDAsync(b, 'unityGame')
    }

    function getRandomPosition() {
        const top = Math.floor(Math.random() * 100);  // Random top position between 0 and 100%
        const left = Math.floor(Math.random() * 100); // Random left position between 0 and 100%
        return { top: `${top}%`, left: `${left}%`, position: 'absolute', width: 200, height: 200 };
    }

    // Image component that uses the random position
    const RandomImage = ({ src, alt }) => {
        const randomStyle = getRandomPosition();
        return <img src={src} alt={alt} style={randomStyle} />;
    };

    function generateClouds() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                <RandomImage src={cloud} alt="Random Image 1" />
            );
        }
        return arr;
    }

    return (
        <>
            {/* <div className="game-post ">
                <div className="background-wrap">
                    <div className="cloud-1">
                        <img src={cloud} alt="cloud" />
                    </div>

                    <div className="cloud-2">
                        <img src={cloud} alt="cloud" />
                    </div>


                    <div className="cloud-1">
                        <img className='cloud-img' alt="cloud" />
                    </div>
                </div>
            </div> */}


            <section className="p-details pb-5 pt-5" id="taskDetails">

                {/* <div className="cloud-test">
                    {generateClouds()}
                </div> */}

                <article className="container project-innerdetails shadow-sm bg-light">
                    <div className='row row-col-1 row-col-md-2 display-flex'>
                        <div className="d-flex justify-content-center">
                            <h2 className="display-4 fw-bold title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                        </div>

                        <ProjectDetailsAbout task={task} stringImage={stringImage} btnSetState={toggleGame} btnState={setGame} />
                        <ProjectDetailsInfo task={task} stringImage={stringImage} />

                        {/* <Gallery> </Gallery> */}

                        {/* Unity Game here */}
                        <div className="col-12 text-center d-none d-md-block mt-5 pl-5 pr-5 p-details-text-bg">
                            {
                                (task.link.length !== 0) ? (setGame === true) ?
                                    <div className="text-center py-3 gameScroll" id="unityGame">
                                        <h2> {task.name} </h2>
                                        <iframe title={task.name} className="" src={task.link} width="100%" height="713" scrolling="no"></iframe>

                                        <button className='btn btn-sm' style={{ width: '50%' }} onClick={setShowGame}> {(setGame === true) ? 'Close Game' : 'Play Game'} </button>
                                    </div>
                                    :
                                    ""
                                    : ""
                            }
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default TaskDetails

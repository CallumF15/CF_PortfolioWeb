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

                <div className='p-layer'></div>

                {/* <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='a' patternUnits='userSpaceOnUse' width='69.283' height='40' patternTransform='scale(2) rotate(0)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)' />
                            <path d='M46.189-20L57.736 0M46.189 20l11.547 20m-46.189 0l11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10L-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094C73.13 6.667 76.98 13.333 80.83 20zM57.736 60H34.64L23.094 40l11.547-20h23.095c3.848 6.667 7.698 13.333 11.547 20L57.736 60zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40 34.64 60zm0-40H11.547L0 0l11.547-20h23.094L46.19 0 34.64 20zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20-11.547 20z' stroke-width='1' stroke='hsla(259, 0%, 58%, 0.58)' fill='none' />
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
                </svg> */}


                {/* <div className="cloud-test">
                    {generateClouds()}
                </div> */}

                <article className="container project-innerdetails">
                    <div className='row row-col-1 row-col-md-2 display-flex'>

                        {/* <div className="d-flex justify-content-center">
                            <h2 className="display-4 fw-bold title-underline text-center pt-5 pb-2 mb-5"> {task.name} </h2>
                            <div className="text-underline"></div>
                        </div> */}

                        <div className="project-title shadow-sm pb-4 mb-5">
                            <h2 className="display-4 fw-bold text-center"> {task.name} </h2>
                            <div className="text-underline"></div>
                        </div>

                        {/* <div className="mb-5">
                            <h2 className="display-4 fw-bold text-center"> {task.name} </h2>
                            <div className="text-underline"></div>
                        </div> */}




                        <ProjectDetailsAbout task={task} stringImage={stringImage} btnSetState={toggleGame} btnState={setGame} />
                        <ProjectDetailsInfo task={task} stringImage={stringImage} />

                        {/* <Gallery> </Gallery> */}

                        {/* Unity Game here */}
                        <div className="col-12 text-center d-none d-md-block mt-5 pl-5 pr-5 p-details-text-bg">
                            {
                                (task.gamelink.length !== 0) ? (setGame === true) ?
                                    <div className="text-center py-3 gameScroll" id="unityGame">
                                        <h2> {task.name} </h2>
                                        <iframe title={task.name} className="" src={task.gamelink} width="100%" height="713" scrolling="no"></iframe>

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

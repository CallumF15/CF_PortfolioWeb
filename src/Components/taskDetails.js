import cloud from '../Images/cloud-1.png'

const taskDetails = ({ task, onViewed }) => {
    return (
        <>
            <div className="game-post ">

  
                    <div className="avatar">
                        <a href="">
                            <img src={cloud} alt="cloud" />
                            {/* <img src={cloud} alt="cloud" />
                            <img src={cloud} alt="cloud" /> */}
                        </a>
                    </div>
               

                    <article className="container p-5">
                        <h2 className="game-post-title">{task.name}</h2>

                        <h3>What's it about?</h3>
                        <p>The game's scope was targeted towards children whilst simulating an augmented reality setup within a car setting.</p>

                        <h3>Objective</h3>
                        <p>Your goal is to collect as many coins as you can and defeat the evil boss terrorising the planet!</p>

                        <h3>How to Play</h3>
                        <p> Use your mouse to adjust the direction the hero flies in. Press spacebar or left mouse click to shoot. Flying backwards for too long
                            will give you a warning, you can't let the villain win! Look out for coins in the sky! They'll add to your score. Power-ups can also be found,
                            make sure to pick the up to assist you in your fight to defeat the evil villain!  </p>
                        {/* Put pictures of super powers in here and what they do */}

                        <h4> Powerups </h4>
                        <ul>
                            <li> Health - restores some health.</li>
                            <li> Shield - temporarily makes you immune to all imcoming damage. </li>
                            <li> Purple Crystal - Changes your attack </li>
                            <li> Green Crystal - Changes your attack  </li>
                        </ul>

                        <p> Play now! </p>

                        <div className="">
                            {/* Unity Game goes here */}
                            {/* <iframe className="iframe-style" id="" src={task.link} width="951" height="713" frameborder="0" marginheight="0" scrolling="no"></iframe> */}
                        </div>
                    </article>
                </div>
            </>
            )
}

            export default taskDetails

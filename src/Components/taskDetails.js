import cloud from '../Images/cloud-1.png'


const taskDetails = ({ task, onViewed }) => {

    return (
        <>
            <div className="game-post ">
                <div class="background-wrap">
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
            </div>

            <div className="t">
                <article className="container p-5">
                    <h2 className="game-post-title">{task.name}</h2>
                    <div className="row">
                        <div class="accordion" id="accordionFlushExample">

                            <div className="col-6 col-xs-12">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h3> What's it about? </h3>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>The game's scope was targeted towards children whilst simulating an augmented reality setup within a car setting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-xs-12">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <h3> Objective </h3>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>Your goal is to collect as many coins as you can and defeat the evil boss terrorising the planet!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-6 col-xs-12">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <h3>How to Play</h3>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p> Use your mouse to adjust the direction the hero flies in.Press spacebar or left mouse click to shoot.Flying backwards for too long
                                                will give you a warning, you can't let the villain win! Look out for coins in the sky! They'll add to your score.Power-ups can also be found,
                                                make sure to pick the up to assist you in your fight to defeat the evil villain!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-xs-12">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <h4> Powerups </h4>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li> Health - restores some health.</li>
                                                <li> Shield - temporarily makes you immune to all imcoming damage.</li>
                                                <li> Purple Crystal - Changes your attack </li>
                                                <li> Green Crystal - Changes your attack  </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Put pictures of super powers in here and what they do */}


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

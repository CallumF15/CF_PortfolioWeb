import React, { useState } from 'react'

const Landingpage = ({ fullname }) => {
    const person = {
        firstName: fullname,
        secondName: "Flannagan",
        message: "Hi I'm"
    }

    const [personDetails, setPersonDetails] = useState(person); //user name to be displayed
    const [message, setMessage] = useState([{}]);
    //const [bird, setBird] = useState([{}]);

    const AvatarPic = process.env.PUBLIC_URL + "/Images/avatar.png";

    let forename;
    let surname;

    // React.useEffect(() => {
    //     fetchBird("bird");

    //     fetch("/message")
    //         .then((res) => res.json())
    //         .then(message => setMessage(message))
    //         .catch(error => console.log(error))
    // }, []);

    (function splitNameHandler() {
        const myArray = fullname.split(" ");
        forename = myArray[0];
        surname = myArray[1];
    })()

    // function fetchBird(url) {
    //     // if(typeof url !== String){
    //     //     console.log("not string")
    //     // }else{
    //     fetch("/" + url)
    //         .then((res) => res.json())
    //         .then(bird => setBird(bird))
    //         .catch(error => console.log(error))
    //     // }
    // }

    return (
        <>
            <section className="py-5 text-left about-background">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 d-flex justify-content-center align-items-center">
                        <div className="col pt-5 pt-sm-0 py-sm-3 order-0 mx-auto text-center text-sm-start hidden">

                            <h1 className="fw-light ">
                                <span> {personDetails.message} </span> <br />
                                {/* <span className=''> <b> {personDetails.firstName} </b> {personDetails.secondName} </span> */}
                                <span className=''> <b> {forename} </b> {surname} </span>
                                {/* delete this at somepoint -> text server message {message.message}  */}
                                {/* {bird.bird} */}
                            </h1>
                            <p className="lead">
                                A graduate software developer with a passion for computer games and web development.
                            </p>

                            <a href="mailto: CallumFlannagan@hotmail.com?subject=Portfolio%Feedback" className="btn btn-secondary btn-lg my-2">Contact me</a>
                        </div>

                        <div className="col order-1 py-sm-2 d-flex justify-content-center align-items-center hidden">
                            {/* <img src={mePic} className="img-fluid" alt="me" /> */}

                            <img src={AvatarPic} className="img-fluid" alt="me" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landingpage

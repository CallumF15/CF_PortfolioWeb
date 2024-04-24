import React, { useState } from 'react'
import mePic from '../Images/me.jpg'


const Landingpage = ({ fullname }) => {
    const person = {
        firstName: fullname,
        secondName: "Flannagan",
        message: "Hi I'm"
    }

    const [personDetails, setPersonDetails] = useState(person); //user name to be displayed
    const [message, setMessage] = useState([{}]);
    const [bird, setBird] = useState([{}]);

    let forename;
    let surname;

    React.useEffect(() => {
        fetchBird("bird");

        fetch("/message")
            .then((res) => res.json())
            .then(message => setMessage(message))
            .catch(error => console.log(error))
    }, []);

    (function splitNameHandler() {
        const myArray = fullname.split(" ");
        forename = myArray[0];
        surname = myArray[1];
    })()

    function fetchBird(url){
        // if(typeof url !== String){
        //     console.log("not string")
        // }else{
            fetch("/" + url)
            .then((res) => res.json())
            .then(bird => setBird(bird))
            .catch(error => console.log(error))
       // }
    }


    // function handlePerson() {
    //     setTimeout(() => {
    //         alert(`You're name is ${personDetails.firstName + personDetails.secondName}`);
    //     }, 5000);
    // }

    // function handlePerson2() {
    //     setTimeout(() => {
    //         alert(`You're name is ${setPersonDetails({ ...personDetails, firstName: 'new Value' })}`)
    //     }, 5000);
    // }

    return (
        <>
            {/* <p className="lead about-text-colour"> Hi, I'm Callum a graduate developer from Glasgow, Scotland</p>
                            <p className="lead about-text-colour"> A graduate developer, dabbling in games and web development</p> */}

                <section className="py-5 text-left about-background">
                    <div className="container">
                        <div className="row">
                            <div className="col mx-auto">

                                <h1 className="fw-light">
                                    <span> {personDetails.message} </span> <br />
                                    {/* <span className=''> <b> {personDetails.firstName} </b> {personDetails.secondName} </span> */}
                                    <span className=''> <b> {forename} </b> {surname} </span>
                                    {/* delete this at somepoint -> text server message {message.message}  */}
                                    {bird.bird}
                                </h1>
                                <p className="lead">
                                    A graduate software developer with a passion for computer games and web development.
                                </p>

                                <a href="mailto: CallumFlannagan@hotmail.com?subject=Portfolio%Feedback" className="btn btn-secondary btn-lg my-2">Contact me1</a>
                            </div>

                            <div className="col-4">
                                <img src={mePic} className="img-fluid" alt="me" />
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Landingpage

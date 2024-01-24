import React, { useState } from 'react'
import mePic from '../Images/me.jpg'


const About = ({fullname}) => {
    const person = {
        firstName: fullname,
        secondName: "Flannagan",
        message: "Hi I'm"
    }

    const [personDetails, setPersonDetails] = useState(person); //user name to be displayed
    const [message, setMessage] = useState([{}]);
    
    let forename;
    let surname;

    React.useEffect(() => {
        fetch("/message")
            .then((res) => res.json())
            .then(message => setMessage(message))
            .catch(error => console.log(error))
    }, []);
     
    (function splitNameHandler(){
        const myArray = fullname.split(" ");
        forename= myArray[0];
        surname= myArray[1];
    })()


    function handlePerson() {
        setTimeout(() => {
            alert(`You're name is ${personDetails.firstName + personDetails.secondName}`);
        }, 5000);
    }

    function handlePerson2() {
        setTimeout(() => {
            alert(`You're name is ${setPersonDetails({ ...personDetails, firstName: 'new Value' })}`)
        }, 5000);
    }

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
                                {/* <span className=''> <bold> {personDetails.firstName} </bold> {personDetails.secondName} </span> */}
                                <span className=''> <bold> {forename} </bold> {surname} </span>
                                {message.message}
                            </h1>
                            <p className="lead">
                                A graduate developer, dabbling in games and web development.
                            </p>

                            <a href="mailto: CallumFlannagan@hotmail.com?subject=Portfolio%Feedback" className="btn btn-secondary btn-lg my-2">Contact me1</a>
                        </div>

                        <div className="col-4">
                            <img src={mePic} className="about-profile-img img-fluid" alt="me" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

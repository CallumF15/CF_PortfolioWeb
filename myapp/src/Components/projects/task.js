import React, { useState } from 'react'
import imageHook from '../imageHook';

const Task = ({ task, onViewed, className }) => {     /* Curly brackets - destructing */
    const [showDescription, setShowDescription] = useState(false);
    const stringImage = imageHook(process.env.PUBLIC_URL + task.image);

    let description = task.desc;
    let maxDescSize = 150; //maximum no of characters in each task to display before collapsing

    if (!showDescription) {
        if (description.length < maxDescSize)
            description = description.substring(0, maxDescSize); //limit JSON paragraph length to specified chars
        else
            description = description.substring(0, maxDescSize) + "..."; //limit JSON paragraph length to specified chars
    }

    const image = process.env.PUBLIC_URL + task.image;

    function onClickScrollView() {
        onViewed(task.id);
        getElementByIdAsync('taskDetails');
    }

    ///This is used to await the TaskDetails component to be rendered. It's only rendered when the user clicks, thus requiring an async function to await the render
    //added scroll-margin-top: 5rem; to css
    const getElementByIdAsync = id => new Promise(resolve => {
        const getElement = () => {
            const element = document.getElementById(id);
            if (element && task.reminder !== true) { //don't scroll to project if it's being closed
                resolve(element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }));
            } 
            else
                requestAnimationFrame(getElement);
        };
        getElement();
    });

    return (
        <>
            <div className={`col col-sm-6 ${className}`}>
                <div className={`card h-100 shadow-sm ${task.reminder ? 'projectViewed' : ''} `} onClick={onClickScrollView}>
                    {/* <img src={image} className="card-img-top" alt="game project" /> */}
                    <img src={image} srcSet={stringImage} sizes="(max-width: 360px) 360px, (max-width: 1200px) 1200px" alt="game project" className="card-img-top" />

                    <div className="card-body">
                        <h5 className="card-title">{task.name}</h5>
                        <p className="card-text">{description}</p>
                    </div>

                    <div className="card-footer text-center">
                        <button type="button" className="btn btn-lg">Learn more!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task

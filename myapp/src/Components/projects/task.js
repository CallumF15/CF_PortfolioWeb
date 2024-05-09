import React, { useState } from 'react'
import imageHook from '../imageHook';


const Task = ({ task, onViewed }) => {     /* Curly brackets - destructing */
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

    return (
        <>
            <div className="col col-sm-6">
                <div className={`card h-100 shadow-sm ${task.reminder ? 'projectViewed' : ''} `} onClick={() => onViewed(task.id)}>
                    {/* <img src={image} className="card-img-top" alt="game project" /> */}
                    <img src={image} srcSet={stringImage}  sizes="(max-width: 360px) 360px, (max-width: 1200px) 1200px" alt="game project" className="card-img-top" />

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

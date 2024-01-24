import flyPic from '../Images/flygame.png'

const Task = ({ task, onViewed }) => {     /* Curly brackets - destructing */

    return (
        <>
            <div className="col col-sm-6">
                <div className={`card h-100 shadow-sm ${task.reminder ? 'projectViewed' : ''} `} onClick={() => onViewed(task.id)}>
                    <img src={flyPic} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{task.name}</h5>
                        <p className="card-text">{task.desc}</p>
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

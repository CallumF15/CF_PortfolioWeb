

const Task = ({ task, onViewed}) => {     /* Curly brackets - destructing */ 
    
    return (
        <>
                        <div className="col">
                            <div className={`card shadow-sm pbox ${task.reminder ? 'projectViewed' : ''} mt-5 mb-5`} onClick={() => onViewed(task.id)}>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div className="card-body">
                                    <h2 className="card-text"> {task.name}</h2>
                                    <p className="card-text"> {task.desc}</p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            {/* // <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default Task

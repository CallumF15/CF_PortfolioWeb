import Project from "./Project"


const Task = ({ task, onViewed}) => {

    // const showProjectDetails = () => {
    //     alert('hello')

    //     //Code: Retrieve html for project/unity openGL?
    //     //var a = document.getElementById('');
    // }

    return (
        <div className="col-4 col-xs-12 px-5 my-auto" >
           <div className={`projectbox ${task.reminder ? 'projectViewed' : ''}`} onDoubleClick={() => onViewed(task.id)}>
              <h2>{task.name}</h2> 
            </div>
        </div>
    )
}

export default Task

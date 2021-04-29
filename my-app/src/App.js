import Header from './Components/header'
import Projects from './Components/Projects'
import Tasks from './Components/tasks'
import Footer from './Components/footer'
import { useState } from 'react'
import AddProject from './Components/AddProject'
import './index.scss'


 const App = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Adapative PCG Project',
            desc: "blah"
        },
        {
            id: 2,
            name: 'Forever Project',
            desc: "blah"
        },
    ])

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Project 1111111111',
            desc: "something"
        },
        {
            id: 2,
            name: 'Project 22222222',
            desc: "something"
        },
        {
            id: 3,
            name: 'Project 33333333',
            desc: "something"
        },
    ])

    /* Deletes a project from the DOM */
    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id))
    }

    /* Toggle Reminder */
    const toggleReminder = (id) => { 
        setProjects(projects.map((project) => 
        project.id === id ? {  ...project, reminder: !project.reminder } : project ))
    }

    /* Toggle Viewed Task */
        const toggleTaskViewed = (id) => { 
            setTasks(tasks.map((task) => 
            task.id === id ? {  ...task, reminder: !task.reminder } : task ))
    }
    

    /* Add Project */ 
    const addProject = (project) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newProject = { id, ...project} 
        setProjects([...projects, newProject])
    }

     return (
        <>
             <Header title='hello' />
             <Tasks tasks={tasks} onViewed={toggleTaskViewed}/>

             <div className='container1'>

                 <AddProject onAdd={addProject} />
                 {projects.length > 0 ? <Projects projects={projects} onDelete={deleteProject} onToggle={toggleReminder} />
                     : 'No Projects'}
                     
             </div>

             <Footer fullname='Callum Flannagan' />

         </>
     )
 }

 export default App
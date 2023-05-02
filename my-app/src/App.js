import Header from './Components/header'
import About from './Components/about'
import Tasks from './Components/tasks'
import Footer from './Components/footer'
import React, { useState } from 'react'
import './Styles/index.scss'
import { FaWindows } from 'react-icons/fa'
import 'bootstrap/dist/js/bootstrap.bundle';

const App = () => {

    const [tasks, setTasks] = useState([{}]);

    React.useEffect(() => {
        fetch("/tasks")
            .then((res) => res.json())
            .then(tasks => setTasks(tasks))
            .catch(error => console.log(error))
    }, []);

    /* Toggle Viewed Task */
    const toggleTaskViewed5 = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } : { ...task, reminder: false }))
    }
    /* Toggle Viewed Task */
    const toggleTaskViewed = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                console.log(task.id); //undefined?
            } else {
                //task.reminder = false;
            }
        }))
    }

    /* Toggle Viewed Task */
    const toggleTaskViewed4 = (id) => {

        setTasks(tasks.map((task) =>
            task.reminder === true ? window.confirm("Are you sure?") === true ? { ...task, reminder: false } : 
            task.id === id ? { ...task, reminder: false } : { ...task, reminder: true } :
                task.id === id ? { ...task, reminder: !task.reminder } : { ...task, reminder: false }))
    }//confirm keeps firing without condition being met?

    return (
        <> {/* '<>' same as '<React.Fragment>' */}
            <Header title='Header Name'/>
            <About />
            <Tasks tasks={tasks} onViewed={toggleTaskViewed4} />
            {/* <p>{!data ? "Loading..." : data}</p> */}
            <Footer fullname='Callum Flannagan' />
        </>
    )
}

export default App

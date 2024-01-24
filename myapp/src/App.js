import Header from './Components/header'
import About from './Components/About'
import Tasks from './Components/tasks'
import Footer from './Components/footer'
import React, { useState } from 'react'

import './Styles/index.scss'
//import { FaWindows } from 'react-icons/fa'
import 'bootstrap/dist/js/bootstrap.bundle';
import { Element } from 'react-scroll'
//import Scroll from 'react-scroll'
//const ScrollLink = Scroll.ScrollLink

const App = () => {

  const [tasks, setTasks] = useState([{}]);
  const fullname = "Callum Flannagan";

  React.useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    fetch("/tasks")
      .then((res) => res.json())
      .then(tasks => setTasks(tasks))
      .catch(error => console.log(error))
  }



  /* Toggle Viewed Task */
  const toggleTaskViewed = (id) => {
    setTasks(
      tasks.map((task) => {
        // Determine the updated reminder state based on task properties and ID:
        let reminderState = task.reminder;

        if (task.onclick) {
          reminderState = false; // Disable reminder if clicked
        } else if (task.id === id) {
          reminderState = !reminderState; // Toggle reminder if ID matches
        } else if (task.id !== id)
          reminderState = false;  //disable reminder if another ID is opened

        // Return a new task object with the updated reminder state:
        return { ...task, reminder: reminderState };
      })
    )
  };

  return (
    <React.Fragment> {/* '<>' same as '<React.Fragment> but is not supported by all tools. It's recommended to use React.Fragment' */}
      <Header fullname={fullname} />

      <Element id='home' name='home'>
        <About fullname={fullname} />
      </Element>

      <Element id='projects' name='projects'>
        <Tasks tasks={tasks} onViewed={toggleTaskViewed} />
      </Element>


      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Footer fullname={fullname} />
    </React.Fragment>
  )
}

export default App

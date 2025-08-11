import Header from './Components/header'
import LandingPage from './Components/landingpage'
import Tasks from './Components/projects/tasks'
import Footer from './Components/footer'
import React, { useState } from 'react'
import './Styles/index.scss'
import CookieDialog from './Components/cookieDialog'
import About from './Components/about'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);  // Track loading state

  const fullname = "Callum Flannagan";

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  React.useEffect(() => {
    fetchTasks().then((tasks) => {
      //console.log("fetch tasks: ", tasks); //returns task object
      if (tasks && tasks.tasks) {
        setTasks(tasks.tasks); //returns tasks as array
      }

      //console.log("get valL: ", tasks.tasks);
    })
      .catch((error) => {
        console.error('Error setting state:', error);
      }).finally(() => {
        setLoading(false); // Set loading to false after fetching tasks
      });
  }, []);

  async function fetchTasks(retries = 3) {
    try {
      //const response = await fetch('/tasks');
      const response = await fetch('https://callumflannagan-server.vercel.app/tasks');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching data:', error);
      if (retries > 0) {
        console.log(`Retrying... ${retries} attempts left`);
        return fetchTasks(retries - 1);  // Retry fetching
      }
      return null;
    }
  }

  /* Toggle Viewed Task */
  const toggleTaskViewed = (id) => {
    setTasks(tasks.map((task) => {
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

  // showButton = document.querySelector("dialog + button");
  //const closeButton = document.querySelector("dialog button");

  return (
    <React.Fragment> {/* '<>' same as '<React.Fragment> but is not supported by all tools. It's recommended to use React.Fragment' */}
      <Header fullname={fullname} />
      {/* <button onclick={handleClickOpen}> Open Dialog </button> */}

      {/* <button onClick={() => setModal(true)}>
        Open modal
      </button> */}

      <CookieDialog openModal={modal} closeModal={() => setModal(false)}>
        Modal content. grg rgg
      </CookieDialog>

      <LandingPage fullname={fullname} />
      <About />

      {/* {console.log("HIT element: ", tasks)} */}
      <Tasks tasks={tasks} onViewed={toggleTaskViewed} loading={loading} />



      <Footer fullname={fullname} />
    </React.Fragment>
  )
}

export default App

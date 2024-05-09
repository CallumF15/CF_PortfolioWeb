import Header from './Components/header'
import LandingPage from './Components/landingpage'
import Tasks from './Components/projects/tasks'
import Footer from './Components/footer'
import React, { useState } from 'react'
import './Styles/index.scss'
import 'bootstrap/dist/js/bootstrap.bundle';
import CookieDialog from './Components/cookieDialog'
import About from './Components/about'


//import { FaWindows } from 'react-icons/fa'
// import { get } from 'react-scroll/modules/mixins/scroller'


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  const fullname = "Callum Flannagan";

  React.useEffect(() => {
    fetchTasks().then((tasks) => {
      console.log("fetch tasks: ", tasks); //returns task object
      setTasks(tasks.tasks); //returns tasks as array

      console.log("get valL: ", tasks.tasks);

      calculateNestedJSONLength();
    })
      .catch((error) => {
        console.error('Error setting state:', error);
      });
  }, []);


  async function fetchTasks() {
    try {
      const response = await fetch('/tasks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  function calculateNestedJSONLength() {
    tasks.map(
      (item) => {
        console.log("test length: " + Object.keys(item.projectdetails).length); //gets the total number of the keys in projectdetails 
        return console.log("test details: " + item.projectdetails.team);
      })
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
      <Tasks tasks={tasks} onViewed={toggleTaskViewed} />
      <Footer fullname={fullname} />
    </React.Fragment>
  )
}

export default App

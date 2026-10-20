import Home from "./Components/Home";
import React, { useState, useEffect } from 'react'
import './Styles/other.scss'

import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/projects/ProjectDetails";
import LoadingSpinner from "./Components/Utility/LoadingSpinner";



const App = () => {
  const [tasks, setTasks] = useState([]);

  const fullname = "Callum Flannagan";

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  // React.useEffect(() => {
  //   fetchTasks().then((tasks) => {
  //     //console.log("fetch tasks: ", tasks); //returns task object
  //     if (tasks && tasks.tasks) {
  //       setTasks(tasks.tasks); //returns tasks as array
  //     }

  //     //console.log("get valL: ", tasks.tasks);
  //   })
  //     .catch((error) => {
  //       console.error('Error setting state:', error);
  //     }).finally(() => {
  //       setLoading(false); // Set loading to false after fetching tasks
  //     });
  // }, []);

  // async function fetchTasks(retries = 3) {
  //   try {
  //      //const response = await fetch('https://callumflannagan-server.vercel.app/api/projects');  //new dir is /api/projects
  //      if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     //const data = await response.json();
  //     return data;

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     if (retries > 0) {
  //       console.log(`Retrying... ${retries} attempts left`);
  //       return fetchTasks(retries - 1);  // Retry fetching
  //     }
  //     return null;
  //   }
  // }

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects")
        //const response = await fetch('https://callumflannagan-server.vercel.app/api/projects');
        

        if (!response.ok) {
          throw new Error("Failed to load projects.");
        }

         console.log("Response status:", response.status);


        const data = await response.json();
          console.log("Projects received:", data);
        setProjects(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

 
  return (
    <React.Fragment> {/* '<>' same as '<React.Fragment> but is not supported by all tools. It's recommended to use React.Fragment' */}
      <Routes>
        <Route path="/" element={<Home fullname={fullname} projects={projects} />} />
        <Route path="/projects/:slug" element={<ProjectDetails fullname={fullname} projects={projects} />} />
      </Routes>
    </React.Fragment>
  )
}

export default App

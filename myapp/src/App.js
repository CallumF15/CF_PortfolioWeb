import Home from "./Components/Home";
import React, { useState, useEffect } from 'react'
import './Styles/other.scss'

import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/projects/ProjectDetails";
import LoadingSpinner from "./Components/Utility/LoadingSpinner";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const fullname = "Callum Flannagan";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        //const response = await fetch("http://localhost:5000/api/projects") //local testing
        const response = await fetch('https://callumflannagan-server.vercel.app/api/projects');
        

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

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  // if (error) {
  //   return <p role="alert">{error}</p>;
  // }


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

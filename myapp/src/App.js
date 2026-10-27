import Home from "./Components/Home";
import React, { useState, useEffect } from 'react'
import './Styles/other.scss'
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/projects/ProjectDetails";
import ScrollToTop from './Components/Utility/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fullname = "Callum Flannagan";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
       
        const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://callumflannagan-server.vercel.app";
        const response = await fetch(`${API_URL}/api/projects`)

        if (!response.ok) {
          throw new Error("Failed to load projects.");
        }

        console.log("Response status:", response.status);

        // TEMP: Simulates a 3-second loading period (to test loading spinner)
        // await new Promise(resolve => setTimeout(resolve, 3000));

        const data = await response.json();
        console.log("Projects received:", data);
        setProjects(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);c
      }
    };

    fetchProjects();
  }, []);

  return (
    <React.Fragment> {/* '<>' same as '<React.Fragment> but is not supported by all tools. It's recommended to use React.Fragment' */}

      <Analytics/>
      <ScrollToTop /> {/* React Router changes pages without reloading the browser, so the previous scroll position can persist. ScrollToTop resets the page to the top whenever the route changes. */}
      {/* <Hero /> */}

      <Routes>
        <Route path="/" element={<Home fullname={fullname} projects={projects} dataloading={loading} error={error} />} />
        <Route path="/projects/:slug" element={<ProjectDetails fullname={fullname} projects={projects} />} />
      </Routes>
    </React.Fragment>
  )
}

export default App

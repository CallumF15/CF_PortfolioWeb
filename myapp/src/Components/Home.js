import LandingPage from "./landingpage";
import About from "./About";
import Project from "./projects/Project";
import Footer from "./Footer";
import Navbar from './projects/NavBar';

function Home({ fullname, projects = [] }) {

   console.log("Home projectData:", projects);

  return (
    <>

      <Navbar fullname={fullname}></Navbar>

      {/* <h1>Testing the spinner</h1>
            <LoadingSpinner /> */}
            
      <section id="home">
        <LandingPage fullname={fullname} />
      </section>

      <About />
      <Project projects={projects} />
      <Footer fullname={fullname} />
    </>
  );
}

export default Home;
import LandingPage from "./landingpage";
import About from "./About.js";
import Project from "./projects/Project";
import Footer from "./Footer";
import Navbar from './projects/NavBar';
import PortfolioNotice from "./projects/PortfolioNotice.js";

function Home({ fullname, projects = [], dataloading, error }) {

   console.log("Home projectData:", projects);

  return (
    <>
      <Navbar fullname={fullname}></Navbar>
      <PortfolioNotice/>

      <section id="home">
        <LandingPage fullname={fullname} />
      </section>

      <About />
      <Project projects={projects} dataloading={dataloading} error={error} />
      <Footer fullname={fullname} />
    </>
  );
}

export default Home;
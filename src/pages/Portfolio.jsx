import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import ProjectPage from "../components/Projects/ProjectPage";
import Skills from "../components/Skill";

const Portfolio = () => {
  return (
    <main>
        <Navbar/>
        <Home/>
        <Skills/> 
        <ProjectPage/>
        <Contact/>
        <Footer/>
    </main>
  );
}
export default Portfolio;
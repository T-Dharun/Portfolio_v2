import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import ProjectPage from "../components/Projects/ProjectPage";
import Skills from "../components/Skill";
import "../App.css";
import Achievements from "../components/Achievements";
const Portfolio = () => {
  
  return (
    <main className="main-container">
        <Navbar/>
        <Home/>
        <Skills/> 
        <ProjectPage/>
        <Achievements/>
        <Contact/>
        <Footer/>
    </main>
  );
}
export default Portfolio;
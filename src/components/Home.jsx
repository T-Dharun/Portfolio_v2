import "../styles/Home.css";
import home from "../assets/home.png";
import resume from "../assets/resume.pdf";
const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home-container flex-column d-flex justify-content-center align-items-center">
        <img src={home} alt="" className="home-profile" data-aos="zoom-in"/>
        <h2 className="fw-bolder text-center my-3" data-aos="fade">Hello, This is <span className="dharun-name">Dharun</span> Tamilarasan</h2>
        <div className="fw text-center my-3">Aspiring software engineer focused on creating impactful solutions and making a positive difference in technology</div>
        <div className="home-buttons d-flex justify-content-center w-100 my-3">
          <a className="home-button-1-active text-center" href={resume} target="blank">Resume</a>
          <a className="home-button-2 d-flex align-items-center justify-content-center" href="#contact">
            Contact me
          </a>
        </div>
      </section>
    </div>
  );
}
export default Home;

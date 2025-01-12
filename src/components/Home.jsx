import "../styles/Home.css";
import home from "../assets/home.png";
const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home-container flex-column d-flex justify-content-center align-items-center">
        <img src={home} alt="" className="home-profile" />
        <h2 className="fw-bold text-center my-3">Hello, This is <span className="dharun-name">Dharun</span> Tamilarasan</h2>
        <div className="fw text-center my-3">Aspiring software engineer dedicated to impactful innovation and inspiring positive change within tech</div>
        <div className="home-buttons d-flex justify-content-center w-100 my-3">
          <a className="home-button-1-active text-center">Resume</a>
          <a className="home-button-2 d-flex align-items-center justify-content-center" href="#contact">
            Contact me
          </a>
        </div>
      </section>
    </div>
  );
}
export default Home;


import "../../styles/Project.css";
import p1 from "../../assets/website/energy-meter.png";
import p2 from "../../assets/website/dblearn.png";
import p3 from "../../assets/website/ayush.png";
const imageitems={
    "p1":p1,
    "p2":p2,
    "p3":p3,
}
const ProjectCard=({project})=>{
    const {id,title,description,tech,url,background,live,github}=project;
    return(
        <>
            <section className="project-card py-5" data-aos="fade">
                <section className="project-item">
                <div className="project-image" style={{ background:background }}>
                        <img src={imageitems[url]} alt="" className="project-image-inside bg-dark"/>
                </div>
                </section>
                <section className="project-info">
                    <h3 className="project-info-head fw-bold py-3">{title}</h3>
                    <div className="project-info-desc">{description}</div>
                     <section className="project-tech  flex-wrap d-flex align-items-center my-4 mt-0">
                        {
                            tech.map((item,ind)=>{
                                return(
                                    <div key={ind}>{item}</div>
                                )
                            })
                        }
                    </section>
                    <section className="d-flex project-link-button gap-2">
                        <a href={github} target="_blank" className="d-flex justify-content-center align-items-center">
                            
                            <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" width={"20px"} height={"20px"} className="mx-2"/>
                            <div>Github </div>
                        </a>
                        <a href={live} target="_blank"><div>Live Link</div></a>
                    </section>
                </section>
            </section>
        </>
    )
}
export default ProjectCard;
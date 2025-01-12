
import "../../styles/Project.css";
import p1 from "../../assets/website/energy-meter.png";
const imageitems={
    "p1":p1
}
const ProjectCard=({project})=>{
    const {id,title,description,tech,url,background}=project;
    console.log(url)
    return(
        <>
            <section className="project-card py-5">
                <section className="project-item">
                <div className="project-image" style={{ background:background }}>
                        <img src={imageitems[url]} alt="" className="project-image-inside bg-dark"/>
                </div>
                </section>
                <section className="project-info">
                    <h3 className="project-info-head fw-bold">{title}</h3>
                    <div className="project-info-desc">{description}</div>
                     <section className="project-tech  flex-wrap d-flex align-items-center my-4 mt-0">
                        {
                            tech.map(item=>{
                                return(
                                    <div>{item}</div>
                                )
                            })
                        }
                    </section>
                    <section className="d-flex project-link-button gap-2">
                        <div>Github</div>
                        <div>Live Link</div>
                    </section>
                </section>
            </section>
        </>
    )
}
export default ProjectCard;
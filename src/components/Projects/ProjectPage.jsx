import ProjectCard from "./ProjectCard";
import { projectItem } from "../data";
import "../../styles/Project.css"
import { useState } from "react";
const ProjectPage=()=>{
    const[view,setViewProject]=useState(false);
    let length=projectItem.length;
    return(
        <section className="project pb-5">
            <section className="text-center py-5">
                <h1 className="skill-header fw-bold">Project</h1>
                <p className="skill-para">Let's see my works </p>
            </section>
            <section >
                {
                    projectItem.map(item=>{
                        if(item.id>2) return;
                        return(
                            <ProjectCard project={item}/>
                        )
                    })
                }
            </section>
            
            {
                view &&
                <section>
                    {projectItem.map(item=>{
                        if(item.id<=2) return;
                        return(
                            <ProjectCard project={item}/>
                        )
                    })}
                </section>
            }
            <section className="d-flex justify-content-center ">
            {
                length>3 && <button className="project-view-button" onClick={()=>setViewProject(prev=>!prev)}>{!view?"View more":"View Less"}</button> 
            }
            </section>
        </section>
    )
}
export default ProjectPage;
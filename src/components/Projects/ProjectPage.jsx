import ProjectCard from "./ProjectCard";
import { projectItem } from "../data";
import "../../styles/Project.css"
import { useState } from "react";
const ProjectPage=()=>{
    const[view,setViewProject]=useState(false);
    let length=projectItem.length;
    return(
        <section className="project pb-3" id="project">
            <section className="text-center py-0 pt-3">
                <h1 className="skill-header fw-bold">Project</h1>
                <p className="skill-para">Let's take a look at my work </p>
            </section>
            <section >
                {
                    projectItem.map(item=>{
                        if(item.id>2) return;
                        return(
                            <ProjectCard project={item} key={item.id}/>
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
                            <ProjectCard project={item} key={item.id}/>
                        )
                    })}
                </section>
            }
            <section className="d-flex justify-content-center ">
            {
                length>2 && <button className="project-view-button" onClick={()=>setViewProject(prev=>!prev)}>{!view?"View more":"View Less"}</button> 
            }
            </section>
        </section>
    )
}
export default ProjectPage;
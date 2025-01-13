import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { skillItems } from "./data";
import "../styles/Skill.css";
const Skills = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center skill" id='skill'>
                <div className="text-center">
                    <h1 className="fw-bold  skill-header" data-aos="zoom-out">Skills</h1>
                    <p className="skill-para">This is something I do really well.</p>
                </div>
                <section className="d-flex skill-container">
                    {
                        skillItems.map((item,ind) => {
                            return (
                                <OverlayTrigger
                                    delay={{ hide: 40, show: 300 }}
                                    overlay={(props) => (
                                        <Tooltip {...props} className='skill-tooltip'>
                                            {item.title}
                                        </Tooltip>
                                    )}
                                    placement="top"
                                    key={ind}
                                ><div className="p-3" key={ind} data-aos="fade">
                                        <img src={item.url} className="skill-image-item" />
                                    </div>
                                </OverlayTrigger>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}
export default Skills;
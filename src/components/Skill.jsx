import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { skillItems } from "./data";
import "../styles/Skill.css";
const Skills = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center skill py-5">
                <div className="text-center">
                    <h1 className="fw-bold  skill-header">Skills</h1>
                    <p className="skill-para">I can say , I'm quiet good at </p>
                </div>
                <section className="d-flex skill-container">
                    {
                        skillItems.map(item => {
                            return (
                                <OverlayTrigger
                                    delay={{ hide: 40, show: 300 }}
                                    overlay={(props) => (
                                        <Tooltip {...props} className='skill-tooltip'>
                                            {item.title}
                                        </Tooltip>
                                    )}
                                    placement="top"
                                ><div className="p-3">
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
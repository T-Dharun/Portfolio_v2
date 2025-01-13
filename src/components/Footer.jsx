import { socialMedia } from "./data";
import "../styles/Footer.css"
const Footer=()=>{
    return(
        <>
            <main className="footer-main">
                <section className="footer-container">   
                    <section className="footer-info">
                        <h3 className="fw-bold footer-head">T-Dharun</h3>
                        <p>Passionate about using software and hardware to create innovative and user-friendly products and solutions</p>
                    </section>
                    <section className="footer-media">
                        <h5 className="fw-bold footer-head">Social Networks</h5>
                        <div className="d-flex">
                            {
                                socialMedia.map((item,ind)=>{
                                    return(
                                        <a className="p-2" key={ind} href={item.link} target="_blank">
                                            <img src={item.url} className="footer-item"/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                </section>
                <section className="text-center text-light footer-develop">
                    Designed & Developed by T-Dharun
                </section>
            </main>
        </>
    )
}
export default Footer;
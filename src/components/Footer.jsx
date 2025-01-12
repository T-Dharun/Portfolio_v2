import { socialMedia } from "./data";
import "../styles/Footer.css"
const Footer=()=>{
    return(
        <>
            <main className="footer-main">
                <section className="footer-container p-5">   
                    <section className="footer-info">
                        <h3 className="fw-bold footer-head">T-Dharun</h3>
                        <p>Passionate about using software and hardware to create innovative and user-friendly products and solutions</p>
                    </section>
                    <section className="footer-media">
                        <h3 className="fw-bold footer-head">Social Media</h3>
                        <div className="d-flex">
                            {
                                socialMedia.map(item=>{
                                    return(
                                        <div className="p-2 ">
                                            <img src={item.url} className="footer-item"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </section>
                <section className="p-2 text-center fw-bold text-light bg-dark ">
                    Design & Developed by T-Dharun
                </section>
            </main>
        </>
    )
}
export default Footer;
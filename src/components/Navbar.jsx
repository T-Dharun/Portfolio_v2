import { useEffect, useState } from "react";
import {NavbarItems} from "./data";
import "../index.css";
import "../styles/Navbar.css";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (dark) {
            document.body.setAttribute("data-theme", "dark");
        }
        else {
            document.body.removeAttribute("data-theme");
        }
    }, [dark]);
    return (
        <nav className="navbar-main">
            <div className="w-100 d-flex justify-content-center align-items-center">
                <section className="d-flex navbar-list m-0">
                    {NavbarItems.map((item) => {
                        if(item.title === "toggle-background") {
                            return <div className="navbar-list-item" onClick={()=>setDark(prev=>!prev)}>
                                <img src={dark?item.lightImage:item.darkImage}/>
                            </div>
                        }
                        return (
                            <div key={item.id} className="navbar-list-item">
                                <img src={dark?item.lightImage:item.darkImage}/>
                            </div>
                            )
                        }
                    )}
                </section>
            </div>
        </nav>
    );
}
export default Navbar;
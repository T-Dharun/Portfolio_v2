import React, { useState } from "react";
import "../styles/Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
const Contact = () => {
    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail = async () => {
        const data = {
            service_id: "service_sy1yufd",
            template_id: "template_bxeuq1b",
            user_id: "FpzAqUmpxmnQ5WZ_6",
            template_params: {
                username: mailData.name,
                email: mailData.email,
                message: mailData.message,
            },
        };

        try {
            const result = await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setMailData({
                name: "",
                email: "",
                message: "",
            });
            toast.success("Your message was sent.");
            console.log(result.data);
        } catch (error) {
            toast.error("Something went wrong!")
            console.error(error);
        }
    };

    return (
        <>
            <section className="text-center w-100  contact-main" id="contact">
                <h1 className="fw-bold">Contact</h1>
                <div>Get in Touch with me</div>
            </section>
            <section className="form-main">
                <section className="form-section">
                    <div className="input-group">
                        <input
                            type="text"
                            id="name"
                            value={mailData.name}
                            required
                            placeholder="Full Name"
                            onChange={(e) =>
                                setMailData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Email Id"
                            value={mailData.email}
                            onChange={(e) =>
                                setMailData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="form-field w-100">
                        <textarea
                            id="message"
                            required
                            placeholder="Message Here"
                            value={mailData.message}
                            className="w-100"
                            onChange={(e) =>
                                setMailData((prev) => ({
                                    ...prev,
                                    message: e.target.value,
                                }))
                            }
                        ></textarea>
                    </div>
                    <button className="message-button" onClick={sendEmail}>
                        Message me
                    </button>
                </section>
            </section>
        </>
    );
};

export default Contact;

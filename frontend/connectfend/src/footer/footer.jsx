import "./footer.css";
import React from "react";
import { FaLinkedin, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/connectME_logo_transparent.png"; // Updated logo

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT SECTION */}
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={Logo} alt="ConnectME Logo" />
                    </div>

                    <h2 className="footer-title">Stay Connected</h2>

                    <div className="footer-input">
                        <input type="email" placeholder="Email Address" />
                        <button>➜</button>
                    </div>

                    <p className="footer-desc">
                        ConnectME Manufacturing LLC is a UAE-based Industrial IoT technology and manufacturing company,
                        delivering cyber-secure and scalable smart metering and IoT solutions since 2016.
                    </p>

                    <div className="footer-icons">
                        <a href="#"><FaLinkedin size={45} /></a>
                        <a href="#"><FaFacebook size={45} /></a>
                    </div>

                    <a href="#" className="footer-privacy">Privacy Policy</a>
                </div>

                {/* COLUMN 2: NAVIGATE */}
                <div className="footer-col footer-links">
                    <h2 className="footer-heading">Navigate</h2>
                    <ul>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                {/* COLUMN 3: CONTACT & HQ */}
                <div className="footer-col footer-contact">
                    <h2 className="footer-heading">Get In Touch</h2>

                    <div className="footer-location-block" style={{ marginTop: "30px" }}>
                        <strong>
                            UAE Office <FaMapMarkerAlt size={14} color="#fff" style={{ marginLeft: "6px" }} />
                        </strong>
                        <p className="footer-location">
                            Warehouse-7, Al Qaseer Warehouse,<br />
                            Ras Al Khor Industrial area-2, Dubai - UAE.<br />
                            Office : +971 4 234 8480 / +971 4 234 9525<br />
                            Email: info@connectme.biz
                        </p>
                    </div>
                </div>

                {/* COLUMN 4: REGIONAL OFFICES */}
                <div className="footer-col footer-regional">
                    <h2 className="footer-heading">
                        Regional Offices <FaMapMarkerAlt size={14} color="#fff" style={{ marginLeft: "6px" }} />
                    </h2>

                    <div className="footer-location-block">
                        <strong>Saudi Arabia</strong>
                        <p className="footer-location">
                            Office 14, 2nd Floor, Al Khobar Center, Al Khobar, KSA.
                        </p>
                    </div>

                    <div className="footer-location-block">
                        <strong>Qatar Office</strong>
                        <p className="footer-location">
                            First Floor, Building 98, Street 220, B-Ring Road, Zone 15, Doha, Qatar.<br />
                            Mobile : +974 7135 2869<br />
                            Email: sales.qat@connectme.biz
                        </p>
                    </div>

                    <div className="footer-location-block">
                        <strong>India</strong>
                        <p className="footer-location">
                            Bangalore, India.
                        </p>
                    </div>
                </div>

            </div>

            <div className="footer-bottom-container">
                <hr className="footer-line" />
                <p className="footer-bottom">
                    © ConnectME Manufacturing LLC 2024 | All Rights Reserved
                </p>
            </div>

        </footer>
    );
}

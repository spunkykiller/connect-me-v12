import React from "react";
import "./about.css";
import dubai from "../assets/dubai.png";
import heroImg from "../assets/logo.png";

import founder from "../assets/founder.jpg";
import founder2 from "../assets/founder2.jpg";

import iso9001 from "../assets/iso_9001.png";
import iso14001 from "../assets/iso_14001.png";
import iso45001 from "../assets/iso_45001.png";
import teamGroup from "../assets/team_group.jpg";

export default function AboutPage() {
    return (

        <div className="about-wrapper">

            {/* HERO SECTION */}
            <div className="about-hero">
                <img src={heroImg} alt="About ConnectME" className="about-hero-img" />

                <div className="about-hero-overlay">
                    <h1>Smart Metering. Secure IoT. Made for Scale.</h1>
                    <p>End-to-end metering, billing, and Industrial IoT ecosystems—engineered, manufactured, and deployed with reliability and cybersecurity at the core.</p>
                </div>
            </div>
            <div className="about-section">

                {/* TOP TWO-COLUMN SECTION */}
                <div className="about-top">

                    {/* LEFT IMAGE */}
                    <div className="about-image-box">
                        <img
                            src={teamGroup}
                            alt="ConnectME Team"
                            className="about-image"
                        />
                        <div className="about-image-footer">
                            DUBAI HQ
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="about-text">
                        <p>
                            ConnectME Manufacturing LLC is a UAE-based Industrial IoT technology and manufacturing company, delivering cyber-secure, scalable, and sustainable IoT solutions since 2016. We design and manufacture end-to-end smart metering and utility management solutions, including Utility Metering & Billing (UBILL), Energy Management (UENERGY), IoT platforms, cloud connectivity, and customized software solutions.
                        </p>

                        <p>
                            Our solutions are trusted across 800+ buildings, connecting 500,000+ meters for 120+ customers across the GCC.
                        </p>

                        <p>
                            With a strong focus on high-quality manufacturing, we produce advanced IoT hardware such as TECHKNAVE smart valves, clamp-on meters, UFLO ultrasonic BTU & water meters, GasKonnect AMR & relay controllers, UCONNECT M-Bus devices, edge gateways, protocol converters, and water leak detectors—engineered for reliability, accuracy, and cybersecurity.
                        </p>
                    </div>
                </div>

                {/* SECOND PARAGRAPH BLOCK */}
                <p className="about-full-text">
                    ConnectME enables organizations to automate, monitor, and optimize operations remotely through secure, end-to-end IoT ecosystems. We bring deep expertise in LPWAN technologies, particularly LoRaWAN, and have deployed 150+ private LoRa networks across residential, commercial, and retail environments throughout the GCC.
                </p>

                <p className="about-full-text">
                    Our operations follow international quality, environmental, and occupational safety standards, ensuring consistent performance, regulatory compliance, and long-term sustainability. Through customer-centric innovation, secure system design, and continuous improvement, ConnectME is committed to shaping smarter cities, resilient utilities, and responsible digital infrastructure across the region and beyond.
                </p>

            </div>
            {/* QUALITY | MISSION | VISION */}
            <div className="about-cards-section">

                <div className="about-card">
                    <h2 className="about-card-title">Quality Standards</h2>
                    <p>
                        At ConnectME Manufacturing LLC, quality is embedded across our design, manufacturing, and delivery processes. We adhere to international quality, environmental, occupational health & safety, and cybersecurity best practices, and our operations are certified to ISO 9001 / 14001 / 45001 standards.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Our Mission</h2>
                    <p>
                        To design, manufacture, and deliver cyber-secure, innovative metering and billing solutions and sustainable Industrial IoT solutions across the GCC and beyond.
                    </p>
                    <p className="about-card-small">
                        We leverage IoT, AI, and data analytics to deliver end-to-end smart metering ecosystems, including meters, smart valves, gateways, network connectivity, AMR and Billing platforms.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Our Vision</h2>
                    <p>
                        To become a globally recognized Industrial IoT technology and manufacturing brand, leading the GCC market in Utility billing solutions, Smart valves and Meter manufacturing, and secure connected infrastructure.
                    </p>
                </div>

            </div>
            {/* ISO CERTIFICATIONS SECTION */}
            <div className="iso-section">

                <div className="iso-card">
                    <img src={iso9001} alt="ISO 9001:2015" className="iso-img" />
                    <p className="iso-label">ISO 9001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={iso14001} alt="ISO 14001:2015" className="iso-img" />
                    <p className="iso-label">ISO 14001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={iso45001} alt="ISO 45001:2018" className="iso-img" />
                    <p className="iso-label">ISO 45001:2018</p>
                </div>

            </div>
            {/* ABOUT THE FOUNDER SECTION */}
            <div className="founder-section">

                <h2 className="founder-title">About the Founder</h2>

                {/* FOUNDER 1 — IMAGE LEFT, TEXT RIGHT */}
                <div className="founder-row">
                    <img src={founder} alt="Mr. Kothandapani" className="founder-img" />

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Kothandapani</h3>
                        <p className="founder-role">Sales Director</p>

                        <ul className="founder-list">
                            <li>He has 22 years of experience in Industrial automation with last 7 years in IoT technology.</li>
                            <li>During his last tenure as Head of Operations, he saw the strong potential of IoT trends.</li>
                            <li>His expertise in Automation projects and Control Centers shaped his role in the industry.</li>
                            <li>This inspired him to begin the process of launching a tech startup in IoT.</li>
                            <li>Expertise: Corporate management, Project Management, Technical architect & LoRaWAN expert.</li>
                        </ul>
                    </div>
                </div>

                {/* FOUNDER 2 — IMAGE RIGHT, TEXT LEFT */}
                <div className="founder-row">

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Esakimuthu</h3>
                        <p className="founder-role">Technical Director</p>

                        <ul className="founder-list">
                            <li>18+ years experience in metering, software development, and IoT hardware.</li>
                            <li>Expert in billing software (IBM), AMR solutions, and smart valve technology.</li>
                            <li>Founder of TECHKNAVE and co-founded CONNECTME in 2022.</li>
                            <li>Specializes in metering & BMS protocols for new smart metering verticals.</li>
                            <li>Expertise: Innovation technologies, Metering & Billing, Embedded systems.</li>
                        </ul>
                    </div>

                    <img src={founder2} alt="Mr. Esakimuthu" className="founder-img" />
                </div>

            </div>
            {/* TECHNOLOGY HERO SECTION */}
            <div className="tech-hero">
                <div className="tech-overlay">
                    <h1 className="tech-title">
                        Connecting People & <br /> Business With Technology
                    </h1>

                    <p className="tech-sub">
                        We make the best use of technology to serve your <br />
                        organizational goals
                    </p>

                    <p className="tech-sub">
                        We provide unrivalled technical support to ensure the <br />
                        successful delivery of your project.
                    </p>

                    <p className="tech-sub">
                        We consistently spend over Research & Development, <br />
                        Quality Improvement & innovative technologies.
                    </p>
                </div>
            </div>


        </div>
    );
}

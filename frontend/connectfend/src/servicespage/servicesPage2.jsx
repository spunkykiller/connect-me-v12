// src/servicespage/servicesPage2.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./services.css";
import img from "../assets/utility.png";
import bill from "../assets/bill.png";
import amc from "../assets/amc.png";
import consult from "../assets/consultancy.png";
import plc from "../assets/plc.png";
import dev from "../assets/development.png";

export default function ServicesPage2() {

    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const targetId = hash.substring(1);
        const smoothScroll = () => {
            const el = document.getElementById(targetId);
            if (el) {
                // Account for fixed header (70px) + some buffer
                const headerOffset = 90;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                setTimeout(smoothScroll, 100);
            }
        };

        setTimeout(smoothScroll, 0);
    }, [hash]);

    return (
        <div className="services-page">

            {/* ======================================================
      Utility Meter Maintenance — EXACT SCREENSHOT
====================================================== */}
            <section id="utility-maintenance" className="umm-wrapper">

                {/* Title */}
                <h2 className="umm-title">Utility Meter Maintenance</h2>

                <div className="umm-row">

                    {/* LEFT IMAGE */}
                    <img src={img} alt="Maintenance" className="umm-img" />

                    {/* RIGHT TEXT */}
                    <div className="umm-text">
                        <p>
                            A tenant metering provides the overview and insights needed for
                            accurate billing of water and energy consumption in residential
                            and/or commercial buildings. Highly accurate and reliable meters
                            combined with intuitive meter reading, correct billing platform
                            and proper validation of Meter data.
                        </p>

                        <p>
                            ConnectME offers meter maintenance service, to ensure meters
                            stay healthy, critical for correct billing. Our services cover
                            AI enabled AMR application, which validates the meter data on
                            each meter polling and as well automated meter error reports.
                            We do maintenance service on faulty meters replacements.
                        </p>
                    </div>

                </div>

            </section>


            {/* ======================================================
      Billing Managed Service — EXACT SCREENSHOT
====================================================== */}
            <section id="billing" className="billing-wrapper">

                <h2 className="billing-title">Billing Managed Service</h2>

                <div className="billing-row">

                    {/* LEFT TEXT */}
                    <div className="billing-text">
                        <p>
                            A tenant metering provides the overview and insights needed
                            for accurate billing of water and energy consumption in
                            residential and/or commercial buildings. Highly accurate and
                            reliable meters combined with intuitive meter reading, correct
                            billing platform and proper validation of Meter data.
                        </p>

                        <p>
                            ConnectME offers meter maintenance service, to ensure meters stay
                            healthy, critical for correct billing. Our services cover AI enabled
                            AMR application, which validates the meter data on each meter polling
                            and automated meter error reports. We do maintenance service on faulty
                            meters replacements.
                        </p>

                        <p>
                            Our payment portal allows residents to download bills and check their
                            account from the comfort of their own home or anywhere in the world
                            over the internet. Billing system is a combination of software and
                            hardware that receives service usage information, groups this
                            information for specific accounts or customers, produces invoices,
                            creates reports for management, and records (posts) payments made to
                            customer accounts.
                        </p>


                        <div className="onew"><p className="one">
                            After an invoice is generated and dispatched to the customer, ideally,
                            all customers will receive their bills and pay promptly. However, there
                            may be some customers, who do not pay their bills and there may be an
                            unacceptable delay in paying the bill and hence the service providers
                            must take some action needed to remedy the situation and collect the
                            outstanding balance due.
                        </p>

                            <p className="one">
                                Collection is the process of chasing past due receivables on customer
                                account. This usually involves sending notifications to the customer
                                and taking appropriate actions in absence of due payments after the
                                due date.
                            </p></div>
                    </div>


                    {/* RIGHT IMAGE */}
                    <img src={bill} alt="Billing Service" className="billing-img" />

                </div>

            </section>


            {/* ======================================================
      AMC & Training — EXACT SCREENSHOT
====================================================== */}
            <section id="amc" className="amc-wrapper">

                <h2 className="amc-title">AMC & Training</h2>

                <div className="amc-row">

                    {/* LEFT IMAGE */}
                    <img src={amc} alt="AMC Training" className="amc-img" />

                    {/* RIGHT TEXT */}
                    <div className="amc-text">
                        <p>
                            End-to-End IoT Training with hands-on experience and IoT certification
                            using live use cases.
                        </p>

                        <p>
                            Onsite customizable training PLC / HMI / SCADA – Basic and advanced
                            training courses. Drives / VFDs / Servo drives – Basic and Advanced
                            training courses. Networking IoT training.
                        </p>
                    </div>

                </div>

            </section>


            {/* ======================================================
      Technical Consultancy — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="consultancy" className="tc-wrapper">

                <h2 className="tc-title">Technical Consultancy</h2>

                <div className="tc-row">

                    {/* LEFT TEXT */}
                    <div className="tc-text">
                        <p>
                            Specialized focusing on everything from market research and strategy
                            consulting to hardware and software specialists to help navigate the
                            minefield of IoT protocols and other technical hurdles to jump through.
                        </p>

                        <p>
                            We offer: Plant Optimization Networking & security Audit trails –
                            Plant / SCADA networks IoT enablement
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img src={consult} alt="Technical Consultancy" className="tc-img" />

                </div>

            </section>


            {/* ======================================================
      PLC & SCADA Services — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="plc" className="plc-wrapper">

                <h2 className="plc-title">PLC & SCADA Services</h2>

                <div className="plc-row">

                    {/* LEFT IMAGE */}
                    <img src={plc} alt="PLC & SCADA" className="plc-img" />

                    {/* RIGHT TEXT */}
                    <div className="plc-text">
                        <p>
                            Usage of control systems, such as computers or robots, and information
                            technologies for handling different processes and machineries in an
                            industry to replace a human being. It is the second step beyond
                            mechanization in the scope of industrialization.
                        </p>

                        <p><strong>We offer:</strong></p>

                        <ul className="plc-list">
                            <li>Plant / machine upgrade – retrofits</li>
                            <li>PLC / SCADA / HMI – modifications</li>
                            <li>Maintenance contracts – AMC / SLA</li>
                            <li>Engineering Services</li>
                            <li>Manpower deployment – Engineers / Project Manager</li>
                        </ul>
                    </div>

                </div>

            </section>


            {/* ======================================================
      Development & Services — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="development" className="dev-wrapper">

                <h2 className="dev-title">Development & Services</h2>

                <div className="dev-row">

                    {/* LEFT TEXT BLOCK */}
                    <div className="dev-text">
                        <p>
                            Application development services allow you to build consumer-facing
                            apps for a range of digital platforms like mobile App, web, desktop.
                            Web development services imply designing, building, integrating,
                            scaling and maintaining dynamic software solutions that work via
                            intranet or internet.
                        </p>

                        <p>
                            We rely on our technological expertise and specialized industry
                            experience to develop any type of web, mobile App, desktop, and
                            hybrid app per your business requirements. Our application
                            maintenance and modernization services are designed to ensure the
                            scalability, performance, and sustainability of your entire software
                            infrastructure as your business grows.
                        </p>

                        <p>
                            Our thorough threat audits help us identify your software
                            infrastructure’s most pressing vulnerabilities, allowing us to
                            integrate the encryptions, security services and access protocols you
                            require. Our implementation specialists will work with your IT team
                            to establish detailed software deployment objectives and timelines,
                            covering configuration, testing, project governance, troubleshooting
                            and more. We provide holistic IT Infrastructure support, including
                            help desk management, custom messaging and collaboration, network
                            management and system administration services.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img src={dev} alt="Development Services" className="dev-img" />

                </div>

            </section>

        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import serviceData from "../data/serviceData";
import { FaCheckCircle } from "react-icons/fa";
import "../productDetails/productDetails.css"; // Reusing PDP styles where possible
import "./serviceDetail.css"; // Specific service styles

export default function ServiceDetail() {
    const { category, serviceId } = useParams();
    const [service, setService] = useState(null);
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        // Find Service
        let foundService = null;
        let foundCat = null;

        if (serviceId) {
            foundCat = serviceData.find(c => c.slug === category);
            if (foundCat) {
                foundService = foundCat.items.find(i => i.id === serviceId);
            }
        }

        if (foundService) {
            setService(foundService);
            setBreadcrumbs([
                { label: foundCat.category, path: "#" }, // No generic landing yet
                { label: foundService.name, path: "#" }
            ]);
        }
    }, [category, serviceId]);

    if (!service) return <div className="pd-not-found">Loading or Service Not Found...</div>;

    return (
        <div className="pd-page service-page">

            {/* BREADCRUMBS */}
            <div className="pd-breadcrumb">
                {breadcrumbs.map((b, i) => (
                    <span key={i}>
                        <span>{b.label}</span>
                        {i < breadcrumbs.length - 1 && " / "}
                    </span>
                ))}
            </div>

            {/* HERO SECTION */}
            <div className="pd-hero service-hero">
                <div className="pd-hero-content">
                    <h1 className="pd-title">{service.name}</h1>
                    <p className="pd-tagline">{service.description}</p>

                    <div className="pd-actions">
                        <Link to="/contact" className="btn-primary">Request Consultation</Link>
                        {service.brochure && (
                            <a href={service.brochure} download className="btn-secondary">
                                Download Brochure
                            </a>
                        )}
                    </div>
                </div>
                <div className="pd-hero-image">
                    <img src={service.heroImage} alt={service.name} />
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="pd-content">

                {/* OVERVIEW CONTENT */}
                {service.content && (
                    <section className="pd-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="service-text-block">
                            {service.content.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* FEATURES LIST (Simple) */}
                {service.features && (
                    <section className="pd-section">
                        <h2 className="section-title">Key Features</h2>
                        <ul className="pd-features-list">
                            {service.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* SUB ITEMS (Like MBus Reader) */}
                {service.subItems && (
                    <section className="pd-section">
                        <h2 className="section-title">Components</h2>
                        <div className="sub-items-grid">
                            {service.subItems.map((sub, i) => (
                                <div key={i} className="sub-item-card">
                                    <h3 className="sub-item-title">{sub.title}</h3>
                                    <p className="sub-item-desc">{sub.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ORDER CODES TABLE */}
                {service.orderCodes && (
                    <section className="pd-section">
                        <h2 className="section-title">Order Information</h2>
                        <table className="pd-specs-table">
                            <thead>
                                <tr>
                                    <th className="spec-label">Product Name</th>
                                    <th className="spec-label">Order Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {service.orderCodes.map((code, i) => (
                                    <tr key={i}>
                                        <td className="spec-value">{code.title}</td>
                                        <td className="spec-value"><strong>{code.code}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}

                {/* PARTNERS / EXTRA INFO */}
                {service.partners && (
                    <div className="service-partners">
                        <p><strong>Note:</strong> {service.partners}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

import smartImg from "../assets/smart.png";
import remote1 from "../assets/remote1.png";
import remote2 from "../assets/remote2.png";
import iotl from "../assets/iotLowa.png";
import items from "../assets/items.png";
import left1 from "../assets/left1.png";
import right1 from "../assets/right1.png";
import utilityImg from "../assets/utility.png";
import bill from "../assets/bill.png";
import amc from "../assets/amc.png";
import consult from "../assets/consultancy.png";
import plc from "../assets/plc.png";
import dev from "../assets/development.png";

const serviceData = [
    {
        category: "Solutions",
        slug: "solutions",
        items: [
            {
                id: "utility-billing-metering",
                name: "Utility Billing and Metering",
                description: "Complete end-to-end utility metering and billing ecosystem combining precision hardware (UFLO ultrasonic meters, GIMA electromagnetic meters) with UBILL software platform for automated reading, multi-utility billing, and valve control management.",
                heroImage: smartImg,
                content: [
                    "ConnectME delivers a comprehensive utility billing and metering solution trusted across 800+ buildings, connecting 500,000+ meters for 120+ customers across the GCC. Our ecosystem combines precision metering hardware with intelligent software platforms to automate the entire billing cycle.",
                    "The solution integrates UFLO ultrasonic BTU/water meters (U60 Advanced, U50 Compact, U40 series), GIMA electromagnetic flow meters (GIMA-B, GIMA-H, GIMA-IB), and TKN clamp-on meters with our UBILL software suite for complete automation from meter reading to payment collection."
                ],
                subItems: [
                    { title: "Metering Hardware", desc: "UFLO U60/U50/U40 ultrasonic meters (DN15-DN500), GIMA electromagnetic meters (DN6-DN3000), TKN clamp-on meters (DN50-DN3000) with M-Bus, LoRaWAN, NB-IoT, Modbus connectivity." },
                    { title: "UBILL AMR", desc: "Automated Meter Reading system supporting M-Bus, LoRaWAN, NB-IoT, Modbus protocols. Real-time data collection, automatic scheduling, AI-enabled validation, and CSV/API export." },
                    { title: "UBILL IBM", desc: "Integrated Billing Module for multi-utility tariffs (water, electricity, gas, chilled water, hot water), prepaid metering, tenant management, invoice generation, and payment portal." },
                    { title: "UBILL VCM", desc: "Valve Control Management system to remotely operate smart M-Bus/LoRaWAN shutoff valves via cloud dashboard for disconnection/reconnection management." }
                ],
                features: [
                    "Multi-utility billing (Water, Electricity, Gas, BTU, Chilled Water)",
                    "Automated meter reading via M-Bus, LoRaWAN, NB-IoT, Modbus",
                    "Prepaid and postpaid metering support",
                    "Tenant management and invoice generation",
                    "Remote valve control for disconnection/reconnection",
                    "Real-time consumption monitoring and alerts",
                    "Payment portal and collection management",
                    "BMS integration via BACnet IP and Modbus"
                ],
                brochure: "../files/Brochure.pdf"
            },
            {
                id: "network-security",
                name: "Network Security",
                description: "Industrial-grade cyber-secure connectivity solutions featuring VPN routers, secure gateways, and firewall protection for critical infrastructure and remote device access.",
                heroImage: remote1,
                content: [
                    "ConnectME provides enterprise-grade network security solutions designed specifically for industrial IoT environments. Our cyber-secure infrastructure protects critical utility and building management systems from unauthorized access while enabling seamless remote connectivity.",
                    "Built on trusted platforms including TosiLock industrial gateways, TOSIBOX and EWON VPN routers, our solutions ensure encrypted data transmission, secure remote access, and comprehensive firewall protection for your connected infrastructure."
                ],
                subItems: [
                    { title: "VPN Routers", desc: "Industrial VPN routers (TOSIBOX, EWON) supporting IPSec, OpenVPN, L2TP protocols with strong encryption for secure remote connectivity to industrial networks and devices." },
                    { title: "TosiLock Gateway", desc: "Secure industrial gateway with VPN and firewall capabilities designed for critical infrastructure protection, featuring encrypted tunneling and access control." },
                    { title: "Edge Controllers", desc: "Smart edge processing units with built-in security for local data logic, protocol conversion (M-Bus, Modbus, proprietary), and secure HTTPS communication to cloud servers." },
                    { title: "Secure Protocols", desc: "Support for encrypted communication protocols including HTTPS, SSL/TLS, IPSec VPN, ensuring data confidentiality and integrity across all network layers." }
                ],
                features: [
                    "IPSec, OpenVPN, L2TP VPN protocols",
                    "Industrial-grade firewall protection",
                    "Encrypted data transmission (SSL/TLS, HTTPS)",
                    "Remote access control and authentication",
                    "Secure cloud connectivity",
                    "Protocol isolation and network segmentation",
                    "Real-time security monitoring and alerts",
                    "Compliance with industrial cybersecurity standards"
                ],
                images: [remote2],
                partners: "Solutions based on TOSIBOX, EWON, and TosiLock industrial security platforms."
            },
            {
                id: "aqi-monitoring",
                name: "AQI Monitoring",
                description: "Comprehensive Indoor Air Quality monitoring solution using LoRaWAN wireless sensors to track CO2, TVOC, PM2.5, temperature, and humidity for healthy building certification and occupant wellbeing.",
                heroImage: iotl,
                content: [
                    "ConnectME's AQI (Air Quality Index) monitoring solution provides real-time visibility into indoor environmental conditions across schools, malls, hospitals, office buildings, and commercial facilities. Our wireless LoRaWAN sensor network enables comprehensive air quality tracking without complex wiring.",
                    "The solution combines multi-parameter IAQ sensors (CO2, TVOC, PM2.5, PM4, PM10) with temperature and humidity monitoring, delivering actionable insights through cloud dashboards and mobile apps. Ideal for healthy building certification (WELL, LEED) and ensuring occupant comfort and productivity."
                ],
                subItems: [
                    { title: "IAQ Sensors", desc: "LoRaWAN indoor air quality sensors monitoring CO2 (400-5000 ppm), TVOC (0-60000 ppb), PM2.5/PM4/PM10 particulate matter with ±3% accuracy and 10+ year battery life." },
                    { title: "Temperature & Humidity", desc: "Precision environmental sensors (±0.3°C, ±2% RH) for HVAC control loops and comfort monitoring, wireless LoRaWAN connectivity with 5-minute reporting intervals." },
                    { title: "Cloud Dashboard", desc: "Real-time monitoring dashboard with customizable alerts, historical trending, multi-location management, and automated reporting for compliance and certification." },
                    { title: "Mobile App", desc: "iOS/Android mobile application for on-the-go air quality monitoring, instant alerts, and facility management team notifications." }
                ],
                features: [
                    "CO2 monitoring (400-5000 ppm range)",
                    "TVOC (Total Volatile Organic Compounds) detection",
                    "PM2.5, PM4, PM10 particulate matter sensing",
                    "Temperature and humidity monitoring",
                    "LoRaWAN wireless connectivity (no wiring required)",
                    "10+ year battery life on sensors",
                    "Real-time alerts and notifications",
                    "Healthy building certification support (WELL, LEED)",
                    "Multi-location management",
                    "Historical data trending and reporting"
                ],
                applications: [
                    "Schools and educational facilities",
                    "Shopping malls and retail spaces",
                    "Hospitals and healthcare facilities",
                    "Office buildings and coworking spaces",
                    "Hotels and hospitality venues",
                    "Residential apartment complexes"
                ]
            },
            {
                id: "leak-detection",
                name: "Leak Detection Systems",
                description: "Wireless and wired water leak detection systems using LoRaWAN zone sensors and point sensors to protect critical infrastructure, server rooms, and mechanical spaces from water damage.",
                heroImage: items,
                content: [
                    "ConnectME's leak detection solution provides early warning protection against water damage in critical facilities. Our wireless LoRaWAN sensor network detects leaks instantly and sends alerts via cloud platform and WhatsApp API, enabling rapid response before costly damage occurs.",
                    "The system supports both zone-based detection (2-10 meter sensing cables for large areas) and single-point spot detection (for drip trays and specific risk points). Battery-powered wireless sensors eliminate installation complexity while providing 24/7 monitoring with temperature and humidity tracking."
                ],
                subItems: [
                    { title: "Wireless Zone Leak Sensor", desc: "LoRaWAN area-based leak detector with 2-10 meter extendable sensing cable, battery powered (5+ years), monitoring leak detection, temperature, humidity, and battery status." },
                    { title: "Wireless Point Leak Sensor", desc: "Compact spot leak detector for drip trays and specific risk points, fully wireless LoRaWAN connectivity, instant alerts, ideal for under-sink and equipment monitoring." },
                    { title: "Wired Leak Sensors", desc: "Reliable wired zone and point leak sensors for integration with traditional BMS panels, suitable for permanent installations in mechanical rooms and critical infrastructure." },
                    { title: "LoRa Gateway & Cloud", desc: "LoRaWAN gateway collects data from multiple sensors, forwards to UConnect Cloud platform via 4G/Wi-Fi, generates alerts and sends notifications through WhatsApp API." }
                ],
                features: [
                    "Wireless LoRaWAN connectivity (no wiring required)",
                    "Zone detection with 2-10 meter sensing cables",
                    "Point detection for specific risk areas",
                    "Battery powered (5+ year battery life)",
                    "Real-time leak, temperature, humidity monitoring",
                    "Instant WhatsApp and email alerts",
                    "Cloud-based monitoring dashboard",
                    "Multi-sensor management (100+ sensors per gateway)",
                    "Historical event logging",
                    "Integration with BMS systems"
                ],
                applications: [
                    "Server rooms and data centers",
                    "Mechanical and electrical rooms",
                    "Basement and underground areas",
                    "Under-sink and restroom facilities",
                    "HVAC equipment and chiller rooms",
                    "Storage facilities and warehouses"
                ]
            },
            {
                id: "intelligent-street-lighting",
                name: "Intelligent Street Lighting System",
                description: "Smart street lighting solution using LoRaWAN motion and light sensors with remote control capabilities to achieve 60-80% energy savings through motion-based activation and daylight harvesting.",
                heroImage: left1,
                content: [
                    "ConnectME's Intelligent Street Lighting System transforms traditional street lighting into a smart, energy-efficient network. Using LoRaWAN wireless sensors and smart switches, the solution enables motion-based activation, daylight harvesting, and remote control to dramatically reduce energy consumption while maintaining safety and visibility.",
                    "The system combines motion/light sensors with smart M-Bus/LoRaWAN switches and edge controllers to create an autonomous lighting network. Lights dim or turn off during low-activity periods and brighten when motion is detected, achieving 60-80% energy savings compared to traditional always-on lighting."
                ],
                subItems: [
                    { title: "Motion & Light Sensors", desc: "LoRaWAN wireless sensors detecting motion (PIR) and ambient light levels, triggering intelligent lighting control based on occupancy and daylight availability." },
                    { title: "Smart Switches/Relays", desc: "M-Bus and LoRaWAN smart switches (TKN2101C compact) for remote on/off control of street lights, supporting 230VAC loads with relay feedback monitoring." },
                    { title: "Edge Controllers", desc: "Local intelligence for lighting logic, scheduling algorithms, and autonomous operation even during network outages, with HTTPS cloud synchronization." },
                    { title: "Cloud Platform", desc: "Centralized monitoring and control dashboard for citywide lighting management, energy consumption tracking, fault detection, and maintenance scheduling." }
                ],
                features: [
                    "Motion-based activation (PIR sensors)",
                    "Daylight harvesting (ambient light sensing)",
                    "Remote on/off control via cloud dashboard",
                    "Automated dimming schedules",
                    "60-80% energy savings",
                    "LoRaWAN wireless connectivity",
                    "Real-time energy consumption monitoring",
                    "Fault detection and maintenance alerts",
                    "Extended lamp life (reduced operating hours)",
                    "Scalable architecture (1000+ lights per network)"
                ],
                benefits: [
                    "Significant energy cost reduction (60-80%)",
                    "Reduced carbon footprint and sustainability",
                    "Lower maintenance costs",
                    "Extended lamp and fixture lifespan",
                    "Improved safety through intelligent lighting",
                    "Real-time monitoring and fault detection",
                    "Flexible scheduling and control",
                    "Quick ROI (typically 2-3 years)"
                ]
            },
            {
                id: "intelligent-hvac",
                name: "Intelligent HVAC Automated Scheduling",
                description: "Smart HVAC control and energy optimization solution integrating BTU meters, smart valves, temperature sensors, and BMS systems for automated heating/cooling scheduling and zone-based climate control.",
                heroImage: utilityImg,
                content: [
                    "ConnectME's Intelligent HVAC solution delivers automated heating and cooling optimization for commercial buildings, hotels, hospitals, and multi-tenant facilities. By integrating UFLO BTU meters, smart M-Bus valves, temperature sensors, and BMS systems, the solution enables precise zone-based control and occupancy-driven scheduling.",
                    "The system continuously monitors energy consumption via BTU meters, adjusts heating/cooling based on occupancy and schedules, and provides real-time energy reporting. Integration with BACnet IP and Modbus TCP/RTU ensures seamless connectivity with existing building management systems."
                ],
                subItems: [
                    { title: "UFLO BTU Meters", desc: "Precision ultrasonic BTU meters (U60 Advanced, U50 Compact) measuring heating/cooling energy consumption with ±2% accuracy, M-Bus/Modbus/BACnet connectivity for real-time monitoring." },
                    { title: "Smart M-Bus Valves", desc: "Battery-operated smart shutoff valves (TKN29XX compact) for zone-based flow control, remote open/close commands via M-Bus, 16+ year battery life, PN16 industrial grade." },
                    { title: "Temperature Sensors", desc: "PT1000/PT100 precision temperature sensors for supply/return monitoring, wireless and wired options, ±0.1°C accuracy for accurate BTU calculation." },
                    { title: "BMS Integration", desc: "Protocol converters (M-Bus to Modbus, Modbus to BACnet IP) enabling seamless integration with Schneider, Siemens, Honeywell, Johnson Controls BMS platforms." }
                ],
                features: [
                    "Automated heating/cooling scheduling",
                    "Zone-based climate control",
                    "Occupancy-based optimization",
                    "Real-time energy consumption monitoring",
                    "Remote valve control (open/close/modulate)",
                    "BACnet IP and Modbus TCP/RTU integration",
                    "Temperature differential monitoring",
                    "Demand-based load management",
                    "Energy reporting and analytics",
                    "Predictive maintenance alerts"
                ],
                applications: [
                    "Commercial office buildings",
                    "Hotels and hospitality facilities",
                    "Hospitals and healthcare centers",
                    "Multi-tenant residential buildings",
                    "Shopping malls and retail spaces",
                    "Educational institutions",
                    "District cooling/heating systems"
                ],
                benefits: [
                    "20-40% HVAC energy savings",
                    "Improved occupant comfort",
                    "Reduced operational costs",
                    "Extended equipment lifespan",
                    "Compliance with energy regulations",
                    "Real-time fault detection",
                    "Automated billing for multi-tenant buildings",
                    "Sustainability and carbon reduction"
                ]
            }
        ]
    },
    {
        category: "Services",
        slug: "services",
        items: [
            {
                id: "utility-maintenance",
                name: "Utility Meter Maintenance",
                description: "Ensuring meters stay healthy for accurate billing. Includes AI-enabled AMR validation and faulty meter replacements.",
                heroImage: utilityImg,
                content: [
                    "A tenant metering provides the overview and insights needed for accurate billing of water and energy consumption. Highly accurate and reliable meters combined with intuitive meter reading, correct billing platform and proper validation.",
                    "ConnectME offers meter maintenance service to ensure meters stay healthy, critical for correct billing. We do maintenance service on faulty meters replacements."
                ]
            },
            {
                id: "billing",
                name: "Billing Managed Service",
                description: "End-to-end billing management, from data grouping and invoice generation to payment portal and collection services.",
                heroImage: bill,
                content: [
                    "Our payment portal allows residents to download bills and check their account from the comfort of their own home. Billing system is a combination of software and hardware that receives service usage information.",
                    "Collection is the process of chasing past due receivables on customer account. This usually involves sending notifications to the customer and taking appropriate actions in absence of due payments."
                ]
            },
            {
                id: "amc",
                name: "AMC & Training",
                description: "End-to-End IoT Training and Maintenance Contracts.",
                heroImage: amc,
                content: [
                    "End-to-End IoT Training with hands-on experience and IoT certification using live use cases.",
                    "Onsite customizable training PLC / HMI / SCADA – Basic and advanced training courses. Drives / VFDs / Servo drives."
                ]
            },
            {
                id: "consultancy",
                name: "Technical Consultancy",
                description: "Expert consultancy for IoT protocols, Plant Optimization, Networking & Security.",
                heroImage: consult,
                content: [
                    "Specialized focusing on everything from market research and strategy consulting to hardware and software specialists to help navigate the minefield of IoT protocols.",
                    "We offer: Plant Optimization, Networking & Security, Audit trails, IoT enablement."
                ]
            },
            {
                id: "plc",
                name: "PLC & SCADA Services",
                description: "Control systems and automation services for industrial processes.",
                heroImage: plc,
                features: [
                    "Plant / machine upgrade – retrofits",
                    "PLC / SCADA / HMI – modifications",
                    "Maintenance contracts – AMC / SLA",
                    "Engineering Services",
                    "Manpower deployment"
                ]
            },
            {
                id: "development",
                name: "Development & Services",
                description: "Custom Web, Mobile, and Desktop Application Development.",
                heroImage: dev,
                content: [
                    "Application development services allow you to build consumer-facing apps for a range of digital platforms like mobile App, web, desktop.",
                    "We rely on our technological expertise and specialized industry experience to develop any type of web, mobile App, desktop, and hybrid app per your business requirements."
                ]
            }
        ]
    }
];

export default serviceData;

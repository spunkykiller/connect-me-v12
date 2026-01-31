import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/productData";
import "./productDetails.css";

// --- TOSIBOX SPECIFIC DATA (Parsed from Sheet Tab 55) ---
const TOSIBOX_GENERAL_DESC = `Tosibox has automated secure connectivity and made it simple. It is a standardized way of building VPN connections based on a patented connection method. The configuration-free Plug & Go™ implementation is easy and ready to use within minutes. The unique feature of TOSIBOX® technology is the two-way connectivity that brings the benefits of IP networking plus remote maintenance with one technology. Tosibox is ISO27001 certified, underlining the importance we place on protecting customers´ data. Platform security is based on automated firewall settings and point-to-point VPN technology with 256 Bit AES data encryption. Tosibox Platform supports Layer 2 and layer 3 routing functions and protocols.`;

const TOSIBOX_VARIANTS = [
  {
    id: 'key',
    name: 'Tosibox Key',
    overview: `TOSIBOX® Key is an intelligent cryptoprocessing device that enables a secure connection between your computer and one or more TOSIBOX® Node, giving you a full visibility and control over the network devices connected to the Node.`,
    specs: `Connections are established through a secure, encrypted VPN tunnel over the Internet or other common WANs and LANs, and permissions can be easily granted, revoked and configured in an unlimited number of ways. TOSIBOX® Key comes with a durable light metal alloy casing.`
  },
  {
    id: 'hub',
    name: 'Tosibox Hub',
    overview: `Tosibox HUB—your gateway to building scalable, secure, and centrally managed VPN networks with unparalleled flexibility and performance. Cut access management work time from days into minutes! Tosibox HUB is the cornerstone of constructing professional and secure networks comprising a large number of sites and users. It is the VPN tunnel concentrator maintaining persistent connections to Tosibox Nodes while enforcing fine grained access controls.`,
    specs: `• Enhanced cybersecurity through network segmentation
• Centralized user and access management
• Continuous 24/7 data collection and management
• Audit trail and network monitoring
• Data routing according to regulations and requirements`
  },
  {
    id: '175',
    name: 'Tosibox 175',
    overview: `TOSIBOX® 175 is a cost-effective Plug & GoTM connectivity device and is ideal for demanding industry sectors that require an all-in-one solution that is compact, able to handle all environments and suited to global market usage. The 4G module and external 4G antenna provides stable Internet access, so the node can be easily configured anywhere`,
    specs: `Ports :
• 1 x RJ-45 WAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)
• 1 x RJ-45 LAN connection, 10/100 Mb/s, auto-negotiation(MDI / MDI-X)
• LAN can be assigned as Service connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)
• RS485 port is not supported in the software.
Connections :
• 9-35V DC
• 2 x WiFi antenna connector, RP-SMA Male
• 1 x LTE antenna connector, SMA Female
• DIN rail attachment (back)
• Maximum power consumption 10W`
  },
  {
    id: '350',
    name: 'Tosibox 350',
    overview: `the TOSIBOX® 350: Tailored for businesses seeking a compact, all-encompassing solution that operates seamlessly across the globe. With its fixed ethernet interface and WiFi you can enjoy stable remote access wherever you are. No technical expertise is needed – just plug and play`,
    specs: `Ports :
• 1 x RJ-45 WAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)
• 4 x RJ-45 LAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)
• 1 x USB 2.0, type A
Connections :
• 2 pin industrial DC power socket
• 6-Pin 3.5mm Digital IO socket (6-Pin serial interface not supported in software)
• 5-35V DC, reverse polarity protection, voltage surge/transient protection
• 1 x RP-SMA for WiFi
• DIN rail mounting in the back
• Maximum power consumption 10W`
  },
  {
    id: '375',
    name: 'Tosibox 375',
    overview: `TOSIBOX® 375 - Your workhorse for any industry. If you are in a business that needs a compact, allin-one solution that can work nearly anywhere in the world, TOSIBOX® 375 is for you! With its fixed ethernet interface, WiFi, or internal LTE module complemented with external antennas, you can enjoy stable remote access wherever you are.`,
    specs: `Ports :
• 1 x RJ-45 WAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)
• 4 x RJ-45 LAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)
• 1 x USB 2.0, type A
Connections :
• 2-pin industrial DC power socket
• 6-pin 3.5mm digital IO socket (6-pin serial interface not supported in software)
• 5-35V DC, reverse polarity protection, voltage surge/transient protection
• 1 x RP-SMA for WiFi
• 2 x SMA for LTE
• DIN rail mounting in the back
• Maximum power consumption 10W`
  },
  {
    id: '610',
    name: 'Tosibox 610',
    overview: `TOSIBOX® 610 is a perfect choice for professional applications when wireless networking is not required. Leading edge cybersecurity technology from TOSIBOX enable diverse application scenarios. The durable aluminium alloy shell and small form factor is ideal for rugged mounting conditions.`,
    specs: `Ports
• 1 x RJ-45 WAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 3 x RJ-45 LAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 1 x USB 2.0, type A
Connections
• 4 pin industrial DC power socket
• 9-50V DC, reverse polarity protection, voltage surge/
transient protection
• DIN rail mounting slot in the back
• Maximum power consumption 6W`
  },
  {
    id: '675',
    name: 'Tosibox 675',
    overview: `TOSIBOX® 675 is a powerful device for high demanding application in demanding industrial environments. With a wide range of connectivity interfaces the demand for always on connectivity is guaranteed. This device can be used in power-hungry industrial applications where speed and robustness are at the heart of the solution.`,
    specs: `Ports
• 1 x RJ-45 WAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 3 x RJ-45 LAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 1 x USB 2.0, type A
Connections
• 4 pin industrial DC power socket
• 9-50V DC, reverse polarity protection,
voltage surge/transient protection
• 2 x RP-SMA for WiFi
• 2 x SMA for LTE
• 1 x GNSS
• DIN rail mounting slot in the back and on both sides
• Maximum power consumption 16W`
  },
  {
    id: '695',
    name: 'Tosibox 695',
    overview: `Unleash the power of 5G cellular connectivity and LTE fallback with the TOSIBOX® 695 - a game-changer for networking professionals! Crafted with precision and engineered for toughness, the TOSIBOX® 695 boasts a robust metal alloy casing complemented by an extensive temperature range and an IP30 Ingress Protection Rating. It's built to thrive in challenging environmental conditions.`,
    specs: `Ports
• 1 x RJ-45 WAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 4 x RJ-45 LAN connection, 10/100/1000 Mb/s, autonegotiation (MDI / MDI-X)
• 1 x USB 2.0, type A
Connections
• 4 pin industrial DC power socket
• 9-50V DC, reverse polarity protection,
voltage surge/transient protection
• 2 x RP-SMA for WiFi
• 4 x SMA for 5G/LTE
• 1 x GNSS
• DIN rail mounting slot in the back and on both sides
• Maximum power consumption 18W`
  },
  {
    id: 'lock500',
    name: 'Tosibox Lock 500',
    overview: `TOSIBOX® Lock 500 is a high-end connectivity device bringing unprecedented possibilities for customers to manage their operations and to build new IoT solutions. The Lock 500 is ideal for demanding industrial environments and opens up new opportunities in security and office networking sectors. The Lock 500 is compatible with all existing TOSIBOX® products.`,
    specs: `Ports
• 1 x USB 2.0, type A
• 1 x RJ-45 WAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)
• 3 x RJ-45 LAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)
• LAN3 can be assigned as Service connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)
Connections
• 12-48V DC (+/-20%), reverse polarity protected
• Device frame connector
• 2 x WiFi antenna connector, RP-SMA Female
• (TBL5i*) 2 x LTE antenna connectors, SMA Female
• 2 x Digital Input, 2 x Digital Output, 24V DC out
• DIN rail attachment (back)
• Maximum power consumption 10W`
  }
];


const LORAWAN_VARIANTS = [
  {
    id: 'kerlink-indoor',
    name: 'Kerlink Indoor',
    overview: `The “Wirnet™ iFemtoCell” is the ideal gateway to support your smart city, smart building or every smart project that requests dedicated indoor coverage and/or network densification, providing both a unique superior coverage and operational excellence.`,
    specs: `Basic Features:
• Indoor LoRa® Gateway
• Ingress protection (IP30)
• Backhaul connectivity: Wi-Fi 2.4GHz and Ethernet (RJ45)
• Supported LoRaWAN® regional parameters: EU863-870, IN865-867, RU864-870, US902-928, AU915-928, AS923, KR920-923
Technical Specifications:
• Range: -20°C +55°C, (for gateway only, without power supply)
• Casing: IP30
• Humidity: 5% to 95%`
  },
  {
    id: 'kerlink-outdoor',
    name: 'Kerlink Outdoor',
    overview: `The “Wirnet™ iStation” is the ideal gateway to support your smart city, smart industry or any other smart project, combining simplicity of installation, unique superior coverage and operational excellence.`,
    specs: `Basic Features:
• Outdoor LoRa® Gateway
• Carrier grade casing (IP67) for industrial use
• Backhaul connectivity: 4G Worldwide module with 3G/2G fallback and Ethernet (RJ45)
• Supported LoRaWAN® regional parameters: EU863-870, IN865-867, RU864-870, US902-928, AU915-928, AS923, KR920-923
Technical Specifications:
• Range: -40°C +60°C
• Casing: IP67 Alu (Back), Polycarbonate (Front), Inox (mounting kit)
• Humidity: 95%`
  },
  {
    id: 'cloudgate-mini',
    name: 'CloudGate Mini',
    overview: `CloudGate mini provides remote access over a secure VPN tunnel to the Ethernet device(s) connected to its LAN Ethernet ports. CloudGate 4.0 next generation CloudGate 4.0 IoT gateways were designed with CloudGate’s signature features; including ruggedized design housing, industrial grade temperature ranges, timed wake-up and ignition sensing, sim connection, passive and active GPS antenna support and all are LuvitRED enabled.`,
    specs: `Basic Features:
• Worldwide LTE Cat 4 Programmable Multicarrier Gateway with 3G fallback
• A wide variety of wired interfaces with pre-installed versatile IO card
• Optional WiFi and LoRaWAN in rear expansion slot
• Secure remote access to Ethernet-connected devices
• Optional battery backup
Technical Specifications:
• Humidity: 5% - 95%
• Range: -40°C to +85°C
• Case: Aluminium case`
  }
];


export default function ProductDetails() {
  const { category, subcategory, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [activeTab, setActiveTab] = useState('features');

  // For specialized views
  const [isTosiboxPage, setIsTosiboxPage] = useState(false);
  const [activeTosiboxVariant, setActiveTosiboxVariant] = useState(TOSIBOX_VARIANTS[0]);

  const [isLorawanPage, setIsLorawanPage] = useState(false);
  const [activeLorawanVariant, setActiveLorawanVariant] = useState(LORAWAN_VARIANTS[0]);

  useEffect(() => {
    // 1. Find Product & Context
    let foundProduct = null;
    let foundCat = null;
    let foundSub = null;

    // Reset special views
    setIsTosiboxPage(false);
    setIsLorawanPage(false);

    if (productId) {
      // Check for specialized Tosibox ID
      if (productId === 'tosilock-industrial-gateway' || productId === 'tosibox-industrial-gateway') {
        setIsTosiboxPage(true);
      }
      // Check for specialized LoRaWAN ID
      else if (productId === 'kerlink-cloudgate') {
        setIsLorawanPage(true);
      }

      for (const cat of productData) {
        for (const sub of cat.subcategories) {
          const match = sub.products.find(p => p.id === productId);
          if (match) {
            foundProduct = match;
            foundCat = cat;
            foundSub = sub;
            break;
          }
        }
        if (foundProduct) break;
      }
    }

    if (foundProduct) {
      setProduct(foundProduct);

      // 2. Set Breadcrumbs
      setBreadcrumbs([
        { label: "Products", path: "/products" },
        { label: foundCat.category, path: `/products/${foundCat.slug}` },
        { label: foundSub.name, path: `/products/${foundCat.slug}/${foundSub.slug}` },
        { label: foundProduct.name, path: "#" } // Current
      ]);

      // 3. Set Related (Same subcategory, exclude self)
      setRelatedProducts(foundSub.products.filter(p => p.id !== foundProduct.id).slice(0, 4));
    }
  }, [productId, category, subcategory]);

  if (!product) return <div className="pd-not-found">Loading or Product Not Found...</div>;

  // --- Helper to parse/render specs for Tosibox/LoRaWAN ---
  const renderSpecializedSpecs = (specsString) => {
    if (!specsString) return null;

    // 1. Structure the data
    const struct = [];
    const lines = specsString.split('\n').filter(l => l.trim());

    let currentList = null;

    lines.forEach(line => {
      const trimmed = line.trim();
      // Heuristic: Ends with ':' or is likely a header
      const isHeader = trimmed.endsWith(':') ||
        ['Ports', 'Connections', 'Dimensions', 'Order code', 'Basic Features', 'Technical Specifications'].includes(trimmed);

      if (isHeader) {
        if (currentList) {
          struct.push({ type: 'list', items: currentList });
          currentList = null;
        }
        struct.push({ type: 'header', text: trimmed.replace(/:$/, '') });
      } else {
        if (!currentList) currentList = [];
        currentList.push(trimmed);
      }
    });
    // Flush last list
    if (currentList) struct.push({ type: 'list', items: currentList });

    // 2. Render JSX
    return struct.map((item, idx) => {
      if (item.type === 'header') {
        return <h5 key={idx} className="spec-category">{item.text}</h5>;
      }
      return (
        <ul key={idx} className="spec-list">
          {item.items.map((liText, liIdx) => (
            <li key={liIdx}>{liText}</li>
          ))}
        </ul>
      );
    });
  };



  // --- SPECIALIZED VIEW FOR TOSIBOX ---
  if (isTosiboxPage) {
    return (
      <div className="pd-page pd-tosibox-theme">
        <SEO
          title={`${product.name} - ConnectME`}
          description={TOSIBOX_GENERAL_DESC.substring(0, 160)}
        />
        {/* BREADCRUMBS */}
        <div className="pd-breadcrumb">
          {breadcrumbs.map((b, i) => (
            <span key={i}>
              {b.path !== "#" ? <Link to={b.path}>{b.label}</Link> : <span>{b.label}</span>}
              {i < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>

        {/* HERO SECTION - Modified for Tosibox */}
        <div className="pd-hero pd-tosibox-hero">
          <div className="pd-hero-content">
            <h1 className="pd-title">{product.name}</h1>
            <div className="pd-overview pd-tosibox-general-desc">
              <p>{TOSIBOX_GENERAL_DESC}</p>
            </div>
            <div className="pd-actions">
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
            </div>
          </div>
          <div className="pd-hero-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* MAIN CONTENT AREA - VARIANT TABS */}
        <div className="pd-content pd-tosibox-content">
          <h2 className="section-title">Product Variants</h2>

          <div className="pd-tabs pd-tosibox-tabs">
            {TOSIBOX_VARIANTS.map((variant) => (
              <button
                key={variant.id}
                className={`pd-tab-btn ${activeTosiboxVariant.id === variant.id ? 'active' : ''}`}
                onClick={() => setActiveTosiboxVariant(variant)}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <div className="pd-tab-content pd-tosibox-variant-panel">
            <h3 className="variant-title">{activeTosiboxVariant.name}</h3>

            <div className="variant-overview">
              <h4>Overview</h4>
              <p>{activeTosiboxVariant.overview}</p>
            </div>

            <div className="variant-specs">

              {renderSpecializedSpecs(activeTosiboxVariant.specs)}
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="pd-related-section">
              <h2 className="section-title">Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map(rp => (
                  <Link to={`/products/${category}/${subcategory}/${rp.id}`} key={rp.id} className="related-card">
                    <div className="related-img">
                      <img src={rp.image} alt={rp.name} />
                    </div>
                    <h4 className="related-title">{rp.name}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR LORAWAN GATEWAY ---
  if (isLorawanPage) {
    return (
      <div className="pd-page pd-tosibox-theme">
        <SEO
          title={`${product.name} - LoRaWAN Gateway`}
          description="High-performance LoRaWAN gateways for indoor and outdoor industrial IoT connectivity."
        />
        {/* BREADCRUMBS */}
        <div className="pd-breadcrumb">
          {breadcrumbs.map((b, i) => (
            <span key={i}>
              {b.path !== "#" ? <Link to={b.path}>{b.label}</Link> : <span>{b.label}</span>}
              {i < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>

        {/* HERO SECTION */}
        <div className="pd-hero pd-tosibox-hero">
          <div className="pd-hero-content">
            <h1 className="pd-title">{product.name}</h1>
            {/* Using basic description from product data if no general desc exists */}
            <div className="pd-overview pd-tosibox-general-desc">
              <p>High-performance LoRaWAN gateways for indoor and outdoor industrial IoT connectivity.</p>
            </div>
            <div className="pd-actions">
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
            </div>
          </div>
          <div className="pd-hero-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* MAIN CONTENT AREA - VARIANT TABS */}
        <div className="pd-content pd-tosibox-content">
          <h2 className="section-title">Product Variants</h2>

          <div className="pd-tabs pd-tosibox-tabs">
            {LORAWAN_VARIANTS.map((variant) => (
              <button
                key={variant.id}
                className={`pd-tab-btn ${activeLorawanVariant.id === variant.id ? 'active' : ''}`}
                onClick={() => setActiveLorawanVariant(variant)}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <div className="pd-tab-content pd-tosibox-variant-panel">
            <h3 className="variant-title">{activeLorawanVariant.name}</h3>

            <div className="variant-overview">
              <h4>Overview</h4>
              <p>{activeLorawanVariant.overview}</p>
            </div>

            <div className="variant-specs">

              {renderSpecializedSpecs(activeLorawanVariant.specs)}
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="pd-related-section">
              <h2 className="section-title">Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map(rp => (
                  <Link to={`/products/${category}/${subcategory}/${rp.id}`} key={rp.id} className="related-card">
                    <div className="related-img">
                      <img src={rp.image} alt={rp.name} />
                    </div>
                    <h4 className="related-title">{rp.name}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- GENERIC VIEW (Old Layout) ---
  return (
    <div className="pd-page">
      <SEO
        title={`${product.name} - ConnectME Product`}
        description={product.description ? product.description.substring(0, 160) : "ConnectME Industrial IoT Product"}
      />

      {/* BREADCRUMBS */}
      <div className="pd-breadcrumb">
        {breadcrumbs.map((b, i) => (
          <span key={i}>
            {b.path !== "#" ? <Link to={b.path}>{b.label}</Link> : <span>{b.label}</span>}
            {i < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </div>

      {/* HERO SECTION */}
      <div className="pd-hero">
        <div className="pd-hero-content">
          <h1 className="pd-title">{product.name}</h1>
          {product.overview && (
            <div className="pd-overview">
              {product.overview.split('\n').map((para, i) => <p key={i}>{para}</p>)}
            </div>
          )}

          <div className="pd-actions">
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
            {product.brochure ? (
              <a href={product.brochure} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download Datasheet
              </a>
            ) : (
              <button className="btn-secondary" disabled>Download Datasheet (Coming Soon)</button>
            )}
          </div>
        </div>
        <div className="pd-hero-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="pd-content">

        {/* TABS NAVIGATION */}
        <div className="pd-tabs">
          <button
            className={`pd-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Key Features
          </button>
          {product.specs && (
            <button
              className={`pd-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
          )}
          {relatedProducts.length > 0 && (
            <button
              className={`pd-tab-btn ${activeTab === 'related' ? 'active' : ''}`}
              onClick={() => setActiveTab('related')}
            >
              Related Products
            </button>
          )}
        </div>

        {/* TAB CONTENT */}
        <div className="pd-tab-content">

          {/* FEATURES TAB */}
          {activeTab === 'features' && (
            <section className="pd-tab-panel">
              <h2 className="section-title">Key Features</h2>
              <ul className="pd-features-list">
                {product.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                )) || <p>No specific features listed.</p>}
              </ul>
            </section>
          )}

          {/* SPECS TAB */}
          {activeTab === 'specs' && product.specs && (
            <section className="pd-tab-panel">
              <h2 className="section-title">Specifications</h2>
              <div className="pd-specs-table-wrapper">
                <table className="pd-specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td className="spec-value">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* RELATED TAB */}
          {activeTab === 'related' && relatedProducts.length > 0 && (
            <section className="pd-tab-panel pd-related">
              <h2 className="section-title">Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map(rp => (
                  <Link to={`/products/${category}/${subcategory}/${rp.id}`} key={rp.id} className="related-card">
                    <div className="related-img">
                      <img src={rp.image} alt={rp.name} />
                    </div>
                    <h4 className="related-title">{rp.name}</h4>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/productData";
import "./productDetails.css";

export default function ProductDetails() {
  const { category, subcategory, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    // 1. Find Product & Context
    let foundProduct = null;
    let foundCat = null;
    let foundSub = null;

    // Search strategy: If we have full URL params, use them for speed & context.
    // If not, flattened search (robustness).

    if (productId) {
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

  return (
    <div className="pd-page">

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
          {/* Detailed brief relocated to Specifications tab */}

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

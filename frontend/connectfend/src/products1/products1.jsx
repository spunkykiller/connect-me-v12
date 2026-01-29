import React from "react";
import "./products1.css";
import productsData from "../data/productData";
import { Link } from "react-router-dom";


export default function Products() {
  // Flatten products from the new structured data, including category and subcategory info for links
  const products = productsData.flatMap(category =>
    category.subcategories.flatMap(subcategory =>
      subcategory.products.map(product => ({
        ...product,
        title: product.name,
        subtitle: product.tags?.[0] || "Product",
        // Construct proper link path: /products/{category}/{subcategory}/{productId}
        link: `/products/${category.slug}/${subcategory.slug}/${product.id}`
      }))
    )
  );

  // show only the first 4 products in marquee
  const displayProducts = products.slice(0, 4);

  return (
    <div className="products-section">
      <h1 className="products-title">Our Products</h1>

      <div className="marquee">
        <div className="marquee-track animate-scroll-left">

          {/* duplicate items 12x for seamless infinite loop on ultra-wide screens (4k+) */}
          {Array(12).fill(displayProducts).flat().map((p, index) => (
            <div key={index} className="product-card">
              <div className="product-image-wrapper">
                <img src={p.image} className="product-image" alt={p.title} />
              </div>

              <div className="product-details">
                <p className="product-subtitle">{p.subtitle}</p>
                <h2 className="product-title">{p.title}</h2>
                <Link to={p.link} className="view-more-link">
                  View More &rarr;
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Header from "./header/header";
import Footer from "./footer/footer";

import LandingPage from "./landingpage/landingpage";
import ListingPage from "./productsPage/ListingPage"; // NEW
import Blogs from "./blogs1/blogs1";
import BlogPage from "./blogpage/blogpage";
import AboutPage from "./about/about";
import Contact from "./contact/contact";
import Project from "./project/project";
import ProductDetails from "./productDetails/productDetails";
import ServicesPage1 from "./servicespage/servicesPage1";
import ServicesPage2 from "./servicespage/servicesPage2";
import ServiceDetail from "./servicespage/ServiceDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* NEW ROUTE - Unified Listing Page */}
        <Route path="/products" element={<ListingPage />} />

        {/* NEW PRODUCT ARCHITECTURE ROUTES */}
        <Route path="/products/:category" element={<ListingPage />} />
        <Route path="/products/:category/:subcategory" element={<ListingPage />} />
        <Route path="/products/:category/:subcategory/:productId" element={<ProductDetails />} />

        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Project />} />

        <Route path="/services/:category/:serviceId" element={<ServiceDetail />} />

        {/* Services Pages (Keeping old ones for backup if needed, but menu now points to new) */}
        <Route path="/services1" element={<ServicesPage1 />} />
        <Route path="/services2" element={<ServicesPage2 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

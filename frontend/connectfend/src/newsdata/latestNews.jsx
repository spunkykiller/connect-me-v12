import React from "react";
import "./latestNews.css";
import newsData from "../data/newsData";

export default function LatestNews() {
  return (
    <div className="news-section">
      <h1 className="news-title">Latest News!</h1>

      <div className="news-wrapper">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">

            {/* LEFT CONTENT */}
            <div className="news-content">
              <p className="news-text">{item.title}</p>

              <div className="news-meta">
                <span className="news-author">{item.author}</span>
                <span className="news-date">{item.date}</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <img src={item.image} alt="news" className="news-image" />

          </div>
        ))}
      </div>
    </div>
  );
}

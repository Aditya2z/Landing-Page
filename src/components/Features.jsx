import React from "react";
import "../styles/features.css";

const features = [
  {
    title: "TruEstimate",
    description: "Find out how much your property is worth",
    image: "/images/buildings.png",
  },
  {
    title: "Search 2.0",
    description: "Find homes by drive time",
    image: "/images/car.png",
  },
  {
    title: "Map View",
    description: "Search for properties in preferred area using map",
    image: "/images/house-map.png",
  },
];

const Features = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>
                {feature.description} <span className="arrow">›</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

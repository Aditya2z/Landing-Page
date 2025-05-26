import React, { useState } from "react";
import { FaMicrophone, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import "../styles/hero.css";

const HeroSection = ({ setProperties }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `api/properties?search=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      if (response.status === 204) {
        setProperties([]);
        return;
      }
      const data = await response.json();

      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Find Real Estate and Get Your Dream Space
        </h1>
        <p className="hero-subtitle">
          We are a real estate agency that will help you find the best residence
          you dream of, let's discuss for your dream house?
        </p>

        <div className="search-bar">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "buy" ? "active" : ""}`}
              onClick={() => setActiveTab("buy")}
            >
              Buy
            </button>
            <button
              className={`tab-button ${activeTab === "rent" ? "active" : ""}`}
              onClick={() => setActiveTab("rent")}
            >
              Rent
            </button>
          </div>

          <div className="search-controls">
            <div className="property-type">
              <FaHome className="icon" />
              <select>
                <option>Property type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Studio</option>
              </select>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search by location or Property ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaMicrophone className="icon clickable" />
            <FaMapMarkerAlt className="icon clickable" />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

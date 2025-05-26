import React, { useEffect, useState } from "react";
import PropertyCard from "./Card";
import "../styles/properties.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const PropertyList = ({ properties, setProperties }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const cities = ["Abhu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaima"];

  const fetchProperties = async (city) => {
    try {
      setLoading(true);
      let response;
      if (city) {
        response = await fetch(`/api/properties?search=${city}`);
      } else {
        response = await fetch(`/api/properties`);
      }
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      fetchProperties(selectedCity);
    } else {
      fetchProperties();
    }
  }, [selectedCity]);

  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="property-list-section">
      <h2>Browse New Projects in the UAE</h2>
      <div className="filter-buttons">
        {cities.map((city) => (
          <button
            key={city}
            className={`location-btn ${selectedCity === city ? "active" : ""}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading">Loading properties...</p>
      ) : properties.length === 0 ? (
        <div className="no-results">
          <img
            src="/assets/anastasiya-badun-qdiTkuy-4YM-unsplash.jpg"
            alt="No Results"
          />
          <p>No properties were found matching your criteria.</p>
        </div>
      ) : (
        <div className="carousel-wrapper">
          <button
            className="scroll-btn left"
            onClick={() => scrollContainer("left")}
          >
            <FaArrowLeft />
          </button>

          <div className="card-list" ref={scrollRef}>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <button
            className="scroll-btn right"
            onClick={() => scrollContainer("right")}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default PropertyList;

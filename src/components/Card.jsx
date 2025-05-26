import React, { useState } from "react";
import "../styles/card.css";
import {
  FaHeart,
  FaLocationArrow,
  FaArrowLeft,
  FaArrowRight,
  FaUserAlt,
  FaMapMarkerAlt,
  FaCircle,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const getWeeksAgo = (dateString) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - postedDate;
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    return diffInWeeks === 0
      ? "less than a week"
      : `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""}`;
  };

  return (
    <div className="property-card">
      <div className="image-carousel">
        <img
          src={property.images[currentImage]}
          alt="property"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if placeholder fails
            e.target.src = "https://placehold.co/600x400";
          }}
        />
        {property.images.length >= 1 && (
          <>
            <div className="carousel-controls">
              <button onClick={prevImage}>
                <FaArrowLeft />
              </button>
              <button onClick={nextImage}>
                <FaArrowRight />
              </button>
            </div>
            <div className="image-indicators">
              {property.images.map((_, index) => (
                <FaCircle
                  key={index}
                  className={`indicator ${
                    currentImage === index ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </>
        )}
        {property.verified && <span className="verified-badge">Verified</span>}
      </div>

      <div className="property-info">
        <h3 className="title">{property.description}</h3>

        <div className="price-area">
          <div className="price">
            <span>AED {property.price.toLocaleString()}</span>
            <span>AED {Math.round(property.price / property.sqft)} / sqft</span>
          </div>
          <span className="area">{property.sqft} sqft</span>
        </div>

        <div className="details">
          <span>{property.condition}</span>
          <span>• {property.type}</span>
        </div>

        <div className="dealer">
          <FaUserAlt />
          <div>
            <div className="meta">
              {property.postedBy}, {getWeeksAgo(property.posted)} ago
            </div>
            <div className="agency">{property.seller.name}</div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="location">
            <FaMapMarkerAlt /> {property.address}
          </div>
          <div className="actions">
            <button className="icon">
              <FaHeart />
            </button>
            <button className="icon">
              <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

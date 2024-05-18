import React from 'react';
import './serviceCard.css';

const ServiceCard = ({ color, title, description }) => {
  return (
    <div className='card-container'>
      <div className="ellipse" style={{ backgroundColor: color }}></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;

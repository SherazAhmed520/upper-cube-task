import React from 'react';
import './services.css';
import NavbarComp from '../../components/Navbar/Navbar';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import { cardData } from '../../lib/cardData';

const Services = () => {
  return (
    <>
      <div className="service-container">
        <NavbarComp />
        <div className="service-img">
          <h1>Our Services</h1>
        </div>

        <div className="all-services">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              color={card.color}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

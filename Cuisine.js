import React from 'react';
import { useParams } from 'react-router-dom';
import './Cuisine.css';

const Cuisine = () => {
  const { type } = useParams();
  return (
    <div className="cuisine">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Recipes</h2>
      <p>Explore our delicious {type} recipes!</p>
    </div>
  );
};

export default Cuisine;

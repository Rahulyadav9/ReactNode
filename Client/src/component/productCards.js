// src/components/ProductCard.js

import React, { useState } from 'react';
import { useCounter } from "../utils/Context";
const ProductCard = ({ image, price, title, description }) => {
  let [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const { count, increment, decrement } = useCounter();
  const handleAddToCart = (product) => {
    increment(product);
  };
  const toggleDescription = () => {
    isDescriptionVisible= !isDescriptionVisible;
    setDescriptionVisible(isDescriptionVisible);
    if(isDescriptionVisible){
      setTimeout(() => {
        setDescriptionVisible(false);
    }, 2000);
    }
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Product" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">${price} {title}</h2>
          <button
            onClick={toggleDescription}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isDescriptionVisible ? 'Hide Details' : 'View Details'}
          </button>
        </div>
        {/* Conditionally render description */}
        {isDescriptionVisible && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p>{description}</p>
          </div>
        )}
        <button className='w-10 h-10 bg-blue-500 text-white font-bold left-2 rounded-full'
            onClick={()=>handleAddToCart({ image, price, title, description })}
        >🛒+</button>
      </div>
    </div>
  );
};

export default ProductCard;

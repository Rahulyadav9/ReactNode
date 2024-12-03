// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './addToCart';
const ProductHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-2 shadow-md sticky">
        <div className="container mx-auto px-4 flex justify-between">
            <div className="flex items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:bg-blue-600 hover:shadow-lg">Home</Link>
                        </li>
                        <li>
                            <Link to="/product" className="hover:bg-blue-600 hover:shadow-lg">Product</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:bg-blue-600 hover:shadow-lg">About</Link>
                        </li>
                        <li>
                            <Link to="/ikea" className="hover:bg-blue-600 hover:shadow-lg">IKEA</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <AddToCart/>
        </div>
    </header>
  );
};

export default ProductHeader;

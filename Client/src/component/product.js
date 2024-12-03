import React, { useEffect, useState } from 'react';
import '../index.css';
import ProductCard from "./productCards";
import Loader from './Loader';


function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.products);
        setLoading(false);
      }
    )
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error loading products. Please try again later.</div>;
  }
  return (
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(product => (
            <ProductCard key={product.id}
              image={product.images}
              price={product.price} 
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </main>
  );
}

export default ItemList;

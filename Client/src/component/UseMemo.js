import React, { useState, useMemo } from 'react';
const products = [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 999, "rating": 4.5 },
    { "id": 2, "name": "Smartphone", "category": "Electronics", "price": 799, "rating": 4.7 },
    { "id": 3, "name": "Headphones", "category": "Electronics", "price": 199, "rating": 4.3 },
    { "id": 4, "name": "Smartwatch", "category": "Electronics", "price": 299, "rating": 4.4 },
    { "id": 5, "name": "T-shirt", "category": "Apparel", "price": 19, "rating": 4.0 },
    { "id": 6, "name": "Jeans", "category": "Apparel", "price": 49, "rating": 4.1 },
    { "id": 7, "name": "Jacket", "category": "Apparel", "price": 89, "rating": 4.6 },
    { "id": 8, "name": "Sneakers", "category": "Apparel", "price": 99, "rating": 4.2 },
    { "id": 9, "name": "Coffee Maker", "category": "Appliances", "price": 49, "rating": 4.3 },
    { "id": 10, "name": "Microwave", "category": "Appliances", "price": 120, "rating": 4.0 },
    { "id": 11, "name": "Blender", "category": "Appliances", "price": 59, "rating": 4.1 },
    { "id": 12, "name": "Air Fryer", "category": "Appliances", "price": 99, "rating": 4.5 },
    { "id": 13, "name": "Gaming Console", "category": "Electronics", "price": 499, "rating": 4.8 },
    { "id": 14, "name": "Monitor", "category": "Electronics", "price": 179, "rating": 4.4 },
    { "id": 15, "name": "Sofa", "category": "Furniture", "price": 699, "rating": 4.3 },
    { "id": 16, "name": "Dining Table", "category": "Furniture", "price": 499, "rating": 4.6 },
    { "id": 17, "name": "Office Chair", "category": "Furniture", "price": 149, "rating": 4.5 },
    { "id": 18, "name": "Bed Frame", "category": "Furniture", "price": 399, "rating": 4.2 },
    { "id": 19, "name": "Television", "category": "Electronics", "price": 1299, "rating": 4.9 },
    { "id": 20, "name": "Dress", "category": "Apparel", "price": 59, "rating": 4.2 }
]


function UseMemo() {
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("price"); // Default sorting by price

    // Filter and sort products using useMemo
    const filteredAndSortedProducts = useMemo(() => {
        console.log("Filtering and sorting products...");

        let filteredProducts = products;

        // Filter by category
        if (category !== "All") {
            filteredProducts = filteredProducts.filter(
                product => product.category === category
            );
        }

        // Sort by selected option
        if (sortBy === "price") {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "rating") {
            filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        return filteredProducts;
    }, [category, sortBy]); // Dependencies: only recalculate if category or sortBy changes

    return (
        <div>
            <h1 className='font-bold'>Product List</h1>

            <label>
                Filter by Category:
                <select value={category} onChange={e => setCategory(e.target.value)} className='text-black rounded-sm mb-2 ml-1'>
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Appliances">Appliances</option>
                </select>
            </label>

            <label className='ml-5'>
                Sort by:
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className='text-black rounded-sm ml-1'>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </label>

            <ul>
                {filteredAndSortedProducts.map(product => (
                    <li className='bg-orange-50 mb-2 text-black' key={product.id}>
                        <h2 className='font-bold'>{product.name}</h2>
                        <p className='font-semibold'><span className='text-fuchsia-500'>Category: </span>{product.category}</p>
                        <p className='font-semibold'><span className='text-fuchsia-500'>Price: </span>${product.price}</p>
                        <p className='font-semibold'><span className='text-fuchsia-500'>Rating:</span> 
                        <span className='text-yellow-600'>{product.rating}⭐</span></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseMemo;

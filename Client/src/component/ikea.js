import React, { useState, useEffect } from 'react';
import { useCounter } from "../utils/Context";
function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { count, increment, decrement } = useCounter();
    const handleAddToCart = (product) => {
        increment(product);
    };
    useEffect(() => {
        const apiUrl = 'https://sik.search.blue.cdtapps.com/in/en/search?c=listaf&v=20240110';
        const requestBody = {
            "components": [{"component": "PRIMARY_AREA", "columns": 2}],
            "isUserLoggedIn": false,
            "optimizely": {"listing_3050_ablate_image_hover_effect": null},
            "searchParameters": {"input": "20656", "type": "CATEGORY"}
        };

        const fetchProducts = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                // Map through data to extract product items
                const productItems = data?.results[0]?.items?.map(item => item?.product);
                console.log(productItems);
                setProducts(productItems);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return loading?<p>Loading...</p>:(
        <div className="container mx-auto p-4">
            <div className="flex grid grid-cols-4">
                {products.map((product, index) => product?.mainImageUrl && (
                    <div key={product?.id} className={`bg-white p-4 relative my-1 whitespace-pre-line ${index >= 4 ? 'border-t border-gray-300' : ''}`}
                    >
                        {product?.badge?.type  && (
                            product?.badge?.text=="Top seller" ? (
                                <h1 className="absolute top-2 left-2 bg-rose-600 text-white text-sm font-bold py-1 px-2">
                                {product?.badge?.text}
                            </h1>
                            ) :(
                                <h1 className="absolute top-2 left-2 bg-slate-950 text-white text-sm font-bold py-1 px-2">
                                {product?.badge?.text}
                                </h1>
                            ) 
                        )}
                        
                        <img
                            src={product?.mainImageUrl}
                            alt={product?.mainImageAlt}
                            className="w-60 h-60 object-cover rounded-md"
                        />
                        {
                            product?.tagText &&
                            (
                                <h1 className="text-red-600 text-sm font-bold">
                                {product?.tagText}
                                </h1>
                            ) 
                        }
                        <p className="font-medium mt-1">{product?.name}</p>
                        <div className='flex col-span-1 text-sm'>
                            <p className="text-gray-600 flex">{product?.typeName.slice()},</p>
                            <p className="text-gray-600 ml-1">{product?.itemMeasureReferenceText}</p>
                        </div>
                        <p className="text-lg font-bold mt-2">
                            {product?.salesPrice?.current?.prefix} 
                            <span className='text-3xl'>{product?.salesPrice?.current?.wholeNumber}</span>
                        </p>
                        <p className="text-yellow-500 mt-2">
                            {product?.ratingValue} ★ ({product?.ratingCount})
                        </p>
                        <button className='w-10 h-10 bg-blue-500 text-white font-bold left-2 rounded-full'
                            onClick={()=>handleAddToCart(product)}
                        >🛒+</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

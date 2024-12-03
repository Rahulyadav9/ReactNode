import React, { createContext, useContext, useState } from 'react';

// Create CounterContext
const CounterContext = createContext();

// Export a simple provider
export const CounterProvider = ({children}) => {
    const [products, setProduct] = useState([]);
    const [count, setCount] = useState(products.length);
    // Define increment and decrement functions
    const increment = (item) => {
        setProduct((prevItems) => [...prevItems, item] )
        setCount(count+1);
    };
    const decrement = () => setCount(count - 1);
    return (
        <CounterContext.Provider value={{ count, increment, decrement, products }}>
           {children}
        </CounterContext.Provider>
    );
};

// Export custom hook for easy access
export const useCounter = () => useContext(CounterContext);

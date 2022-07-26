import React, { createContext, ReactElement, useState, useEffect } from 'react';
import getProducts from '../lib/getData';

export const AppContext = createContext({});

export const AppProvider = (props: { children: ReactElement }) => {
    const [products, setProducts] = useState()

    useEffect(() => {
        updateStore()
    }, [])

    const updateStore = async () => {
        const productData = await getProducts();
        if(productData !== null) setProducts(productData);
    }

    return (
        <AppContext.Provider value={{ products, setProducts }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
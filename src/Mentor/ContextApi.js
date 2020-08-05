import React, { createContext } from 'react';
import useApi from './useApi';

export const CartContext = createContext();
export const CartProvider = props => {
    return (
        <CartContext.Provider value={{ ...useApi() }}>
            {props.children}
        </CartContext.Provider>
    )
}

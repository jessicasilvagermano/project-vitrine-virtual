import React, { createContext, useState } from "react";
import { getItem, setItem } from "../services/LocalStorege";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getItem('itemCart') || [])
    const [dados, setDados] = useState([])


    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.qtd;
    }, 0);



    const addToCart = (item) => {

        const copyCart = [...cart]
        const productFound = copyCart.find((product) => product.id === item.id);

        if (!productFound) {
            copyCart.push({ id: item.id, qtd: 1, price: item.price, img: item.image_link })
        } else {
            productFound.qtd = productFound.qtd + 1
        }
        setItem('itemCart', copyCart)
        setCart(copyCart)

    };

    const removeToCart = (item) => {

        const copyCart = [...cart]
        const productFound = copyCart.find((product) => product.id === item.id);

        if (productFound && productFound.qtd > 1) {
            productFound.qtd = productFound.qtd - 1
            setCart(copyCart)
            
        } else {
            const arrayFilter = copyCart.filter((product) => product.id !== item.id)
            setItem('itemCart', [...arrayFilter])
            setCart(arrayFilter)
            console.log(arrayFilter)
        }
    };



    const clearCart = (item) => {
        const copyCart = [...cart]
        const productFound = copyCart.find((product) => product.id === item.id);

        if (productFound && productFound.qtd === 1)
            setCart([]);
        console.log(cart)
    }


    return (
        <CartContext.Provider
            value={{ cart, setCart, dados, setDados, addToCart, removeToCart, clearCart, quantity }}>
            {children}
        </CartContext.Provider>
    )
};
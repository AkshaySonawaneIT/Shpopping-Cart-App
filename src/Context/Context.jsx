import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './CartReducer';

const Cart = createContext();

function Context({ children }) {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'commerce' }),
        fastDelivery: faker.datatype.boolean(),
    }))

    // console.log(products)

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })

    return <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
}

export default Context;

export const CartContext = () => {
    return useContext(Cart);
}

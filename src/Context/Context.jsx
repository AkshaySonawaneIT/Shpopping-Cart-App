import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from './CartReducer';

const Cart = createContext();

function Context({ children }) {

    faker.seed(99);

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'commerce' }),
        fastDelivery: faker.datatype.boolean(),
        inStock: faker.datatype.boolean(),
    }))

    // console.log(products)

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byFastDelivery: false,
        // byRating: 0,
        searchQuery: "",
    })

    return <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
        {children}
    </Cart.Provider>
}


export default Context;

export const CartContext = () => {
    return useContext(Cart);
}



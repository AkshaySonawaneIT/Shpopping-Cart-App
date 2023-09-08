import React from 'react'
import { CartContext } from '../Context/Context'
import SingleProduct from './SingleProduct';
import './style.css';
import Filters from './Filters';

function Home() {

    const { state: {products}, } = CartContext();
    // console.log(products);

    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}/>
                })}
            </div>
        </div>
    )
}

export default Home

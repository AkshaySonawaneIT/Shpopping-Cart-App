import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import Rating from './Rating';
import './style.css';
import { CartContext } from '../Context/Context';

function SingleProduct({ prod }) {
    // console.log(prod);

    const {
        state: { cart },
        dispatch,
    } = CartContext();

    return (
        <div className='products'>
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹ {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                        {/* <Rating rating={prod.ratings} /> */}
                    </Card.Subtitle>
                    {
                        cart.some(p => p.id === prod.id) ? (
                            <Button onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                })
                            }} variant='danger'>
                                Remove
                            </Button>
                        ) : (
                            <Button onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                })
                            }} disabled={!prod.inStock}>
                                {!prod.inStock ? "Out of Stock" : "Add"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct

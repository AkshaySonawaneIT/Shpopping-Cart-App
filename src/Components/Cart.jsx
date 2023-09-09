import React, { useState, useEffect } from 'react'
import { CartContext } from '../Context/Context'
import { Button, Col, FormControl, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

function Cart() {

  const { state: { cart }, dispatch } = CartContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart])


  return (
    <div className='home'>
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>{prod.name}</Col>
                <Col md={2}>
                  <FormControl as="select" value={prod.qty}
                    onChange={(e) => dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })}
                  >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Button type='button' onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }} variant='light'>
                  <AiFillDelete fontSize="20px" />
                </Button>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type='button' disabled={cart.length === 0}>
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart

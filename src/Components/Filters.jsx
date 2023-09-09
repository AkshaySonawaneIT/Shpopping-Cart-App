import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css';
import Rating from './Rating';

function Filters() {

    const [rate, setRate] = useState(2);

    return (
        <div className='filters'>
            <span className="title">Filter Products</span>
            <span>
                <Form.Check inline label="Ascending" name="group1" type="radio" id={`inline-1`} />
                <Form.Check inline label="Descending" name="group1" type="radio" id={`inline-2`} />
                <Form.Check inline label="Include Out of Stock" name="group1" type="checkbox" id={`inline-3`} />
                <Form.Check inline label="Fast Delivery Only" name="group1" type="radio" id={`inline-4`} />
            </span>
            <span className='rating'>
                <label style={{ padding: 10 }}>Rating: </label>
                <Rating onClick={(i) => setRate(i+1)} rating={rate} style={{ cursor: "pointer" }} />
            </span>
            <Button variant='light'>Clear Filters</Button>
        </div >
    )
}

export default Filters

import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mycards = items => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = item.filter(user => user._id !== id);

                        setItem(remaining);
                    }
                })
        }
    }
    return (
        <div className="col-md-4 my-5">
            <Card >
                <Card.Img variant="top" className="img-fluid" src={items.items.img} />
                <Card.Body>
                    <Card.Title>{items.items.name}</Card.Title>
                    <p>Desc: {items.items.desc}</p>
                    <p>${items.items.price}</p>
                    <p>Quantity: {items.items.quantity}</p>
                    <p>Manufacturer: {items.items.supplier}</p>
                    <p>Email: {items.items.email}</p>
                </Card.Body>

                <button onClick={() => handleUserDelete(items.items._id)} className="btn btn-primary w-50 mx-auto mb-3">Remove</button>
            </Card>
        </div>
    );
};

export default Mycards;
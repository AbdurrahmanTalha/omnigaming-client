import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInvitem = items => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const handleItemDelete = id => {
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
    console.log(items)
    return (
        <div className="col-md-4 my-5">
            <Card >
                <Card.Img variant="top" className="img-fluid" src={items.item.img} />
                <Card.Body>
                    <Card.Title>{items.item.name}</Card.Title>
                    <p>Desc: {items.item.desc}</p>
                    <p>${items.item.price}</p>
                    <p>Quantity: {items.item.quantity}</p>
                    <p>Manufacturer: {items.item.supplier}</p>
                    <p>Email: {items.item.email}</p>
                </Card.Body>

                <button onClick={() => handleItemDelete(items.item._id)} className="btn btn-primary w-50 mx-auto mb-3">Remove</button>
            </Card>
        </div>


    );
};

export default ManageInvitem;
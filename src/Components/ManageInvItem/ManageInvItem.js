import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInvitem = items => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://morning-thicket-30795.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const { name, desc, quantity, supplier, email, price, _id } = items.item

    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://morning-thicket-30795.herokuapp.com/item/${id}`;
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
                <Card.Img variant="top" className="img-fluid" src={items.item.img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Desc: {desc}</p>
                    <p>id: {_id}</p>
                    <p>${price}</p>
                    {
                        quantity < 1 ? <p>Out Of Stock</p> : <p>{quantity}</p>
                    }
                    <p>Manufacturer: {supplier}</p>
                    <p>Email: {email}</p>
                </Card.Body>

                <button onClick={() => handleItemDelete(items.item._id)} className="btn btn-primary w-50 mx-auto mb-3">Remove</button>
            </Card>
        </div>


    );
};

export default ManageInvitem;
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';

const ManageItem = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    const handleUpdateUser = event => {
        event.preventDefault()
        const quantity = item.quantity - 1;
        const updatedQuantity = { quantity };
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
        window.location.reload(false);
    }

    const handleStockUp = event => {
        const oldQuantity = item.quantity;
        const newQuantity = event.target.quantity.value;
        const quantity = Number(oldQuantity) + Number(newQuantity);
        
        event.preventDefault()
        const updatedQuantity = { quantity };
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
        window.location.reload(false);
    }
    return (
        <div>
            <h2>{item.name}</h2>
            <h2>{item._id}</h2>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.supplier}</p>
            <button className="btn btn-primary" onClick={handleUpdateUser}>Deliver</button>

            <form onSubmit={handleStockUp}>
                <input type="number" name="quantity" />
                <button type="submit" className="btn btn-primary" name="stock" >StockUp</button>
            </form>

            <Link to="/inventory" className="btn btn-primary">Manage Inventory</Link>

        </div>
    );
};

export default ManageItem;
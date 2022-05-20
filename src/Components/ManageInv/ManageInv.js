import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInvItem from '../ManageInvItem/ManageInvItem';

const ManageInv = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('https://frozen-meadow-07188.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [items])
    return (
        <div>
            <h2 className="text-center">Manage Computers</h2>
            <Link className="btn btn-primary mx-auto w-50" to="/addItem">Add Item</Link>
            <div className="row container mx-auto">

                {
                    items.map(item => <ManageInvItem item={item} key={item._id}></ManageInvItem>)
                }
            </div>
        </div>
    );
};

export default ManageInv;
import React, { useEffect, useState } from 'react';
import ManageInvItem from '../ManageInvItem/ManageInvItem';

const ManageInv = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [items])
    return (
        <div>
            <h2 className="text-center">Manage Computers</h2>
            {
                items.map(item => <ManageInvItem item={item} key={item._id}></ManageInvItem>)
            }

        </div>
    );
};

export default ManageInv;
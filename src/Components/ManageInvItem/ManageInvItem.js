import React, { useState, useEffect } from 'react';

const ManageInvitem = items => {
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
                        console.log('deleted');
                        const remaining = item.filter(user => user._id !== id);
                        setItem(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>{items.item.name}</h2>
            <button onClick={() => handleUserDelete(items.item._id)}>X</button>
        </div>
    );
};

export default ManageInvitem;
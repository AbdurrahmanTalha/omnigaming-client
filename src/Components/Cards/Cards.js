import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ComputerCards from '../Card/ComputerCards';

const Cards = () => {
    const [computers, setComputers] = useState([])
    useEffect(() => {
        // https://omnigaming.onrender.com/
        fetch('https://omnigaming.onrender.com/item/home')
            .then(res => res.json())
            .then(data => setComputers(data))
    }, [])
    return (
        <div className="row mx-auto d-flex align-items-center justify-content-center my-5 container mx-auto">
            {
                computers.map(computer => <ComputerCards computer={computer} key={computer._id}></ComputerCards>)
            }
            <Link to="/inventory" className="btn btn-primary mx-auto w-50">Manage Inventory</Link>

        </div>
    );
};

export default Cards;

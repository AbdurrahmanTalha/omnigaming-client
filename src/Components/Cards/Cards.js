import React, { useEffect, useState } from 'react';
import ComputerCards from '../Card/ComputerCards';

const Cards = () => {
    const [computers, setComputers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item/home')
            .then(res => res.json())
            .then(data => setComputers(data))
    }, [])
    return (
        <div className="row mx-auto d-flex align-items-center justify-content-center my-5">
            {
                computers.map(computer => <ComputerCards computer={computer} key={computer._id}></ComputerCards>)
            }

        </div>
    );
};

export default Cards;
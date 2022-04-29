import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ComputerCards = computer => {
    console.log(computer);
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
        // console.log(id)
    }
    return (
        <div className="col-md-4 my-5">
            <Card >
                <Card.Img variant="top" src={computer.computer.img} />
                <Card.Body>
                    <Card.Title>{computer.computer.name}</Card.Title>
                    <p>Desc: {computer.computer.desc}</p>
                    <p>${computer.computer.price}</p>
                    <p>Quantity: {computer.computer.quantity}</p>
                    <p>Manufacturer: {computer.computer.supplier}</p>
                    <Button onClick={() => navigateToServiceDetail(computer.computer._id)} variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ComputerCards;
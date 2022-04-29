import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ComputerCards = computer => {
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
                    <Button variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ComputerCards;
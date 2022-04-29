import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ComputerCards = computer => {
    console.log(computer);
    return (
        <div className="col-md-4 my-5">
            <Card >
                <Card.Img variant="top" src={computer.computer.img} />
                <Card.Body>
                    <Card.Title>{computer.computer.name}</Card.Title>
                    <Button variant="primary">Deliver</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ComputerCards;
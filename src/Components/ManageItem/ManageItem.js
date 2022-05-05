import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetail from '../../Hooks/useItemDetail';

const ManageItem = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        const url = `https://morning-thicket-30795.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            });

    }, [item]);
    const handleUpdateItem = event => {
        event.preventDefault()
        if (item.quantity < 1) {
            console.log(item.quantity);
            toast("Out of Stock")
        } else {

            const quantity = item.quantity - 1;
            const updatedQuantity = { quantity };
            const url = `https://morning-thicket-30795.herokuapp.com/item/${itemId}`;

            console.log(quantity);
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

            toast(`Successfully purchased ${item.name}`)
        }

    }

    const handleStockUp = event => {

        const oldQuantity = item.quantity;
        const newQuantity = event.target.quantity.value;
        const quantity = Number(oldQuantity) + Number(newQuantity);


        event.preventDefault()
        const updatedQuantity = { quantity };
        const url = `https://morning-thicket-30795.herokuapp.com/item/${itemId}`;
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

    }
    return (
        <div >
            <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <Card.Img variant="top" src={item?.img} />
                <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>
                        {item?.desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>ID: {item?._id}</ListGroupItem>
                    <ListGroupItem>Price: ${item?.price}</ListGroupItem>
                    {
                        item?.quantity < 1 ? <ListGroupItem>Out Of Stock</ListGroupItem> : <ListGroupItem>{item?.quantity}</ListGroupItem>
                    }
                    <ListGroupItem>Supplier: {item?.supplier}</ListGroupItem>
                    <ListGroupItem>Email: {item?.email}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button className="btn btn-primary" onClick={handleUpdateItem}>Deliver</Button>

                </Card.Body>
            </Card>


            <form onSubmit={handleStockUp} className="mb-5">
                <input type="number" name="quantity" min="0" placeholder="Stock Number Add" />
                <button type="submit" className="btn btn-primary ms-2" name="stock"  >StockUp</button>
            </form>

            <Link to="/inventory" className="btn btn-primary">Manage Inventory</Link>

        </div>
    );
};

export default ManageItem;
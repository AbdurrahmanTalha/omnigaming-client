import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Navbar.css"


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    
    return (
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">OmniGaming</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        {
                            user && <>
                                <LinkContainer to="/addItem">
                                    <Nav.Link>Add Item</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/inventory">
                                    <Nav.Link>Inventory</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/myItems">
                                    <Nav.Link>My Items</Nav.Link>
                                </LinkContainer>
                            </>
                        }
                        <LinkContainer to="/blogs">
                            <Nav.Link>Blogs</Nav.Link>
                        </LinkContainer>
                        {
                            user ?
                                <button className="btn btn-primary" onClick={handleSignOut}>SignOut</button> : <Link className="btn btn-primary" to="/login">Login</Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container w-50 mx-auto">
            <h2>This is blogs</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference Between JavaScript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        Javascript is a programming lanauge. It is running in any web browser with a proper browser engine. And node js is an interpreter and enviroment for Js with specifig usefull libraies Wich javascript Developers can user sepratley.
                        JavaScript is mainly used for client side activity, like possible validation or refreshing the page in a specfig interval or provide some dynamic changes in the web pages without the client refreshing the page. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        sql has Relational database management systems. while NoSql has Non relional Or distributed database system. Sql databases have fixed ot static predifined schema, and Nosql Has Dynamic Schema. SQL database is not suited for hierachical data storage. while NoSql Database are bet suited for hierachical  data storage.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Every jwt contains encoded json Objects including a set of Claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. Jwt can be used for authorization or authentication.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;
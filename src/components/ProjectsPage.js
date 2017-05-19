import React from 'react';
import { Col, ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

const ProjectsPage = () => (
    <div>
        <Col xs={12}>
            <PageHeader>Independent Projects</PageHeader>

            <PageHeader>Interesting Class Projects</PageHeader>

            <PageHeader>Papers</PageHeader>

            <h3>Math Papers</h3>
            <ListGroup>
                <ListGroupItem href="http://bit.ly/2pYMQVS">
                    Advanced Linear Algebra - Coxeter Groups
                </ListGroupItem>
                <ListGroupItem href="http://bit.ly/2q217Aj">
                    Computational Topology - Grammy Data Analysis
                </ListGroupItem>
            </ListGroup>    

            <h3>Electrical Engineering Papers</h3>
            <ListGroup>
                <ListGroupItem href="http://bit.ly/2rxi8V1">
                    Datacenter Architecture - Round Robin Compuational Sprinting
                </ListGroupItem>
            </ListGroup>    

            <h3>Research</h3>
            <ListGroup>
                <ListGroupItem href="http://dl.acm.org/citation.cfm?id=3014428">
                    Computational Sprinting: Architecture, Dynamics, and Strategies
                </ListGroupItem>
            </ListGroup>    
        </Col>
    </div>
)

export default ProjectsPage;

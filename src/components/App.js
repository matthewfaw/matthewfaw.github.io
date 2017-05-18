import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomePage from './WelcomePage';
import NavBar from './NavBar';

const navTitle = 'Matthew Faw'
const navItems = [
    {pathname: '/projects', text: 'Projects'},
    {pathname: '/edu', text: 'Education'},
    {pathname: '/music', text: 'Music'},
]

const App = () => (
    <Router>
        <div>
            <NavBar 
                title={navTitle}
                items={navItems}
            />
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Route exact path="/" component={WelcomePage}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    </Router>
)

export default App;

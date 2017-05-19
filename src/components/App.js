import React from 'react';
import { hashHistory as history, BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomePage from './WelcomePage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import MusicPage from './MusicPage';
import NavBar from './NavBar';

const navTitle = 'Matthew Faw'
const navItems = [
    {pathname: '/projects', text: 'Projects'},
    {pathname: '/edu', text: 'Education'},
    {pathname: '/music', text: 'Music'},
]

const App = () => (
    <Router history={history}>
        <div>
            <NavBar 
                title={navTitle}
                items={navItems}
            />
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route exact path="/projects" component={ProjectsPage}/>
                        <Route exact path="/edu" component={EducationPage}/>
                        <Route exact path="/music" component={MusicPage}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    </Router>
)

export default App;

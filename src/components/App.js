import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import WelcomePage from './WelcomePage';
import SecondPage from './SecondPage';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/second">Second</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={WelcomePage}/>
            <Route path="/second" component={SecondPage}/>
        </div>
    </Router>
)

export default App;

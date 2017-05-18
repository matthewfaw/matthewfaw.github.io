import React from 'react';
import { Col, ResponsiveEmbed } from 'react-bootstrap';

const WelcomePage = () => (
    <div>
        <Col xs={6}>
            <h1>Matthew C. Faw</h1>
            <p>
                I recently graduated from Duke University with 
                a B.S.E. in Electrical & Computer Engineering,
                Computer Science, and Mathematics.  In June,
                I'll be joining <a href="https://www.verato.com/">Verato </a>
                as a Software Engineer.
            </p>
            <p>
                In my spare time, I love reading, running, playing classical
                guitar, and listening to music. I also really enjoy working
                on projects in my spare time.  For a taste of some things
                I've been working on recently, check out my
                <a href="https://github.com/matthewfaw"> GitHub. </a>
                For an overview of my professional experience, check out my
                <a href="https://www.linkedin.com/in/matthew-faw-986800126/"> LinkedIn. </a>
            </p>
        </Col>
        <Col xs={6}>
            <ResponsiveEmbed a4by3>
                <embed type="image/jpg" src="/images/grad.JPG" />
            </ResponsiveEmbed>
        </Col>
    </div>
)

export default WelcomePage;

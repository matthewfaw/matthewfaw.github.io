import React from 'react';
import { Col, PageHeader } from 'react-bootstrap';

const ProjectsPage = () => (
    <div>
        <Col xs={12}>
            <PageHeader>Independent Projects</PageHeader>
            <p>
            Here's a simple chat app that I made using the Redux architecture:
            <a href="https://redux-chat.herokuapp.com/"> Redux Chat</a>.
            Note that it's still a work in progress.  The motivation behind
            the app is to have multiple contexts for a given conversation.
            If users want to chat about multiple topics without interleaving
            these topics in one chat thread, they can type a command into
            the terminal on-screen to switch branches.
            </p>

            <PageHeader>Interesting Class Projects</PageHeader>
            <h3>Math Papers</h3>
            <p>
            During my senior year, I took an Advanced Linear Algebra 
            <a href="https://services.math.duke.edu/~ezra/403/403.html"> course</a>.
            In place of a final exam, each student got to write a paper and give a
            20-minute presentation on a topic related to linear algebra that was 
            not covered in the course.  I did my project on Finite Coxeter Groups,
            which are the finite Euclidean reflection groups.  Examples of these
            groups are the symmetries of regular polytopes. One can actually enumerate
            all finite Coxeter groups using Coxeter Graphs. Placing some additional 
            constraints on the Coxeter graphs, we arrive at a group called the Weyl Group.
            This group arises in many contexts, such as in the study of Lie Algebras
            and Lie Groups.  The construction of Weyl Groups in the Euclidean setting
            is actually very similar to the construction in the Lie Alegebra setting.
            I explore many of these ideas in my <a href="http://bit.ly/2pYMQVS">paper</a>.
            </p>
            <p>
            I also took a Topolical Data Analysis course during my senior year.
            I collected Grammy data, and performed some Topological data analysis
            methods on it to attempt to find cycles in the data. The paper we wrote
            can be found <a href="http://bit.ly/2q217Aj">here</a>.
            </p>

            <h3>Electrical Engineering Papers</h3>
            <p>
            In my Datacenter Architecture course, my group explored the
            feasibility of a Round robin sprinting strategy. The paper we wrote
            can be found <a href="http://bit.ly/2rxi8V1">here</a>.
            </p>

            <PageHeader>Research Papers</PageHeader>
            <p>
            I did research with Professor 
            <a href="http://people.duke.edu/~bcl15/"> Benjamin Lee </a>
            during my junior and senior years at Duke.  My work began as a
            result of my research project in his Datacenter Architecture course.
            During the course, I explored the feasibility of a Round Robin sprinting
            strategy.  I integrated this idea as a baseline measure for a new
            sprinting strategy based on game theory introduced by graduate students in his lab.
            In January 2017, we 
            published <a href="http://dl.acm.org/citation.cfm?id=3014428">this work</a> to 
            TOCS journal.
            </p>
        </Col>
    </div>
)

export default ProjectsPage;

//will contain infomation on staying safe
import React from 'react';
import {Container, Row, Col} from 'reactstrap';

function Safe(props) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={8}>
                        <h1>Staying safe</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>                    
                    </Col>
                    <Col >
                    <img src="https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80" alt="cv-image"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Safe;
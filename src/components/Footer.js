import React from 'react';
// import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div id="footer">
        <Container className="footer-link">
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row >
                <Col >1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
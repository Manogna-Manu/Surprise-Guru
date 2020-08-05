import React from 'react';
import './Calender.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Calender = () => {
    return (
        <div>
            <div class="calendertop">
                <div class="container">
                    <h1 class="col-xs-12 text-center mb-4 d-flex justify-content-center align-items-center">Block The Calender</h1>
                </div>
            </div>
            <div class="calenderbottom">
                <img src="https://www.surprisemachi.com/wp-content/themes/surprisemachi/img/surprise/wave.svg" height="auto" width="100%" />
            </div>
            <div class="calenderform">
                <div class="container">
                    <div class="col-xs-12">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} sm={6} xs={12}>
                                    <Form.Group as={Col}  >
                                        <input type="text" class="form-control" placeholder="Your Name (required)" required />
                                    </Form.Group>
                                    <Form.Group as={Col}  >
                                        <input type="text" class="form-control" placeholder="Phone (required)" pattern="^[7-9]{1}[0-9]{9}$" required />

                                    </Form.Group>
                                    <Form.Group as={Col}  >
                                        <input type="text" class="form-control" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                                    </Form.Group>
                                    <Form.Group as={Col}  >
                                        <Form.Control placeholder="Occassion (required)" required />
                                    </Form.Group>
                                    <Form.Group as={Col}  >
                                        <Form.Control placeholder="City (required)" required />
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} xs={12}>
                                    <Form.Group as={Col}  >
                                        <Form.Control placeholder="Occassion Date (required)" required />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <label class="col-xs-12"><b>What is the best time to contact?</b></label>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Row>
                                            <Col sm={4} xs={12}>
                                                <input type="radio" />Morning</Col>
                                            <Col sm={4} xs={12}>
                                                <input type="radio" />Afternoon</Col>
                                            <Col sm={4} xs={12}>
                                                <input type="radio" />Evening</Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <textarea class="form-control" rows="4" id="message" placeholder="Your Message (Optional)"></textarea>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Link ><Button variant="outline-danger" size="sm" className="float-right">Submit</Button></Link>
                                    </Form.Group>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calender;

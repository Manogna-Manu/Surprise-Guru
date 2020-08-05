import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="contactbg p-5">
                <h1 className="text-center p-2" style={{ color: "#f05a28" }}>Contact Us</h1>
                <div className="container row">
                    <div className="col-md-6 float-left">

                        <h3>Address</h3>

                        <p>Surpr!ze Guru,<br />
                        2-48/5/6, Old Mumbai Hwy,<br />
                       Telecom Nagar Extension,<br />
                        Gachibowli, Hyderabad.</p>
                        <div>
                            <h3>Email</h3>
                            <p><a href="#">surpriseguru@gmail.com</a></p>
                            <h3>Contact No.</h3>
                            <p>9347653765 / 786530975</p>
                        </div>
                    </div>
                    <div className=" col-md-6 float-right">
                        <img src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="auto" />
                    </div>
                </div>
                <hr />

                <div className=""><h1 class=" text-center">For Event Related Queries</h1>
                    <div className="container ">
                        <Form>
                            <FormGroup>Name
        <Form.Control type="email" placeholder="Enter Name" size="md"></Form.Control>
                            </FormGroup>
                            <FormGroup>Email Address
        <FormControl type="email" placeholder="Enter Email" size="md"></FormControl>
                            </FormGroup>
                            <FormGroup>Phone
        <FormControl placeholder="Enter phone" size="md"></FormControl>
                            </FormGroup>
                            <FormGroup>Message
                            <textarea class="form-control" rows="4" id="message" placeholder="Your Message"></textarea>

                            </FormGroup>
                            <Form.Group >
                                <Link to="/Submit"><Button variant="outline-danger" size="md" className="float-right">Submit</Button></Link>
                            </Form.Group>
                        </Form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact

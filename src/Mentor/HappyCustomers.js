import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import './HappyCustomers.css';
import { CartContext } from './ContextApi';

const HappyCustomers = () => {
  const { state: { review } } = useContext(CartContext);
  return (
    <>
      <div>
        <h1 className="text-center text-warning">Our Happy Customers</h1>
        <Carousel>
          {review.map((item) => (
            <Carousel.Item>
              <img style={{ width: "100%", height: "400px" }} src={item.img} alt="Los Angeles" />
              <Carousel.Caption className="text-center pb-4">
                <p>{item.feedback}</p>
                <h3>{item.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <h1 class="text-center text-warning">Watch this Video</h1>
      <div className="jumbotron-fluid text-center back-jumb p-4" style={{ position: "relative", display: "block", width: "100%" }}>
        <iframe src="https://www.youtube.com/embed/v0Bkxc3YeIc" className="pb-5" 
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div>
    </>
  );
}

export default HappyCustomers;

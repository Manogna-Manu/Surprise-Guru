import React, { useContext } from "react";
import './Surprises.css';
import { Link } from "react-router-dom";
import { Button, Jumbotron } from 'react-bootstrap';
import { CartContext } from './ContextApi';


const Surprises = () => {
  const { state: { surprise } } = useContext(CartContext);
  return (
    <div className="bg" >
      <div className="container" >
        {/* <h1 className="text-center text-warning">Our Surprises</h1> */}
        <Jumbotron className="bg-light">
          <div className="row">
            {surprise.map((data, index) => (
              <>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div class="card shadow mb-5" style={{ width: "16rem" }}>
                    <marquee behavior="slide" direction="down"> <img
                      class="card-img-top"
                      width="240"
                      height="275"
                      src={data.img}
                      alt="Card image cap"
                    /></marquee>
                    <marquee behavior="slide" direction="up"><div class="card-body">
                      <strong class="card-title" style={{ fontSize: "15px" }}>
                        {data.type}
                      </strong>
                      <Link to="/Calender"><Button variant="outline-danger" size="sm" className="float-right my-2">Block The Calender</Button></Link>
                    </div></marquee>
                  </div>

                </div>
              </>
            ))}
          </div>
        </Jumbotron>
      </div>
    </div>
  )
}

export default Surprises;

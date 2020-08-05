import React, { useContext } from "react";
import './Gifts.css';
import { Link } from "react-router-dom";
import { Button, Jumbotron } from 'react-bootstrap';
import { CartContext } from './ContextApi';

const Gifts = () => {
  const { state: { gift, cart }, addToCart,Item } = useContext(CartContext);
  console.log(cart)
  return (
    <div className="giftsbg" >
      <div className="container" >
        {/* <h1 className="text-center text-warning">Our Surprises</h1> */}
        <Jumbotron className="bg-light text-center">
          <div className="row">
            {gift.map((data, index) => (
              <>
                <div className=" col-md-4 col-sm-6 col-xs-12">

                  <marquee behavior="slide" direction="down"> <img
                    class="mb-3 imgstyle img-fluid"
                    width="280"
                    height="235"
                    src={data.img}
                    alt="image"
                  /></marquee>
                </div>

                <div className="col-md-8 col-sm-6 col-xs-12">
                  <marquee behavior="slide" direction="up">
                    <h3 class="" >
                      {data.title}
                    </h3>
                    <p>{data.matter}</p>
                    <p className="text-success">Price: <b>{data.price}/_</b></p>
                    <div class="py-2 "><Link ><Button variant="outline-danger" onClick={() => addToCart(index)} disabled={data.incart == "true" ? true : false}>Add to Cart</Button></Link>
                    {/* <Link to="/Explore"><Button variant="outline-danger" onClick={() => Item(index)} disabled={data.incart == "true" ? true : false}>Explore</Button></Link> */}
                    </div>
                  </marquee>
                </div> <hr />
              </>

            ))}

          </div>

        </Jumbotron>
      </div>
    </div>
  )
}

export default Gifts;

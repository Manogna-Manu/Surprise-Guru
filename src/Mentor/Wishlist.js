import React, { useContext } from 'react'
import { CartContext } from './ContextApi';
import { Link } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
import './Wishlist.css';

const Wishlist = () => {
  const { state: { cart }, deleteItem } = useContext(CartContext)
  return (
    <div>
      <div class="cartbg">
        <div class=" container border text-center ">
          {(cart.length == 0) ?
            <div className="text-center" >
              <img height="300px" src="https://i.pinimg.com/originals/c0/a4/ce/c0a4ce21e959bba78e7cc0d3ed02f781.gif" />
              <div className="text-center">
                <h6 >YOUR CART IS EMPTY</h6>
                <Link to="/Gifts"> <button className="btn btn-dark btn-md mb-5">BuyNow</button></Link>
              </div>
            </div> : (

              <div class="row my-4">
                {cart.map((data, index) => (
                  <>
                    <div class="col-md-3 mb-4">
                      <img src={data.img} width="150px" alt="Mobile 1" />
                    </div>
                    <div class="col-md-3 mt-4">
                      <h5 class="" >
                        {data.title}
                      </h5>
                      <br /><br />
                    </div>
                    <div class="col-md-3 mt-4">
                      <p className="text-success">Price: <b>{data.price}/_</b></p>
                      <br /><br />
                    </div>
                    <div class="col-md-3"><button className="btn btn-danger" onClick={() => deleteItem(index)}>Remove</button>
                    </div>
                  </>
                )
                )
                }

              </div>

            )}
        </div>
      </div>
    </div>
  )
}

export default Wishlist

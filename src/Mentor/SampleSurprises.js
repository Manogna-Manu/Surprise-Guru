import React, { useContext } from "react";
import {Link} from "react-router-dom";
import './SampleSurprises.css';
import {CartContext} from './ContextApi';

const SampleSurprises = () => {
  const {state:{samplesurprises}}=useContext(CartContext);
  return (
    <>
      <div className="bgg" style={{backgroundColor:"#fff"}}>
        <h1 className="text-center text-warning">Our Surprises</h1>
        <div className="row back">
        {samplesurprises.map((data,index) => (
          <>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div class="card cardstyle shadow m-4" style={{ width: "16rem" }}>
              <marquee behavior="slide" direction="down"> <img
                  class="card-img-top"
                  width="240"
                  height="275"
                  src={data.img}
                  alt="Card image cap"
                /></marquee> 
               <marquee behavior="slide" direction="up"><div class="card-body">
                  <strong class="card-title" style={{ fontSize: "16px" }}>
                    {data.type}
                  </strong>
                </div></marquee> 
              </div>
            </div>
          </>
        ))}
      </div> <marquee behavior="scroll" scrollamount="5" direction="left"><p className="  pStyle">For more Surprise types <Link to="/Surprises" href="">Click</Link> here.</p></marquee>
      </div>
    </>
  );
};

export default SampleSurprises;

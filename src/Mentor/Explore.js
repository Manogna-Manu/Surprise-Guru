import React, { useContext } from 'react'
import { CartContext } from './ContextApi';
import { Link } from "react-router-dom";
import { Button, Jumbotron } from 'react-bootstrap';

const Explore = () => {
    const { state: { item } } = useContext(CartContext);
    return (
        <div className="giftsbg" >
            <div className="container" >
                {/* <h1 className="text-center text-warning">Our Surprises</h1> */}
                <Jumbotron className="bg-light text-center">
                    <div className="row">
                        {item.map((data, index) => (
                            <>
                                <div className=" col-md-4 col-sm-6 col-xs-12">

                                    <marquee behavior="slide" direction="down"> <img
                                        class="mb-3 imgstyle"
                                        width="250"
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
                                        {/* <div class="pt-4 "><Link ><Button variant="outline-danger" >Add to Cart</Button></Link>
                    <Link ><Button variant="outline-danger" onClick={() => Item(index)} disabled={data.incart == "true" ? true : false}>Explore</Button></Link>
                    </div> */}
                                    </marquee>
                                </div> <hr />
                                <div>
                                    <h3>Related Products</h3>
                                    <div className="row back">
                                        {data.related.map((x, index) => (
                                            <>
                                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                                                    <div class="card shadow m-4" style={{ width: "16rem" }}>
                                                        <marquee behavior="slide" direction="down"> <img
                                                            class="card-img-top"
                                                            width="240"
                                                            height="200"
                                                            src={x.pro}
                                                            alt="Card image cap"
                                                        /></marquee>
                                                        {/* <marquee behavior="slide" direction="up"><div class="card-body">
                  <strong class="card-title" style={{ fontSize: "16px" }}>
                    {data.title}
                  </strong>
                </div></marquee>  */}
                                                    </div>
                                                </div>
                                            </>
                                        ))}
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

export default Explore

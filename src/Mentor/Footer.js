import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="">
            
            {/* <Navbar variant="primary" expand="lg" className="header ">
           
                <Navbar className="">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://cdn1.iconfinder.com/data/icons/celebration-color-1/64/open-box-surprise-boxing-day-gift-512.png"
                            width="50"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
      Surpr!Ze Guru
                    </Navbar.Brand>
                </Navbar>
              
                
                <Nav className="">
               
                    <ul class=" navbar-nav">
                     <li>  
                    <Link><Nav.Link className="btn btn-quaternary" href="#About Us">About Us</Nav.Link></Link>
                    </li> 
                    <li><Link><Nav.Link className="btn btn-quaternary" href="#Contact Us">Contact Us</Nav.Link></Link>
                    </li>
                    <li> <Link><Nav.Link className="btn btn-quaternary" href="#Privacy Policy">Privacy Policy</Nav.Link></Link>
                    </li>
                    <li> <Link><Nav.Link className="btn btn-quaternary" href="#SHelp and Support">Help and Support</Nav.Link></Link>

                    </li>
                    </ul>
                    <div className=" ml-5" >
                        <ul class="navbar-nav" style={{marginLeft:"300px"}}>
                             <li><Nav.Link class=" ml-auto" ></Nav.Link>

                    </li>
                    <li> <Nav.Link> <img  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Nav.Link>
                    </li><li> <Nav.Link><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Nav.Link>

                    </li><li> <Nav.Link> <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Nav.Link>
                    </li> <li><Nav.Link><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Nav.Link>
                    </li> 
                    </ul>
                    </div>
                </Nav>
                
            </Navbar> */}
            <footer >
                <nav class="navbar navbar-expand-lg navbar-light  py-2 nav-styles1 header  ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="ml-auto" href="/">
                            <Nav.Link>
                            <img
                            alt=""
                            src="https://cdn1.iconfinder.com/data/icons/celebration-color-1/64/open-box-surprise-boxing-day-gift-512.png"
                            width="50"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
     <b> Surpr!Ze Guru</b></Nav.Link>
                            </Link>
                        </li>
                       
                     <li>  
                    <Link><Nav.Link className="btn btn-quaternary" href="#About Us">About Us</Nav.Link></Link>
                    </li> 
                    <li><Link><Nav.Link className="btn btn-quaternary" href="#Contact Us">Contact Us</Nav.Link></Link>
                    </li>
                    <li> <Link><Nav.Link className="btn btn-quaternary" href="#Privacy Policy">Privacy Policy</Nav.Link></Link>
                    </li>
                    <li> <Link><Nav.Link className="btn btn-quaternary" href="#SHelp and Support">Help and Support</Nav.Link></Link>

                    </li>
                
                    </ul>
                    <div class=" ml-auto ">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;

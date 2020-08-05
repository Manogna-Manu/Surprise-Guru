import React, { useContext } from 'react';
import './About.css';
import { Button, Jumbotron } from 'react-bootstrap';
import { CartContext } from './ContextApi';

const About = () => {
    const { state: { teampics } } = useContext(CartContext);
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="300px" width="100%" />
            </div>
            <div className="container-fluid ">
                <div className="aboutbg text-center">
                    <div className="text-center p-5 ">
                        <h3>How we Started....</h3>
                    </div>
                    <div className="parastyle ">
                        Lavish Moments..! Special days..! Lovely occasions.., all these go great with surprises. Wondering on how to surprise
                        your loved ones on any momentous time? don't worry, we Supr!ze Guru, surprise planners in cities are here to
								help you out in endeavoring your surprise plan.<br /><br />

								How about surprising super-mom on the mother’s day with eye popping impressive red roses, surprise chum with chocolate cake
								on the face at midnight, plan a surprise vacation for this wedding anniversary, send a special vanilla cake to a buddy on
								their special day as a surprise, plan this Valentine’s Day with a surprise proposal to your valentine.. Seems pretty? <br /><br />
                                We are a group of young graduates with loads of energy and inspiration committed to deliver the best surprises on any occasion
								you wish to be cherished. We, together as Supr!ze Guru team always try to give the best from us and will never compromise
								on quality and creativity. We make you dive into the decorations and capture all amazing moments for you ‘coz every picture
								pauses you at that beautiful memory. We believe that “Opportunities will not always show up”. We are ready to grab every
								opportunity you give us. Just give us a try.<br /><br />
								Little things in life matter a big deal, they add perfect happiness to life and make it delightful, we all love to celebrate
								every little of these details and that celebration is complete with a surprise. Supr!ze Guru offer you a complete
								customized surprise plans for all such celebrations. We deliver cakes at midnight, organize theme parties and we also can
								plan loads of surprises together so that our work and your ideas will come into reality where your loved ones will feel a
								new variant of surprises.
</div>
                </div>
            </div>
            <div>

                <h2 className="headerstyle text-center p-4">Our Team</h2>
            </div>
            <div className="teamstyle m-5">
                <div className="row">
                    {teampics.map((data, index) => (
                        <>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="m-4" >
                                    <img
                                        class="rounded-circle"
                                        width="240"
                                        height="275"
                                        src={data.img}
                                        alt="Card image cap"
                                    /><h4 class=" mt-2 ml-5" >
                                        {data.name}
                                    </h4>

                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;

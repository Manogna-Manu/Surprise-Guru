import React from 'react';
import Welcome from './Welcome';
import SampleSurprises from './SampleSurprises';
import HappyCustomers from './HappyCustomers';
import Slides from './Slides';

const Home = () =>{
    return (
        <div>
            <Slides></Slides>
            <Welcome></Welcome>
            <SampleSurprises></SampleSurprises>
            <HappyCustomers></HappyCustomers>

        </div>
    )
}

export default Home;

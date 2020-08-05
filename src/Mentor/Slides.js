import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { CartContext } from './ContextApi';

const Slides = () => {
    const { state: { slides } } = useContext(CartContext);
    return (
        <>
            <Carousel>
                {slides.map((item) => (
                    <Carousel.Item>
                        <img style={{ width: "100%", height: "400px" }} src={item} alt="Image" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Slides;

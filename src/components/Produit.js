import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Produit = ({ name, description, image }) => {
    return (
        <Carousel>
            <div>
                <img src={image} />
                <p className="legend">{name}</p>
                {/* <p>{description}</p> */}
            </div>
        </Carousel>
    );
}

export default Produit
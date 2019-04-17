import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Produit extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://www.fillmurray.com/640/360" />
                    <p className="legend">Name</p>
                </div>
                <div>
                    <img src="https://www.fillmurray.com/640/360" />
                    <p className="legend">Name</p>
                </div>
                <div>
                    <img src="https://www.fillmurray.com/640/360" />
                    <p className="legend">Name</p>
                </div>
            </Carousel>
        );
    }
};

export default Produit
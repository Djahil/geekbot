import React from 'react'
import Produit from './Produit'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Message = ({ message, pseudo, produits, intent }) => {

    const self = this
    if (produits) {
        self.listeProduits = Object.keys(produits)
            .map(key => (
                <div>
                    <img src={produits[key].image} />
                    <p className="legend">{produits[key].name}</p>
                </div>
                // <Produit
                //     key={key}
                //     name={produits[key].name}
                //     description={produits[key].description}
                //     image={produits[key].image}
                // />
            ))
    }

    if (pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    }
    if (pseudo === 'Geekbot' && intent === '04A_ListeProduits') {
        return (
            <div className='not-user-message'>
                <p>
                    <strong>{pseudo} :</strong> {message}
                </p>
                <Carousel>
                    {this.listeProduits}
                </Carousel>
            </div>
        )
    }
    else {
        return (
            <p className='not-user-message'>
                <strong>{pseudo} :</strong> {message}
            </p>
        )
    }
}

export default Message
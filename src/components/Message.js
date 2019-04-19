import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Connexion from './Connexion'
import Cart from './Cart'

const Message = ({ message, pseudo, produits, intent }) => {

    const self = this
    if (produits) {
        self.listeProduits = Object.keys(produits)
            .map(key => (
                <div key={key}>
                    <img alt="" src={produits[key].image} />
                    <div className="legend">
                        <h4>{produits[key].name}</h4><br />
                        <span>{produits[key].description}</span>
                    </div>
                </div>
            ))
    }

    if (pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    } else {
        if (intent === 'cart.check') {
            return (
                <div className='not-user-message'>
                    <p><strong>{pseudo} :</strong> {message}</p>
                    <Cart />
                </div>
            )
        }
        if (intent === '04A_ListeProduits' || intent === '04Abis_ListProduitsByCategorie') {
            return (
                <div className='not-user-message'>
                    <p><strong>{pseudo} :</strong> {message}</p>
                    <Carousel>
                        {this.listeProduits}
                    </Carousel>
                </div>
            )
        }
        if (intent === 'connexion' || intent === 'connexion.login') {
            return (
                <div className='not-user-message'>
                    <p><strong>{pseudo} :</strong> {message}</p>
                    <Connexion />
                </div>
            )
        } else {
            return (
                <p className='not-user-message'>
                    <strong>{pseudo} :</strong> {message}
                </p>
            )
        }
    }
}

export default Message
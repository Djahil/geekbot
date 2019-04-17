import React from 'react'
import Produit from './Produit'

const Message = ({message, pseudo, produits, intent}) => {
    
    const self = this
    if(produits) {
        self.listeProduits = Object.keys(produits)
        .map(key => (
            <Produit
                key={key}
                name={produits[key].name}
                description={produits[key].description}
                image={produits[key].image}
            />
        ))
    }

    if(pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    }
    if (pseudo === 'Geekbot' && intent === 'intent.test.produit')
    {
        return (
            <div>
                <p className='not-user-message'>
                    <strong>{pseudo} :</strong> {message}
                </p>
                {this.listeProduits}
            </div>
        )
    }
    else {
        return(
            <p className='not-user-message'>
                <strong>{pseudo} :</strong> {message}
            </p>
        )
    }
}

export default Message
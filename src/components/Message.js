import React from 'react'
import Produit from './Produit'

const Message = ({intent, message, pseudo, produits}) => {
    
    const listeProduits = Object.keys(produits)
        .map(key => (
            <Produit
                key={key}
                name={produits[key].name}
                description={produits[key].description}
                image={produits[key].image}
            />
        ))

    if(pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    } else {
        if (intent === 'intent.test.produit') {
            return (
                <div>
                    <p className='not-user-message'>
                        <strong>{pseudo} :</strong> {message}
                    </p>
                    <p>{listeProduits}</p>
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

}

export default Message
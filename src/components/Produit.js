import React from 'react'

const Produit = ({name, description, image}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{image}</p>
            <p>{description}</p>
        </div>
    )
}

export default Produit
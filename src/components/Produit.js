import React from 'react'

const Produit = ({id, name, description, image}) => {
    return (
        <div>
            <p><strong>ID :</strong> {id}</p>
            <p><strong>Produit :</strong> {name}</p>
            <p><strong>Image :</strong> {image}</p>
            <p><strong>Desc. :</strong> {description}</p>
            <hr/>
        </div>
    )
}

export default Produit
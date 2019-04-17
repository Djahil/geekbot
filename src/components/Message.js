import React from 'react';
import Produit from './Produit';

const Message = ({ message, pseudo }) => {
    if (pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    } else {
        return (
            <p className='not-user-message'>
                {/* <strong>{pseudo} :</strong> {message} */}
                <Produit />
            </p>
        )
    }
}

export default Message
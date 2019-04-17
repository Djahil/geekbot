import React from 'react'

const Message = ({message, pseudo}) => {
    if(pseudo === 'Human') {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    } else {
        return (
            <p className='not-user-message'>
                <strong>{pseudo} :</strong> {message}
            </p>
        )
    }

}

export default Message
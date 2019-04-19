import React, { Component } from 'react';


class Cart extends Component {
    cart = 'mon panier'
    
    state = {
        cart: this.cart
    }

    render() {
        return (
            <div>
                Cart works
            </div>
        );
    }
}

export default Cart;
import React, { Component } from 'react'

// const user = {
//     "userName": "",
//     "userPassword": ""
// }


class Connexion extends Component {
    state = {
        user: {}
    }

    user = {
        "username": "",
        "password": ""
    }

    connexion = () => {
        console.log('user : ', this.user)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.connexion()
    }
    
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <p>Identifiant</p>
            <input label="id" />
            <p>Mot de passe</p>
            <input label="password" /> <br />
            <button type='submit'>Se connecter</button>
        </form>
        )
    }
}

export default Connexion
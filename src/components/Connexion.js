import React, { Component } from 'react'
import Chatbot from '../services/Chatbot'

class Connexion extends Component {
    state = {
        username: '',
        password: '',
        welcomeMessage: ''
    }

    connexion = () => {
        let chatbot = new Chatbot();

        console.log('username', this.state.username)
        console.log('password', this.state.password)

        chatbot.login(this.state.username, this.state.password).then(res => {
            const hi = res.data;
            console.log('json', res);
            console.log('welcome message', hi);
            this.setState({ welcomeMessage: hi });
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.connexion()
    }

    handleChangeUser = event => {
        const username = event.target.value
        this.setState({ username })
    }

    handleChangePassword = event => {
        const password = event.target.value
        this.setState({ password })
    }

    render() {
        const helloMessage = this.state.welcomeMessage;
        console.log('welcome message in render', helloMessage)
        // const hello = Object.keys(this.state.welcomeMessage)
        if (helloMessage === '') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input
                            label="id"
                            onChange={this.handleChangeUser}
                            value={this.state.username}
                            placeholder="Votre email"
                        />
                        <label>Mot de passe</label>
                        <input
                            label="password"
                            onChange={this.handleChangePassword}
                            value={this.state.password}
                            placeholder="Votre mot de passe"
                        />
                        <br />
                        <button type='submit' className="button">Se connecter</button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p className='not-user-message'>
                        {helloMessage}
                    </p>
                </div>
            )
        }
    }
}

export default Connexion
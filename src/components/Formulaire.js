import React, { Component } from 'react';

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, length } = this.props

        const message = {
            pseudo: 'Human',
            message: this.state.message
        }

        addMessage(message)
        // reset
        this.setState({ message: '', length })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleKeyUp = event => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    render() {
        return (
            <form
                className='form'
                onSubmit={this.handleSubmit}>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.message}
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength={this.props.length}
                />
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit' className="button">Envoyer</button>
            </form>
        )
    }
}

export default Formulaire
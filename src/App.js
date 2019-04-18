import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire';
import Message from './components/Message'
import Chatbot from './services/Chatbot'
import Loader from 'react-loader-spinner'

import './App.css'

class App extends Component {
    state = {
        messages: {},
        intent: '',
        produits: {},
        sessionID: ''
    }

    messagesRef = createRef()

    addMessage = message => {
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message
        this.setState({ messages })

        let chatBot = new Chatbot()
        chatBot.getResponseBot(message.message, this.state.sessionID).then(res => {
            const botMessage = {
                pseudo: 'Geekbot',
                intent: '',
                message: '',
                produits: {}
            }
            botMessage.message = res.data.response.queryResult.fulfillmentText
            botMessage.intent = res.data.response.queryResult.intent.displayName
            if (botMessage.intent === '04A_ListeProduits') {
                botMessage.produits = res.data.response.data
            }
            messages[`message-${Date.now()}`] = botMessage

            this.setState({
                messages,
                // intent: botMessage.intent,
                // produits: botMessage.produits
            })
        })
    }

    componentWillMount() {
        let chatBot = new Chatbot()
        chatBot.getResponseBot('bonjour', '').then(res => {
            this.setState({sessionID: res.data.session_id});
        })
    }

    componentDidUpdate() {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
    }

    render() {
        const messages = Object.keys(this.state.messages)
            .map(key => (
                <Message
                    key={key}
                    message={this.state.messages[key].message}
                    pseudo={this.state.messages[key].pseudo}
                    intent={this.state.messages[key].intent}
                    produits={this.state.messages[key].produits}
                />
            ))

        if(this.state.sessionID === ''){
            return(
                <div className="loader">
                    <Loader
                        type="TailSpin"
                        color="#2196F3"
                        height="100"	
                        width="100"/>
                </div>
            )
        } else {
            return (
                <div className='box'>
                    <div
                        className='messages'
                        ref={this.messagesRef}
                    >
                        <div className='message'>
                            {messages}
                        </div>
                    </div>
                    <Formulaire
                        length={140}
                        addMessage={this.addMessage}
                    />
                </div>
            )
        }
    }
}

export default App

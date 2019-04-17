import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire';
import Message from './components/Message'
import Chatbot from './services/Chatbot'

import './App.css'

class App extends Component {
    state = {
        messages: {},
    }

    messagesRef = createRef()

    addMessage = message => {
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message
        this.setState({ messages })

        let chatBot = new Chatbot()
       
        chatBot.getResponseBot(message.message).then(res => {
            const botMessage = {
                pseudo: 'Geekbot',
                intent: '',
                message: ''
            }
            botMessage.message = res.data.response.queryResult.fulfillmentText
            botMessage.intent = res.data.response.queryResult.intent.displayName
            messages[`message-${Date.now()}`] = botMessage

            this.setState({ messages })
        })
    }


    componentDidUpdate () {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
    }

    render () {
        const messages =  Object.keys(this.state.messages)
        .map(key => (
            <Message
                key={key}
                message={this.state.messages[key].message}
                pseudo={this.state.messages[key].pseudo}
            />
        ))

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

export default App

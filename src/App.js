import React, { Component } from 'react'
import Formulaire from './components/Formulaire';
import Message from './components/Message'
// import Chatbot from './services/Chatbot'

import './App.css'

class App extends Component {
    state = {
        messages: {}
    }

    addMessage = message => {
        // let chatBot = new Chatbot()
        const messages = { ...this.state.messages }
        messages[`message-${Date.now()}`] = message
        this.setState({ messages })
        // chatBot.getResponseBot(message.message).then(res=> { console.log(res.data.response.queryResult.fulfillmentText)})
    }



    render () {
        const messages =  Object.keys(this.state.messages)
        .map(key => (
            <Message
                key={key}
                message={this.state.messages[key].message}
            />
        ))

        return (
            <div className='box'>
                <div className='messages'>
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

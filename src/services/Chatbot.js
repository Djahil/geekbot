import Axios from 'axios'

export default class Chatbot {
    getResponseBot(search) {
        return Axios.post('http://localhost:8000/botman', { message: search });
    }
}
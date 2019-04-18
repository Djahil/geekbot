import Axios from 'axios'

const url = 'http://localhost:8000/botman';
export default class Chatbot {
    getResponseBot(search, sessionID) {
        return Axios.post(url,
        {
            message: search,
            session_id: sessionID
        });
    }

    login(email, password) {
        return Axios.put(url, 
        {
            username: email,
            password: password
        });
    }
}
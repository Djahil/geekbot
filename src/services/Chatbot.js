import Axios from 'axios'

const url = 'http://localhost:8000';


export default class Chatbot {
    getResponseBot(search, sessionID) {
        return Axios.post(url + '/botman',
            {
                message: search,
                session_id: sessionID
            });
    }

    login(email, password) {
        return Axios.put(url + '/login',
            {
                username: email,
                password: password
            });
    }
}


const user = {
    "userName": "",
    "userPassword": ""
}

const connexion = () => {
    console.log('user : ', user)
}

const handleSubmit = event => {
    event.preventDefault()
    connexion()
}

{/* <form
className='not-user-message'
>
<p>Identifiant</p>
<input label="id" />
<p>Mot de passe</p>
<input label="password" /> <br />
<button type="submit">Se connecter</button>
</form> */}
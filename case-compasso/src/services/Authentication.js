import firebase from "../config/firebase-config"

const loginGitHubAuth = (provider) =>{
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
        return res.user
    })
    .catch((erro) => {
        return erro
    })
}

export default loginGitHubAuth
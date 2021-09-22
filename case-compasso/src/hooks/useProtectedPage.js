import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../route/coordinator'
import { githubProvider } from '../config/githubConfig'
import loginGitHubAuth from '../services/Authentication'

const useProtectedPage = () =>{
    const history = useHistory()
    useLayoutEffect (() => {
        const res = loginGitHubAuth(githubProvider)
        if (res.code){
            goToLogin(history)
        }
    },[history])
}
export default useProtectedPage
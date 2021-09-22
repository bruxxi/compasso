// import React from 'react'
// import { githubProvider } from '../../config/githubConfig'
// import loginGitHubAuth from '../../services/Authentication'
// import { useHistory } from 'react-router-dom'


// const LoginPage = () =>{
//     const history = useHistory()
//     const handleLogin = async (provider) => {
//         const res = await loginGitHubAuth(provider)
//         console.log(res)
//       {!res.code && history.push("/")}
//     }

//     return(
//         <div>
//             <button onClick={handleLogin(githubProvider)} >Login GiHub</button>
//         </div>
//     )
// }
// export default LoginPage
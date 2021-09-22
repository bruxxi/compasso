import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const ErrorPage = () =>{
    useProtectedPage()
    return(
        <div>
            ErrorPage
        </div>
    )
}
export default ErrorPage
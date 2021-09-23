import React from 'react'
import { useParams } from 'react-router-dom'
import SearchCard from '../../components/SearchCard/SearchCard'
import CardProfile from '../../components/Card/Card'
import {UserContainer} from './styled'

const UserPage = () =>{
    const params = useParams()
    const username = params.username
    return(
        <UserContainer>
           <CardProfile username={username} /> 
             {/* <SearchCard username={username}/> */}
        </UserContainer>
    )
}
export default UserPage
import React from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchCard from '../../components/SearchCard/SearchCard'


const UserPage = () =>{
    const params = useParams()
    const username = params.username
    return(
        <div>
           <SearchBar />
            <SearchCard username={username}/>
        </div>
    )
}
export default UserPage
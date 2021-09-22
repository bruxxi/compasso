import React, { useState } from 'react'
import { RequestSearch } from '../../services/RequestSearch'
import Repos from './Repos/Repos'
import Starred from './Starred/Starred'
import { UseRequestData } from '../../services/UseRequestData'
import { UseStarredData } from '../../services/UseStarredData'
import Button from '@material-ui/core/Button';

const SearchCard = (username) =>{
    const user = RequestSearch(username)
    const repos = UseRequestData(user.repos_url)
    const starred = UseStarredData(user.login)
    const [renderRepos, setRenderRepos] = useState(false)
    const [renderStarred, setRenderStarred] = useState(false)
    
    const handleRepos = () => {
        if (repos.repos ){
        setRenderRepos(true)
        }
    }

    const handleStarred = () => {
        if (starred.name){
            setRenderStarred(true)
        }
    }

    return(
        <div>
        {/* {console.log(`starred`,starred)} */}
        
            <h1>{user && user.name}</h1>
            {user.bio && <p>{user.bio}</p>}
            <img src={user.avatar_url} alt="avatar"/>
            <a><h4>{user.html_url}</h4></a>
            <p>followers: {user.followers}</p>
            <p>following: {user.following}</p>
            <p>Created At: {user.created_at}</p>
            <p>Updated At: {user.updated_at}</p>
            <p>Public Repos: {user.public_repos}</p>
            <Button variant="outlined" onClick={handleRepos}>Repos</Button>
            <Button variant="outlined" onClick={handleStarred}>Starred</Button>
            {renderRepos &&<Repos repos = {repos}/> }

            {renderStarred && <Starred starred = {starred}/> }

        </div>
    )
}
export default SearchCard
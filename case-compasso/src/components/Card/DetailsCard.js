import React, { useState } from 'react'
import { UseRequestData } from '../../services/UseRequestData'
import { UseStarredData } from '../../services/UseStarredData'
import Button from '@material-ui/core/Button';
import Repos from '../SearchCard/Repos/Repos'
import Starred from '../SearchCard/Starred/Starred'

const DetailsCard = (user) => {
    const repos = UseRequestData(user.repos_url)
    const starred = UseStarredData(user.login)
    const [renderRepos, setRenderRepos] = useState(false)
    const [renderStarred, setRenderStarred] = useState(false)
    const [showProfile, setShowProfile ] = useState(false)
    
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
    return (
        <>
         <Button variant="outlined" onClick={handleRepos}>Repos</Button>
            <Button variant="outlined" onClick={handleStarred}>Starred</Button>
            {renderRepos &&<Repos repos = {repos}/> }

            {renderStarred && <Starred starred = {starred}/> }
        </>

    )

}
export default DetailsCard
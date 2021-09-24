import React, {useState} from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";
import { PostContainer, PostHeader, UserPhoto, PostPhoto } from './styled'  
import { RequestSearch } from '../../services/RequestSearch'
import { UseRequestData } from '../../services/UseRequestData'
import { UseStarredData } from '../../services/UseStarredData'
import Button from '@material-ui/core/Button'
import Repos from '../../components/SearchCard/Repos/Repos'
import Starred from '../../components/SearchCard/Starred/Starred'


export default function CardProfile(username) {
      const user = RequestSearch(username)
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

    const getMoreInfo = () =>{
        setShowProfile(true)
    }


  return (
    <>{console.log(`url`,user.repos_url)}
      <PostContainer>
        <PostHeader>
          <Card>
             <UserPhoto src={user && user.avatar_url} alt={"Imagem do usuario"} />
          <h3>{user && user.name}</h3>
          <a><h4>{user.html_url}</h4></a>
            <p>followers: {user.followers}</p>
            <p>following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
            <button onclick={getMoreInfo}>Profile</button>
            <Button variant="outlined" onClick={handleRepos}>Repos</Button>
            <Button variant="outlined" onClick={handleStarred}>Starred</Button>
            {renderRepos&&<Repos repos = {repos}/> }

            {renderStarred&&<Starred starred = {starred}/> }
       
          </Card>
         
        </PostHeader>
   
      </PostContainer>






    </>
  );
}

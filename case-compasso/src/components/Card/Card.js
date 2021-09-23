import React, {useState} from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";
import { RequestSearch } from '../../services/RequestSearch'
import { UseRequestData } from '../../services/UseRequestData'
import { UseStarredData } from '../../services/UseStarredData'


export default function CardProfile(username) {
      const user = RequestSearch(username)
    const repos = UseRequestData(user.repos_url)
    const starred = UseStarredData(user.login)
    const [renderRepos, setRenderRepos] = useState(false)
    const [renderStarred, setRenderStarred] = useState(false)


  return (
      <>
      <Card>
  <CardPrimaryContent>
    <p>Content</p>
  </CardPrimaryContent>
</Card>
      
    <Card>
    <CardPrimaryContent>
      <h1>{user && user.name}</h1>
      {user.bio && user.bio}
      <CardMedia square imageUrl={user && user.avatar_url} />
      <img className="photo" src={user.avatar_url} alt="avatar"/>
    </CardPrimaryContent>

    <CardActions>
      <CardActionButtons>
        <button>Click Me</button>
      </CardActionButtons>

      <CardActionIcons>
        <i>Click Me Too!</i>
      </CardActionIcons>
    </CardActions>
  </Card>
    </>
  );
}

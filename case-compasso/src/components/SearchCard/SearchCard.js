import React, { useState } from "react";
import { RequestSearch } from "../../services/RequestSearch";
import Repos from "./Repos/Repos";
import Starred from "./Starred/Starred";
import { UseRequestData } from "../../services/UseRequestData";
import { UseStarredData } from "../../services/UseStarredData";
import Button from "@material-ui/core/Button";
import { CardUser } from "../SearchCard/styled";

const SearchCard = (username) => {
  const user = RequestSearch(username);
  const repos = UseRequestData(user.repos_url);
  const starred = UseStarredData(user.login);
  const [renderRepos, setRenderRepos] = useState(false);
  const [renderStarred, setRenderStarred] = useState(false);

  const handleRepos = () => {
    console.log(`clicou`, repos)
      setRenderRepos(!renderRepos);
  };

  const handleStarred = () => {
    console.log(`clicou`, starred)
      setRenderStarred(!renderStarred);
  };
  const CardStar =  starred[0]? starred.map(star=>{
    return(<Starred starred={star} />)
}):<p>Nenhum favorito</p>

const CardRepo =  repos[0]? repos.map(repo=>{
  return( <Repos repos={repo} />)
}):<p>Nenhum repositório</p>

  return (
    <CardUser>
      <div className="firstCard">
        <h1>{user && user.name}</h1>
        {user.bio && <p>{user.bio}</p>}
        <img className="photoProfile" src={user.avatar_url} alt="avatar" />
        <a target="blank" href={user.html_url}>
          <h4>{user.html_url}</h4>
        </a>
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
        <p>Created At: {user.created_at}</p>
      </div>
      <div className="secondCard">
      <p>Updated At: {user.updated_at}</p>
        <p>Public Repos: {user.public_repos}</p>
        <Button variant="outlined" onClick={handleRepos}>
          Repos
        </Button>
        <Button variant="outlined" onClick={handleStarred}>
          Starred
        </Button>
        {renderRepos && CardRepo}

        {renderStarred && CardStar}
      </div>
    </CardUser>
  );
};
export default SearchCard;

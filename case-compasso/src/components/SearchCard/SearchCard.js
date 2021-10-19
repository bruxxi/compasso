import React, { useState } from "react";
import { RequestSearch } from "../../services/RequestSearch";
import Repos from "./Repos/Repos";
import Starred from "./Starred/Starred";
import { UseRequestData } from "../../services/UseRequestData";
import { UseStarredData } from "../../services/UseStarredData";
import Button from "@material-ui/core/Button";
import { CardUser } from "../SearchCard/styled";
import { SpaceButtons } from "../SearchCard/styled";
import moment from "moment";

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
  const CardStar =  starred[0]? 
  <Starred starred={starred} />
:<p>Nenhum favorito</p>

const CardRepo =  repos[0]? 
   <Repos repos={repos} />
:<p>Nenhum repositório</p>

  return (
    <CardUser>
      <div className="firstCard">
        <h1>{user && user.name}</h1>
        {user.bio && <p>{user.bio}</p>}
        <img className="photoProfile" src={user.avatar_url} alt="avatar" />
        <a target="blank" href={user.html_url}>
          <h4>Ir para {user.login} GitHub </h4>
        </a>
        <p>Seguidores: {user.followers}</p>
        <p>Seguindo: {user.following}</p>
        <p>Usuário desde: {moment(user.created_at).format("DD/MM/YYYY")}</p>
        <p>Última atualização: {moment(user.updated_at).format("DD/MM/YYYY")}</p>
        <p>Repositórios Públicos: {user.public_repos}</p>
      </div>
      <div className="secondCard">
    
        <SpaceButtons><Button variant="outlined" onClick={handleRepos}>
          Repositórios
        </Button>
        <Button variant="outlined" onClick={handleStarred}>
          Favoritos
        </Button>
        </SpaceButtons>
        {renderRepos && CardRepo}

        {renderStarred && CardStar}
      </div>
    </CardUser>
  );
};
export default SearchCard;

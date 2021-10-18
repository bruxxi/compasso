import React from "react";
import {CardRepo} from "./styled"

const Repos = (repos) => {
  const ListRepos =
  console.log(repos)
    repos &&
    repos.map((repo) => {
      return (
        <CardRepo>
          <h4>{repo.name}</h4>
          <h1>oi</h1>
          {/* <p>{repo.full_name}</p>
          <p>{repo.owner.login}</p>
          <img src={repo.avatar_url} alt={repo.name}></img>
          <a href={repo.owner.url}>{repo.url}</a>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Forks: {repo.forks}</p> */}
        </CardRepo>
      );
    });

  return (
    <>
      {repos &&  ListRepos}
    </>
  );
};
export default Repos;

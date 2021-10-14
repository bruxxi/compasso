import React from "react";

const Repos = (repos) => {
  const ListRepos =
    repos&&
    repos.map((repo) => {
      return (
        <>
          <h4>{repo.name}</h4>
          <p>{repo.full_name}</p>
          <p>{repo.owner.login}</p>
          <img src={repo.avatar_url} alt={repo.name}></img>
          <a href={repo.owner.url}>{repo.url}</a>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Forks: {repo.forks}</p>
        </>
      );
    });

  return (
    <>
      {repos ? ListRepos :<p>Nenhum favorito</p>}
    </>
  );
};
export default Repos;

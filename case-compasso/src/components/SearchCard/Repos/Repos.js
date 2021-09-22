const Repos = (repos) => {
  const ListRepos =
    repos.repos &&
    repos.repos.map((repos) => {
      return (
        <>
          <h4>{repos.name}</h4>
          <p>{repos.full_name}</p>
          <p>{repos.owner.login}</p>
          <img src={repos.avatar_url} alt={repos.name}></img>
          <a href={repos.owner.url}>{repos.url}</a>
          <p>Description: {repos.description}</p>
          <p>Language: {repos.language}</p>
          <p>Forks: {repos.forks}</p>
        </>
      );
    });

  return (
    <>
      {repos.repos ? ListRepos :<p>Zero</p>}
    </>
  );
};
export default Repos;

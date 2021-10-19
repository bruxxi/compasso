const Starred = (props) => {
    const ListRepos =
      props.starred &&
      props.starred.map((repos) => {
        return (
          <>
            <a href={repos.owner.url}>{repos.url}<h4>{repos.name.toUpperCase()}</h4></a>
            {/* <p>{repos.full_name}</p>
            <p>{repos.owner.login}</p>
            <img src={repos.avatar_url} alt={repos.name}></img>
            
            <p>Description: {repos.description}</p>
            <p>Language: {repos.language}</p>
            <p>Forks: {repos.forks}</p> */}
          </>
        );
      });
  
    return (
      <>
        {props.starred && ListRepos}
      </>
    );
  };
  export default Starred;
  
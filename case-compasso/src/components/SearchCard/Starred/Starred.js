const Starred = (props) => {
    const ListRepos =
      props.starred &&
      props.starred.map((repos) => {
        return (
          <>
            <a href={repos.owner.url}>{repos.url}<h4>{repos.name.toUpperCase()}</h4></a>
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
  
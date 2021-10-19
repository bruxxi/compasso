import React from "react";
import {CardRepo} from "./styled"

const Repos = (props) => {
  const ListRepos = props.repos[0] && props.repos.map((repo) => {
      return (<>
        <CardRepo>
          <a target="blank" href={repo.owner.url}><h4>{repo.name.toUpperCase()}</h4>  </a>       
        </CardRepo></>
      );
    });

  return (
    <>
      {ListRepos}
    </>
  );
};
export default Repos;

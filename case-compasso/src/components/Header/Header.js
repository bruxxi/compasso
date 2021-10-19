import React from "react";
import logo from "../../img/compasso.png";
import { HeaderContainer, LogoContainer, H2 } from "../Header/styled";
import octocat from "../../img/octocat.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} className="compassoLogo" alt="Compasso logo" onClick={goBack} />
       <div className="git"><H2> Username Searcher</H2>
        <img src={octocat} className="github" alt="octocat" onClick={goBack} />
        </div>
      </LogoContainer>
    </HeaderContainer>
  );
};
export default Header;

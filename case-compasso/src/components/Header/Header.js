import React from "react";
import logo from "../../img/compasso.png";
import { HeaderContainer, LogoContainer } from "../Header/styled";
import octocat from "../../img/octocat.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} className="compassoLogo" alt="Compasso logo" />
       <div className="git"> Username Searcher
        <img src={octocat} className="github" alt="octocat" />
        </div>
      </LogoContainer>
    </HeaderContainer>
  );
};
export default Header;

import React from "react";
import github from "../../img/github.png";
import { useHistory } from "react-router";
import { goToHome } from "../../route/coordinator";
import { HeaderContainer } from "../Header/styled";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer onClick={() => goToHome(history)}>
      <img src={github} className="gitLogo" alt="logo compasso" />
      <h2>Busca de usuário GitHub</h2>
    </HeaderContainer>
  );
};
export default Header;

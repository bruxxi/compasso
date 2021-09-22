import React from "react";
import logo from "../../img/compasso.png";
import {HeaderContainer} from '../Header/styled'

const Header = () => {
  return (
    <HeaderContainer>
        <div ClassName="LogoContainer">
        <img src={logo} alt="Compasso logo" />
      </div>
      <h3>Processo Seletivo Compasso</h3>
      <h5>API Rest GitHub</h5>
    </HeaderContainer>
  );
};
export default Header;

import React from "react";
import github from '../../img/github.png';
import { HeaderContainer } from "../Header/styled";

const Header = () => {
  return (
    <HeaderContainer>

          <img src={github} className="gitLogo" alt="logo compasso"/>
          <h2>Busca de usuário GitHub</h2> 
               
      
           
    </HeaderContainer>
  );
};
export default Header;

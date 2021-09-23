import React from "react";
import logo from "../../img/compasso.png";
import { FooterContainer } from "./styled";
import linkedin from "../../img/linkedin.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <FooterContainer>
      <AnchorLink href="https://www.linkedin.com/in/bruna-nunciato/">
        <img className="logoLinkedin" src={linkedin} />
      </AnchorLink>
    </FooterContainer>
  );
};
export default Footer;

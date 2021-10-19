import styled from "styled-components";

export const CardUser = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

 .photoProfile {
    width: 12rem;
    height: 12rem;
    border-radius: 62rem;
    position: absolute;
    left: 10%;
    top:53%;
    transform: translate(-50%, -50%);
    border: 0.2rem solid #ff9a00;
    box-shadow: 0 0 1.25rem #00000033;
    @media screen and (max-device-width: 667px) {
      left: 25%;
      position: relative;
      margin-top: 7rem;
    }
  }
  .firstCard {
    grid-column: 1/2;
  }
  .secondCard {
    grid-column: 2/3;
    margin-top: 2rem;
  }
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SpaceButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

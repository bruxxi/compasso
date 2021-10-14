import styled from "styled-components";

export const HeaderContainer = styled.div`

`
export const LogoContainer = styled.div`
background-color: black;
justify-content: center;
height: 9rem;
vertical-align: middle;
vertical-align: baseline;
align-items: center;
display: flex;
width:100%;
display:grid;
grid-template-columns: repeat(2, 1fr);

.git{
    display:flex;
    justify-content: center;
    text-align: middle;
       grid-column: 2/3;
}
.github{
    height:6rem;
 
}
color:white;
.compassoLogo{
/* width: 8rem; */
grid-column: 1/2;
}
`
    
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
grid-template-columns: repeat(5, 1fr);

.git{
    display:flex;
    justify-content: center;
    text-align: middle;
       grid-column: 2/6;
       cursor: pointer;
       border-radius:0.5rem;
       border: 0.2rem silver;
}
.github{
    height:6rem;
    /* margin-left:-10rem; */

 
}
color:white;
.compassoLogo{
    cursor: pointer;
width: 15rem;
grid-column: 1/2;
}
@media screen  and (max-device-width : 667px){
display:flex;
flex-direction: column;
height: auto;
.compassoLogo{
padding:1rem;
margin-top:1rem;
}
.git{
    padding: 1rem;
}
}

`
export const H2 = styled.h2`
font-size:2rem;
`
    
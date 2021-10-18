import styled from "styled-components";

export const CardUser = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);

.photoProfile{
    width:10rem;
 border-radius:5rem;
}
.firstCard{
grid-column: 1/2;
}
.secondCard{
grid-column: 2/3;
}
@media screen  and (max-device-width : 667px){
display: flex;
flex-direction: column;
}

`
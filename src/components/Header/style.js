import { keyframes, styled } from "styled-components";

const scale = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`

export const Container = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  h1{
    color:#F5F368;
    animation:${scale} 0.5s ease-in-out ;
  }

  p{
    color:#F5F368;
    font-size:18px;
    animation:${scale} 0.5s ease-in-out ;
  }

  img{
    width:96px;
    height:96px;
    background-size:cover;
    border-radius:50%;
    animation:${scale} 0.5s ease-in-out ;
}
`
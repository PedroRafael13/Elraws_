import styled, { keyframes }  from "styled-components";

const scale = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`

export const Container = styled.div`
  a{
    display: flex;
    justify-content:center;
    gap:15px;
    align-items:center;
    color:#F5F1DE;
    background-color:#EF552C;
    border-radius:12px;
    font-weight:600;
    font-size:1.2rem;
    padding:18px;
    position:relative;
    margin:15px;
    animation:${scale} 0.5s linear;
  }
`
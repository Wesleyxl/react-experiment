import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 200px;
    height: 50px;
    background: #000000;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.5s ease;
    border: 1px solid #000000;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      background: #ffffff;
      color: #000000;
    }
  }
`;

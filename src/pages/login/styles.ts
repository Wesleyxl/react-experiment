import styled from "styled-components";

interface IProps {
  isError: boolean;
}

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  input {
    width: 300px;
    height: 50px;
    border: 1px solid ${(props: IProps) => (props.isError ? "red" : "#000000")};
    color: ${(props: IProps) => (props.isError ? "red" : "#000000")};
    border-radius: 5px;
    font-size: 20px;
    padding: 0 15px;
    margin-bottom: 15px;
  }

  .is-error {
    border: 1px solid red;
    color: red;
  }

  button {
    width: 150px;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 5px;
    background: #000000;
    color: #ffffff;
    font-weight: bold;
    transition: 0.5s ease;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
      background: #ffffff;
      color: #000000;
    }
  }
  .isError {
    p {
      margin-bottom: 15px;
      font-size: 14px;
      color: red;
    }
  }
`;

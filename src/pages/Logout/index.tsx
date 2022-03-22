import React from "react";

import { logout } from "../../services/auth";
import { Container } from "./styles";

const Logout: React.FC = () => {
  function handlerClick() {
    logout();
  }

  return (
    <Container>
      <button type="button" onClick={handlerClick}>
        Logout
      </button>
    </Container>
  );
};

export default Logout;

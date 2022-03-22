import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import { Container } from "./styles";

const Home: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.name);
  console.log(user);

  return (
    <Container>
      <h1>{user}</h1>
    </Container>
  );
};

export default Home;

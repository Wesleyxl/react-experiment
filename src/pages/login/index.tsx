import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../../api";
import { Container } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // dispatch
  const dispatch = useDispatch();

  // loading
  const [loading, setLoading] = useState(false);

  // error
  const [error, setError] = useState(false);

  async function handleClick() {
    // request login data and response token
    setLoading(true);
    const loginResponse = await auth.login(email, password);

    if (loginResponse.status === 401) {
      setLoading(false);
      setError(true);
    } else {
      const { access_token } = loginResponse;

      const data = await auth.me(access_token);
      // console.log(me);

      dispatch({
        type: "SET_LOGIN",
        payload: {
          id: data.id,
          name: data.name,
          email: data.email,
          token: access_token,
        },
      });
    }
  }

  return (
    <Container isError={error}>
      <h1>Login</h1>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? (
        <div className="isError">
          <p>Email ou senha incorretos, tente novamente</p>
        </div>
      ) : (
        ""
      )}

      <button onClick={handleClick} type="button">
        {loading ? "Carregando" : "Login"}
      </button>

      <p>
        <strong>Email: </strong>
        <span>{email}</span>, <strong>Senha: </strong>
        <span>{password}</span>
      </p>
    </Container>
  );
};

export default Login;

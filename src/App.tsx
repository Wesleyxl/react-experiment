import React from "react";
import { Provider } from "react-redux";

import Routes from "./Routes";
import store from "./store";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
};

export default App;

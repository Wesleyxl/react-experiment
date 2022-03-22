import { createStore } from "redux";

interface IUserRedux {
  id: number;
  name: string;
  email: string;
  token: string;
}

const initialState: IUserRedux = {
  id: 0,
  name: "",
  email: "",
  token: "",
};

function userRedux(state: IUserRedux = initialState, action: any) {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.Email,
        token: action.payload.token,
      };
    default:
      return state;
  }
}

const store = createStore(userRedux);

export default store;

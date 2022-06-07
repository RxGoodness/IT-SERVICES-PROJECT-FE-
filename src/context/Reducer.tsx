import { Reducer } from "react";
import { GET_TOKEN } from "./actions";

type Action = {
  type: string;
  payload?: any;
};

type InititalState = {
  user: string;
};

const adminReducer: Reducer<InititalState, Action> = (state, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      break;
  }
};

export default adminReducer;

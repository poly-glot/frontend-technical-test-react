import React from "react";
import { useStore } from "react-redux";
import { Counter } from "./Counter";
import counterReducer from "./counterSlice";

export default () => {
  const store = useStore();
  store.injectReducer("counter", counterReducer);

  return <Counter />;
};

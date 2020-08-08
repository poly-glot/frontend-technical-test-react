import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "app/store";

export default function Wrapper(props) {
  const { children } = props;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </Provider>
    </React.StrictMode>
  );
}

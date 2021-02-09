import React from "react";
import { render } from "react-dom";
import "~/index.scss";
import App from "~/App";
import { Provider } from "react-redux";
import { store } from "~/store/storage";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

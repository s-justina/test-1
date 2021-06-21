import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="home-container">
        <App />
      </div>
      <div id="modal"></div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

reportWebVitals();

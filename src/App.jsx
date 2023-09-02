import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteConfigPageComponents from "./RouteConfig";
import { Provider } from "react-redux";
import store from "./Store/Store";

const App = () => {
  return (
    <>
        <RouteConfigPageComponents />
    </>
  );
};

export default App;

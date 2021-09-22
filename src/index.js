import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// N0TE = POINT D'ENTRÉE REACT
// N0TE = reactDOM.render est l'équivallent d'utiliser la propriété innerHTML en js
ReactDOM.render(<App />, document.getElementById("root"));

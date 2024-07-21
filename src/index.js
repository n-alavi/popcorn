import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRatin";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating size={84} />

    <StarRating color="red" />
  </React.StrictMode>
);

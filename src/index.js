import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={4}
      containerClassName=""
      containerStyle={{}}
    />
  </>
);

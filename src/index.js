import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Elga1 from "./pages";

function App() {
  return <Elga1 />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

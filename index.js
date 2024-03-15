import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./Task2/App2";

// import ClassCompo from "./ClassCompo.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    {/* <h1>Hello world!</h1> */}
        <App />
        
    {/* <ClassCompo/> */}
    </React.StrictMode>
)

// let element = React.createElement("h1",{id:"head"},"Hello World!!!!",
// React.createElement("h2",{className:"head"},"HEADING TWO"),
// React.createElement("button",null,"BUTTON"));

// ReactDOM.render(element,document.getElementById("root"));
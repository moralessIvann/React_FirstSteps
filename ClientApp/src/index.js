import React from "react";
//import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';

import App from "./App"

//const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App/>
)
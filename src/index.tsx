import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./services/store";


const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>

    <App />
    </Provider>
    </Router>
  </React.StrictMode>
);

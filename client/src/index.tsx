import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from './redux/store'

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

import "./styles/css/index.css";
import "antd/dist/antd.css";

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={ptBR}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

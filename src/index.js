import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import redux store
import store from './store';
// import component provider từ react redux để kết nối với redux store  với component của react
import { Provider } from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

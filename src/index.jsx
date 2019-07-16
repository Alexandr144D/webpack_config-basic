import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducer/index';
import App from './components/App.jsx';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById("root")
);

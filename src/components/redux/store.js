import reducer from './reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

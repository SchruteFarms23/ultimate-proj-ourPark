import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider ><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

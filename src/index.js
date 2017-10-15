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
import userReducer from './Reducers/userReducer'

const rootReducers= combineReducers({
  user: userReducer
})
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store} ><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

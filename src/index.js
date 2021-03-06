import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import {countryHandler} from "./store/sagas/handlers/countryHandler";

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension())(createStore)(rootReducer);
sagaMiddleware.run(countryHandler);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

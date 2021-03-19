import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import { watcherSaga } from "./redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

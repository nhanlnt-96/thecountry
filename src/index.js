import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import { watcherSaga } from './redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension())(createStore)(rootReducer);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

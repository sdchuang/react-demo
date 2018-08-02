import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
render (App)

if(module.hot){
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
}

registerServiceWorker();

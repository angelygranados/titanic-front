import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.scss';
import App from './Containers/App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

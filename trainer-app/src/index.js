import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import './style/main.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

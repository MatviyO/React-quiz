import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title={'props title'} />, document.getElementById('root'));
serviceWorker.unregister();

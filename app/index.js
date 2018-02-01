/* this is the webpack entry file */

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/theme/style.css';
import App from './components/App.js';

ReactDOM.render(<App/>, document.getElementById('root'));
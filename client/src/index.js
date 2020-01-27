import React from 'react';
import { render } from 'react-dom';
import App from './components';
import './assets/styles/style.scss';
import ws from 'utils';

window.ws = ws;

render(<App />, document.getElementById('root'));
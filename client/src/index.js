import React from 'react';
import { render } from 'react-dom';
import Chat from './components';
import './assets/styles/style.scss';
import ws from 'utils';

window.ws = ws;

render(<Chat />, document.getElementById('root'));
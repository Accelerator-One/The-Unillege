import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';

ReactDOM.render(
<React.StrictMode>
<Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
    <App/>
</React.StrictMode>
,document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
//import config from './aws-exports';
import Amplify from 'aws-amplify';

//Amplify.configure(config)

ReactDOM.render(<App />, document.getElementById('app'));

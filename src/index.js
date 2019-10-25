// this is the entry point to React
// importing main parent App component that wraps around everything
// reactDOM.render renders app into the element with id "root" in index.html
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));


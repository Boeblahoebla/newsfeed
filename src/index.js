// Imports
//////////

// Base dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Components
import App from './components/App';


// Main app render
//////////////////
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));


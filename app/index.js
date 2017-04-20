import React from 'react'
//var App = require('./components/App');

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { render } from 'react-dom'

import App from './components/App'
import CompletedDocuments from './components/CompletedDocuments'


require('./index.css');

render((
	<Router>
		<App/>
	</Router>
	),
	document.getElementById('app')
)

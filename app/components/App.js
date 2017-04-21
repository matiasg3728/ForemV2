var React = require('react');
var CompletedDocuments = require('./CompletedDocuments');
var Copy = require('./Copy')

import {Route} from 'react-router-dom'

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			test:'test'
		}
	}
	render(){
		return(
			<div className='container'>

			<Route exact path='/' test={this.state.test} component={CompletedDocuments} />

			<Route path='/work/:document_id' component={Copy}/>
			
			</div>
		)
	}
}

module.exports = App;
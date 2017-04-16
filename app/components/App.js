var React = require('react');
var CompletedDocuments = require('./CompletedDocuments');

class App extends React.Component{
	render(){
		return(
			<div className='container'>

			<CompletedDocuments />

			</div>
		)
	}
}

module.exports = App;
var React = require('react');
var api = require('../utils/api');
var NameSubmit = require('./NameSubmit')
import {Link, IndexLink, Match} from 'react-router-dom'


/*
	Lets make this a const
	window.location.href
	
*/
function ListCopies(props){
	return(
		<ul>
			
		</ul>
	)

}

class Copy extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
			<div>
			<h1>copy</h1>
			<p>{window.location.href}</p>
			</div>
		)
	}
}

module.exports = Copy;
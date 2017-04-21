var React = require('react');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
var api = require('../utils/api');
var NameSubmit = require('./NameSubmit')
var ListCopy = require('./ListCopiesComponent')
import {Link, IndexLink, Match} from 'react-router-dom';

class Copy extends React.Component{
	constructor(props) {

		super(props);

		var loc = api.fetch_url_id(window.location.href)

		this.state={
			selected_document:{},
			copies:[],
			doc_id:loc,
			selected_copy:null
		}
		
	}

	componentDidMount() {
		console.log("In componentDidMount_copy", this.state)
		var loc = window.location.href;
		loc = api.fetch_url_id(loc);
		var data = []

		api.CopyComponentInfo(loc)
			.then(function(pData){
				if(this.isMounted()){
				this.setState(function(){
					return({
						selected_document:data[0],
						doc_id:loc,
						selected_copy:null
					})
				})}				
			}.bind(this))



	}
	render(){
		console.log(this.state)
		return(
			<div>
			<h1>copy</h1>
			</div>
		)
	}
}
		// api.fetchCompletedDocument(loc)
		// 	.then(function(doc){
		// 		_document = doc

		// 		// this.setState(function(){
		// 		// 	return {
		// 		// 		selected_document:doc,
		// 		// 		doc_id:loc,
		// 		// 		selected_copy:null
		// 		// 	}
		// 		// })
		// 	})
		// 	.then(function(){

		// 	}

		// 	).then(

		// 	);
//<ListCopy copies={this.state.Copies}/>
module.exports = Copy;
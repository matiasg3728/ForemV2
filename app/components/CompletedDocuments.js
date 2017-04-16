var React = require('react');
var api = require('../utils/api');

class CompletedDocuments extends React.Component{
	constructor(props) {

		super(props);

		this.state={
			documents:[],
			selected_document:null
		};

		this.selectDocument = this.selectDocument.bind(this);
		//the line above allows us to modulate this component
		//so that whenever selectDocument is called it's context will
		//refer to this class
	}
	componentDidMount(){
		console.log('In componentDidMount')
		api.fetchCompletedDocuments()
			.then(function(docs){
				this.setState(function(){
					return {
						documents:docs,
						selected_document:null
					}
				})
			}.bind(this));
	}
    selectDocument(doc){
    	this.setState(function(){
    		return {
       			selected_document: doc
    		}
    		console.log(doc)
    	});
    }
    render(){
    	console.log(this.state.selected_document)
    	return(
    		<div>
    		<ListDocuments
    		documents={this.state.documents}
    		selectDocument={this.selectDocument}
    		/>
    		</div>
    	)
    }
}
    		// <p>We want to return a list of all documents and 
    		// a component that has a button and a input box(this will allow
    		// us to pass in the name of the new project)
    		// </p>

function ListDocuments(props){
	//var documents = props.documents;
	//console.log(documents)
		return(
			<ul>
			{props.documents.map(function(doc){
				return(
					<li
					key={doc.document_id}
					onClick={props.selectDocument.bind(null,doc)}
					>
						
						{doc.name}
					</li>
				)
			})}
			</ul>
		)

	}

module.exports = CompletedDocuments;


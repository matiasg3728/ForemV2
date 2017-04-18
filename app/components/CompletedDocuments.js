var React = require('react');
var api = require('../utils/api');
var NameSubmit = require('./NameSubmit')
/** For some reason our HTML elements are all showing up at the bottom
of the page and i dont understand why.  Also do we need router? I have
this gut feeling that i dont. I dont think i need a component to
show the completed docs and the copies.  I think i just need one, lets rethink it
tomorrow after we get someone to help me with the fucking html elements problem**/ 

/** I think im going to change this 'ListDocuments' component to
a sidebar component that will either show a list of project or
copies **/
function ListDocuments(props){
		return(
			<ul className='CompletedDocumentsList'>
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
		//look in the utils to see what this method does
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
	make_new_document(document_name){
		console.log(document_name)

		api.create_new_document(document_name)
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
    		<NameSubmit make_new_document={this.make_new_document}/>
    		<ListDocuments
    		documents={this.state.documents}
    		selectDocument={this.selectDocument}
    		/>
    		</div>
    	)
    }
}



module.exports = CompletedDocuments;


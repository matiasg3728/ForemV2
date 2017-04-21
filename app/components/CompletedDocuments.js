var React = require('react');
var api = require('../utils/api');
var NameSubmit = require('./NameSubmit')
import {Link, IndexLink} from 'react-router-dom'

function ListDocuments(props){
		return(
			<ul className='CompletedDocumentsList'>
			{props.documents.map(function(doc){
				return(
					<li
					key={doc.document_id}
					onClick={props.selectDocument.bind(null,doc)}
					>	
						<Link to={'/work/' + doc.document_id}>{doc.name}</Link>					
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
		this.makeNewDocument = this.makeNewDocument.bind(this);
		//the line above allows us to modulate this component
		//so that whenever selectDocument is called it's context will
		//refer to this class
	}


	makeNewDocument(document_name){
		/*
			fuck yeah mofo this shit works perf, so dont fuck with it
		*/
		api.create_new_document(document_name)
			.then(function(docs){
				this.setState(function(){
					return{
						documents:docs,
						selected_document:null
					}
				})
			}.bind(this))

	}

	componentDidMount(){
		console.log('In componentDidMount_doc')
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
    selectDocument(doc){
    	this.setState(function(){
    		return {
       			selected_document: doc
    		}
    		console.log(doc)
    	});
    }
    render(){
    	return(
    		<div>
    		<NameSubmit pass_up={this.makeNewDocument}/>
    		<ListDocuments
    		documents={this.state.documents}
    		selectDocument={this.selectDocument}
    		/>
    		</div>
    	)
    }
}



module.exports = CompletedDocuments;


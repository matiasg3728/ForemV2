var React = require('react');
var api = require('../utils/api');

class ListCopies extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			selected_copy:null,
			copies:[]
		}
		
	}
	componentDidMount() {
		var loc = this.props.selected_document
		api.fetch_doc_copies(loc)
		.then(function(copies){
			console.log(copies)
			// this.setState(function(){
			// 	// return {
			// 	// 	selected_copy:null,
			// 	// 	copies:copies
			// 	// }
			// })
			
		}.bind(this))
	}
	render(){
	return(
		<ul className='CopyList'>
			{this.state.copies.map(function(copy){
				return(
					<li
					key={copy.copy_id}
					onClick={this.handleClick}
					>
						{copy.name}
					</li>
				)
			})}
		</ul>
	)
	}
}

module.exports = ListCopies;
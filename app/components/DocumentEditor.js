var React = require('react');
var api = require('../utils/api');

class DocumentEditor extends React.Component{
	constructor(props) {
		super(props);
		// the selected doc will be passed in the props
		// Our server is what
		this.state ={
			current_copy:null
		}
		
	}
	render(){
		/**
			We want to show a Text box for u to type in that will hold
			the selected document's text value.  We also are going to want 
			a bar with a split button, a save button, and a finish button so that at any point
			you can either split the copy of the document you are working on,
			save it or finish your work on the document.

			We also want a side bar that holds all the copies that are
			children of the current copy.  Within our DB each copy has a 
			'parent_id' value, so when a copy is clicked in the sidebar the sidebar
			will be updated to hold all that copies 'children'.  There will be a button
			in the sidebar called 'back' that will change the sidebar's list of
			copied documents to the current copy's parents children.  this will not 
			change the current copy you are working on in 
		**/
		return(
			<p>ToDo</p>
		)
	}
}
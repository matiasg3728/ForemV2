var React = require('react');
var api = require('../utils/api');

/**  This is going to be the sidebar, it will always
be present on the page, It should either display a list of
Completed documents or a list of copies.  It will also have two 
different button bars. One will pertain to making new documents, which 
will be present when the list of completed documents is present.  The other
will pertain to the List of copies **/

class SideBarComponent extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list:[],
			completed_document:{
				show:true
			},
			copy:{
				show:false
			}
		}
	}
	render(){
		<ul className='SideBar'>
			{this.state.list.map(function(doc, index){
				return(
					<li
					key={index}
					>
						list element
					</li>
				)
			})}

		</ul>
			}
	}
}
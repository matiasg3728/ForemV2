var React = require('react');

/*
	I dont think we need to change alot in this file,
	its just a prop that is a input form and a button that
	sends whatever is input to its parent
*/

class NameSubmit extends React.Component{
	constructor(props) {
		super(props);

		this.state={
			input_text: ''
		};
		this.update_text = this.update_text.bind(this)
		this.submit_name = this.submit_name.bind(this)
	}

	update_text(event){
		var value = event.target.value;
		//console.log(value, this.props)
		// Side Note of Power:
		// 	Dont ever fucking put 'event.target.value'
		// 	in the setState bc it just fucks everything 
		// 	up and you will be very sad for hours. 
		// please and thankyou
		this.setState(function(){
			return ({
				input_text: value
			})
		})
	}

	submit_name(){
		//console.log(this.props)
		this.props.pass_up(this.state.input_text)

	}

	render(){

		return(
		<div className='NameSubmitBox'>
		<form>
		<input placeholder='New Document?' value={this.state.input_text} onChange={this.update_text}/>
		</form>
		<button onClick={this.submit_name}>~*SuBmIt*~</button>

		</div>
		)
	}
}
module.exports = NameSubmit;
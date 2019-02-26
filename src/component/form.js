import React from "react";

class Form extends React.Component{
	render(){
		return(
			<form onSubmit={this.props.stopMethod}>
			<input type="text" name="num" placeholder="number"/>
			<button>Click</button>
			</form>
		);
	} 
}

export default Form;
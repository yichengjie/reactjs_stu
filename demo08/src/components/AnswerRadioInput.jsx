import React,{PropTypes} from 'react' ;
var uniquid = require('uniquid');

var AnswerRadioInput = React.createClass({
	propTypes:{
		id:PropTypes.string,
		name:PropTypes.string.isRequired,
		label:PropTypes.string.isRequired,
		value:PropTypes.string.isRequired,
		checked:PropTypes.bool,
		onChanged:PropTypes.func.isRequired
	},
	getDefaultProps:function(){
		return{
			id:null,
			checked:false
		};
	},
	getInitialState:function(){
		var id = this.props.id ? this.props.id : uniquid('radio-');
		return {
			/*checked:!!this.props.checked ,*/
			id:id,
			name:id
		};
	},
	handleChanged:function(e){
			var checked = e.target.checked ;
			this.setState({checked:checked}) ;
			if(checked){
				this.props.onChanged(this.props.value) ;
			}
	},
	render:function(){
		return (
			<div className="radio">
				<label htmlFor = {this.props.id}>
					<input type = "radio"
						name = {this.props.name}
						id = {this.props.id}
						value = {this.props.value}
						checked = {this.props.checked}
						onChange = {this.handleChanged}
					 />
					 {this.props.label}
				</label>
			</div>
		) ;
	}
}) ;

export default AnswerRadioInput ;

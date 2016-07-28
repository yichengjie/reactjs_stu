import React ,{PropTypes} from 'react' ;
import AnswerRadioInput from './AnswerRadioInput.jsx' ;
var uniquid = require('uniquid');

var AnswerMultipleChoiceQuestion = React.createClass({
	propTypes:{
		value:PropTypes.string,
		choices:PropTypes.array.isRequired,
		onCompleted:PropTypes.func.isRequired
	},
	getInitialState:function(){
		var id  = uniquid('multiple-choice-') ;
		return {
			id:id,
			value:this.props.value
		} ;
	},
	handleChanged:function(value){
		this.setState({value:value}) ;
		this.props.onCompleted(value) ;
	},
	renderChoices:function(){
		return this.props.choices.map(function(choice,i){
			return (
				<AnswerRadioInput key = {'choice-' +i}
					id={'choice-' +i}
					name={this.state.id}
					label={choice}
					value={choice}
					checked={this.state.value === choice}
					onChanged={this.handleChanged}
				 />
			)
		}.bind(this)) ;
	},
	render:function(){
		return (
			<div className = "form-group">
				<label className ="survey-item-label" htmlFor = {this.state.id}>
					  {this.props.label}
				</label>
				<div className = "survey-item-content">
					 {this.renderChoices()}
        </div>
			</div>
		) ;
	}
}) ;

export default AnswerMultipleChoiceQuestion ;

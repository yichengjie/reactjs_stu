// tutorial1.js
'use strict' ;
import React from 'react' ;
import Formsy from 'formsy-react';
import MyOwnInput from './MyOwnInput.jsx' ;

//class PostInfo extends React.Component {
/*class MyAppForm extends React.Component {

}*/

const MyAppForm = React.createClass({
	getInitialState() {
	  return {
	    canSubmit: false
	  }
	},
	enableButton() {
	  this.setState({
	    canSubmit: true
	  });
	},
	disableButton() {
	  this.setState({
	    canSubmit: false
	  });
	},
	submit(model) {
	  someDep.saveEmail(model.email);
	},
	render() {
	  return (
	    <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} 
	    	onInvalid={this.disableButton}>
	      <MyOwnInput name="email" validations="isEmail" 
	      	validationError="This is not a valid email" required/>
	      <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
	    </Formsy.Form>
	  );
	}
});

export default MyAppForm ;
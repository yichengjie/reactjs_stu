import React,{Component} from 'react';
require('bootstrap/dist/css/bootstrap.css')  ;
//--api
import AnswerMultipleChoiceQuestion from './components/AnswerMultipleChoiceQuestion.jsx' ;
import FormItem from './components/FormItem.jsx' ;

var arrayOfChoices = [
	'F',"M","R"
] ;
class App extends Component {
  constructor(props) {
    super(props) ;
		this.state = {
			serviceType:"F",
			email:''
		}
  }
	onCompleted (value){
		console.info('你选择了最喜欢的水果 : ' + value) ;
		this.setState({
			serviceType:value
		}) ;
		//默认值重置的问题
		//.....
		if(value==='R'){
			this.resetValueDefault('email') ;
		}
	}
	resetValueDefault(name){
		 var obj = {} ;
		 obj[name] = "";
		 this.setState(obj) ;
	}
	handleChangeEmail(event){
		var value = event.target.value ;
		this.setState({email:value}) ;
	}
  render(){
    return (
      <div className ="container">
        <AnswerMultipleChoiceQuestion value ="M"
          choices ={arrayOfChoices} onCompleted = {this.onCompleted.bind(this)}/>
				<form className="form-horizontal">
					<FormItem typeList ={["F","M","T"]}  serviceType ={this.state.serviceType} resetValueDefault = {this.resetValueDefault.bind(this)}>
						<div className="form-group">
								<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
								<div className="col-sm-10">
									<input type="email" className="form-control"
											value ={this.state.email} onChange = {this.handleChangeEmail.bind(this)}
									 		placeholder="Email" />
								</div>
						</div>
					</FormItem>
				</form>
      </div>
    ) ;
  }
}

export default App ;
